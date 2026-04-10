"use client";
import { useState } from "react";
import {
  FiArrowRight,
  FiZap,
  FiPhone,
  FiMail,
  FiX,
  FiCalendar,
  FiClock,
  FiArrowLeft,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_4puy5bi";
const EMAILJS_TEMPLATE_ID = "template_xxpj94a";
const EMAILJS_PUBLIC_KEY = "RU_ZRy4irYfFW48qV";

export default function CTAWithSchedulePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Custom alert function
  const showCustomAlert = (message: string) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const today = new Date();

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.toDateString() === today.toDateString();
      const isPast = date < today && !isToday;

      const dayOfWeek = date.getDay();
      const isAllowedDay =
        dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 5;

      days.push({
        date,
        day: date.getDate(),
        isCurrentMonth,
        isToday,
        isPast,
        isWeekend: false,
        isSelectable: isCurrentMonth && !isPast && isAllowedDay,
      });
    }

    return days;
  };

  const getTimeSlots = (selectedDate: Date | null) => {
    if (!selectedDate) return [];

    const dayOfWeek = selectedDate.getDay();

    if (dayOfWeek === 2 || dayOfWeek === 4) {
      // Tuesday or Thursday
      // 10 AM - 5 PM IST
      return [
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
      ];
    } else if (dayOfWeek === 5) {
      // Friday
      // 12 PM - 5 PM IST
      return [
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
      ];
    }

    return [];
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const handleDateSelect = (day: {
    date: Date;
    day: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    isPast: boolean;
    isWeekend: boolean;
    isSelectable: boolean;
  }) => {
    if (day.isSelectable) {
      setSelectedDate(day.date);
      setStep(2);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      showCustomAlert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare email template parameters to send to Kainovation
      const templateParams = {
        to_name: "Kainovation Team",
        to_email: "hello@kainovation.com",
        from_name: formData.name,
        subject: "New Meeting Booking - Discovery Call",
        meeting_date: selectedDate?.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        meeting_time: selectedTime,
        client_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone || "Not provided",
        client_notes: formData.notes || "No additional notes provided",
        meeting_duration: "30 minutes",
        meeting_type: "Discovery Meeting",
        booking_date: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Send notification email to Kainovation
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Store appointment details before resetting
      const appointmentDate = selectedDate;
      const appointmentTime = selectedTime;

      // Show success message
      setShowPopup(false);
      setShowSuccess(true);

      // Auto-hide success message after 8 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 8000);

      resetPopup();

      // Store the appointment details for the success message
      setSelectedDate(appointmentDate);
      setSelectedTime(appointmentTime);
    } catch (error) {
      console.error("Email sending failed:", error);
      showCustomAlert(
        "Failed to send booking notification. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetPopup = () => {
    setShowPopup(false);
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: "", email: "", phone: "", notes: "" });
  };

  const features = [
    "Available 24/7",
    "Free Consultation",
    "Quick Response",
    "Expert Team",
  ];

  return (
    <>
      {/* Custom Alert Popup */}
      {showAlert && (
        <div className="fixed top-4 right-4 z-[100] animate-in slide-in-from-right duration-300">
          <div className="bg-white border border-red-200 rounded-lg shadow-lg p-4 flex items-center gap-3 max-w-md">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <FiAlertCircle className="text-red-600 text-sm" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900">
                Required Fields Missing
              </h4>
              <p className="text-xs text-gray-600 mt-1">{alertMessage}</p>
            </div>
            <button
              onClick={() => setShowAlert(false)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600"
            >
              <FiX className="text-sm" />
            </button>
          </div>
        </div>
      )}

      {/* Success Alert Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center animate-in zoom-in-95 duration-300">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCheck className="text-green-600 text-2xl" />
            </div>

            {/* Success Message */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Meeting Scheduled!
            </h3>
            <p className="text-gray-600 mb-6">
              Your discovery meeting has been successfully scheduled. We&apos;ll
              send you a confirmation email with the meeting details shortly.
            </p>

            {/* Meeting Details */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center gap-3 text-gray-700 text-sm mb-2">
                <FiCalendar className="text-green-600" />
                <span className="font-medium">
                  {selectedDate?.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-700 text-sm">
                <FiClock className="text-green-600" />
                <span className="font-medium">{selectedTime}</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Got it, thanks!
            </button>

            {/* Close button */}
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FiX className="text-gray-400 text-lg" />
            </button>
          </div>
        </div>
      )}

      {/* Original CTA Section */}
      <section
        className="relative min-h-screen py-12 sm:py-16 md:py-22 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden flex items-center justify-center"
        id="cta"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-400/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-indigo-500/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-sky-500/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] md:bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center bg-linear-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FiZap className="text-blue-400 mr-1.5 sm:mr-2 text-sm sm:text-base" />
              <span className="text-xs sm:text-sm font-medium text-blue-200">
                Ready to Transform?
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-linear-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Unlock the Power of Your
              </span>
              <br className="hidden sm:block" />
              <span className="sm:hidden">{" "}</span>
              <span className="bg-linear-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Business Data
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your business with AI-powered insights, automated
              processes, and data-driven strategies. Let&apos;s build the future
              together.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 sm:mb-10 md:mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 group-hover:bg-white/15 group-hover:border- transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => setShowPopup(true)}
                className="group relative text-white font-bold bg-linear-to-r from-blue-500 to-indigo-600 py-3 px-6 sm:py-3.5 sm:px-7 md:py-4 md:px-8 rounded-full overflow-hidden shadow-lg sm:shadow-xl min-w-[180px] sm:min-w-[200px] text-sm sm:text-base"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <FiPhone className="mr-1.5 sm:mr-2 text-sm sm:text-base" />
                  Schedule Call
                  <FiArrowRight className="ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
                </span>
              </motion.button>

              <motion.button
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-3 px-6 sm:py-3.5 sm:px-7 md:py-4 md:px-8 rounded-full overflow-hidden hover:bg-white/20 transition-all min-w-[180px] sm:min-w-[200px] text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "mailto:hello@kainovation.com"}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <FiMail className="mr-1.5 sm:mr-2 text-sm sm:text-base" />
                  Get In Touch
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-4 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-500/20 rounded-full blur-sm"
          animate={{
            y: [-5, 5, -5],
            x: [-3, 3, -3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-4 sm:right-6 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-indigo-500/20 rounded-full blur-sm"
          animate={{
            y: [5, -5, 5],
            x: [3, -3, 3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Schedule Popup - Keep existing popup code unchanged */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="relative bg-white p-6 border-b border-gray-100">
              {/* Close button */}
              <button
                onClick={resetPopup}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FiX className="text-gray-400 text-lg" />
              </button>

              {/* Profile and branding */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src={logo}
                    alt="Kainovation Logo"
                    className="w-12 h-12"
                  />
                </div>
                <div className="text-xs text-gray-500 mb-1">
                  Kainovation Technologies
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Discovery Meeting
                </h3>
                <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <FiClock className="text-xs" />
                    <span>30 min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCalendar className="text-xs" />
                    <span>
                      Web conferencing details provided upon confirmation.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 max-h-[60vh] overflow-y-auto">
              {step === 1 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                    Select a Date & Time
                  </h4>

                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={() => navigateMonth(-1)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <FiArrowLeft className="text-gray-600" />
                    </button>
                    <h5 className="text-gray-900 font-semibold">
                      {monthNames[currentDate.getMonth()]}{" "}
                      {currentDate.getFullYear()}
                    </h5>
                    <button
                      onClick={() => navigateMonth(1)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <FiArrowRight className="text-gray-600" />
                    </button>
                  </div>

                  {/* Days of week header */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                      (day) => (
                        <div
                          key={day}
                          className="p-2 text-center text-gray-400 text-xs font-medium"
                        >
                          {day}
                        </div>
                      )
                    )}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 mb-6">
                    {generateCalendarDays().map((day, index) => (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(day)}
                        disabled={!day.isSelectable}
                        className={`
                            p-2 text-sm rounded-lg transition-all font-medium h-10 flex items-center justify-center
                            ${
                              day.isCurrentMonth
                                ? day.isSelectable
                                  ? "text-gray-900 hover:bg-blue-50 hover:text-blue-600 border border-transparent hover:border-blue-200"
                                  : day.isPast
                                  ? "text-gray-300 cursor-not-allowed"
                                  : "text-gray-400 cursor-not-allowed"
                                : "text-gray-300 cursor-not-allowed"
                            }
                            ${
                              day.isToday
                                ? "bg-blue-600 text-white font-semibold"
                                : ""
                            }
                            ${
                              selectedDate?.toDateString() ===
                              day.date.toDateString()
                                ? "bg-blue-600 text-white"
                                : ""
                            }
                        `}
                      >
                        {day.day}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  {/* Back button */}
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <FiArrowLeft className="text-sm" />
                      <span className="text-sm">Back</span>
                    </button>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Select Time (IST)
                  </h4>
                  <p className="text-gray-600 text-sm mb-6">
                    {selectedDate?.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {getTimeSlots(selectedDate).map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`
                          p-3 border rounded-lg text-sm font-medium transition-all
                          ${
                            selectedTime === time
                              ? "border-blue-600 bg-blue-600 text-white"
                              : "border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50"
                          }
                        `}
                      > 
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  {/* Back button */}
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => setStep(2)}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <FiArrowLeft className="text-sm" />
                      <span className="text-sm">Back</span>
                    </button>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    Enter Details
                  </h4>

                  {/* Selected appointment summary */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-3 text-gray-700 text-sm mb-2">
                      <FiCalendar className="text-blue-600" />
                      <span className="font-medium">
                        {selectedDate?.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 text-sm">
                      <FiClock className="text-blue-600" />
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleFormChange("name", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleFormChange("email", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          handleFormChange("phone", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        placeholder="Tell us about your project or any specific requirements..."
                        rows={3}
                        value={formData.notes}
                        onChange={(e) =>
                          handleFormChange("notes", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-6">
                {step === 3 ? (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full font-semibold py-3 rounded-lg transition-colors ${
                      isSubmitting
                        ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Confirm Appointment"
                    )}
                  </button>
                ) : (
                  <button
                    onClick={() => setStep(step + 1)}
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
            <div className="bg-gray-50 p-4 border-t border-gray-100 text-center text-xs text-gray-500">
              <p>
                By scheduling, you agree to our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
