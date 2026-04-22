"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FiMic,
  FiSearch,
  FiMessageSquare,
  FiZap,
  FiLayers,
  FiArrowRight,
  FiLock,
  FiBarChart2,
  FiTrendingUp,
  FiFileText,
  FiFilePlus,
  FiShield,
  FiCalendar,
  FiMessageCircle,
} from "react-icons/fi";

// Interface for a product
interface Product {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  features: string[];
  status: string;
  statusColor: string;
}

// Data for the products with enhanced information
const productsData: Product[] = [
  {
    name: "InsurePulse",
    description:
      "AI-powered operational reporting and analytics platform for insurance companies, offering scheduled reports, custom dashboards, and advanced data pipelines.",
    icon: FiBarChart2,
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Automated Reports (Excel, CSV, PDF)",
      "Custom Dashboards (Power BI/Tableau)",
      "Natural Language Report Search",
      "ETL Pipelines with SQL/Python",
    ],
    status: "Beta",
    statusColor: "from-blue-500 to-indigo-600"
  },
  {
    name: "Privacy Preserving LLM",
    description:
      "A secure intermediary platform that anonymises sensitive data before sending prompts to LLMs like ChatGPT, ensuring data privacy and compliance while preserving conversational context.",
    icon: FiLock,
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "PII Anonymisation",
      "Secure LLM Interactions",
      "Seamless Chat & Doc Support",
      "Policy Compliance",
    ],
    status: "Beta",
    statusColor: "from-blue-500 to-indigo-600"
  },
  {
    name: "Marketing Copilot",
    description:
      "AI marketing solution that generates complete campaigns from a simple prompt, including visuals, copy, and strategy. Automatically tracks performance and reallocates budget for optimal ROI.",
    icon: FiTrendingUp,
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Campaign Generation",
      "Visual & Copy AI",
      "Performance Tracking",
      "Auto Budget Optimization",
    ],
    status: "Completed",
    statusColor: "from-blue-500 to-indigo-600"
  },
  {
    name: "Document OCR Solution",
    description:
      "Intelligent OCR tool that extracts key data from diverse documents, including handwritten and printed content, for compliance, processing, or archival needs.",
    icon: FiFileText,
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Multi-format Document Support",
      "Handwritten & Printed Text",
      "Data Extraction",
      "High Accuracy Layout Handling",
    ],
    status: "Completed",
    statusColor: "from-blue-500 to-indigo-600"
  },
  {
    name: "SAP Entry Automation for Invoices",
    description:
      "Automates extraction and formatting of invoice data for SAP and spreadsheet use. Delivers accurate results even with low-quality scans.",
    icon: FiFilePlus,
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Invoice Data Extraction",
      "SAP-ready Output",
      "OCR for Poor Scans",
      "Reduces Manual Entry",
    ],
    status: "Beta",
    statusColor: "from-blue-500 to-indigo-600"
  },
  {
    name: "AI Insurance Agent",
    description:
      "Virtual agent that explains insurance policies, coverage, and terms in simple language, escalating complex issues to human agents as needed.",
    icon: FiShield,
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Policy Explanation",
      "User-friendly Conversations",
      "Escalation to Human Agents",
      "Trustworthy Support",
    ],
    status: "Beta",
    statusColor: "from-blue-500 to-indigo-600"
  },
  {
    name: "AI Receptionist",
    description:
      "Voice-enabled assistant for appointment scheduling across various sectors, handling bookings, confirmations, and calendar updates in real time.",
    icon: FiCalendar,
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Voice-enabled Booking",
      "Real-time Calendar Sync",
      "Multiple Appointment Types",
      "High-volume Scheduling",
    ],
    status: "Beta",
    statusColor: "from-blue-500 to-indigo-600"
  },
  {
    name: "Support AI Assistant",
    description:
      "Conversational AI that provides real-time, context-aware support via chat and voice by integrating with your internal documentation and resources, reducing dependency on human agents.",
    icon: FiMessageCircle,
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Voice & Chat Support",
      "Knowledge Base Integration",
      "Real-time Guidance",
      "Customer & Employee Support",
    ],
    status: "Completed",
    statusColor: "from-blue-500 to-indigo-600"
  },
];

export default function ProductsPage() {
  // Animation variants for the grid container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // Animation variants for each product card
  const cardVariants: Variants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  const iconVariants: Variants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.6 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="overflow-hidden">
      {/* SECTION: PAGE HERO */}
      <section className="relative min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white flex justify-center items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10 pt-28 md:pt-32 pb-16">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center bg-linear-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6"
              variants={itemVariants}
            >
              <FiLayers className="text-sky-400 mr-2" />
              <span className="text-sm font-medium text-sky-300">
                Innovation Pipeline
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="bg-linear-to-r from-white via-blue-200 to-slate-200 bg-clip-text text-transparent">
                Next-Gen
              </span>
              <br />
              <span className="bg-linear-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Products
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-md sm:text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Pioneering the future of AI-powered business solutions with
              intelligence-driven products designed to revolutionize how organizations
              process information and make decisions.
            </motion.p>

            {/* Product Categories */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10 justify-center"
              variants={itemVariants}
            >
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiShield className="text-blue-400 mr-2" />
                <span className="text-sm">Document Processing</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiMic className="text-green-400 mr-2" />
                <span className="text-sm">Voice Recognition</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiSearch className="text-purple-400 mr-2" />
                <span className="text-sm">Neural Search</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiMessageSquare className="text-sky-400 mr-2" />
                <span className="text-sm">Communication</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="group relative bg-linear-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full overflow-hidden shadow-2xl shadow-sky-500/25"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10 flex items-center">
                Explore Our Products
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECTION: PRODUCTS GRID */}
      <section
        className="relative bg-slate-50 py-12 sm:py-16 md:py-20 overflow-hidden"
        id="products"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
              <FiZap className="mr-2 text-base" style={{ color: "#10064C" }} />
              <span
                className="text-base font-medium"
                style={{ color: "#10064C" }}
              >
                Product Portfolio
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
                Our Products 
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Innovative solutions built to transform your business operations
              through powerful AI and intelligent automation.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:space-y-12  mb-4 lg:mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {productsData.map((product, index) => (
              <motion.div
                key={product.name}
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                {/* Status Badge */}
                {product.status && (
                  <motion.div
                    className={`absolute -top-2 -right-2 z-20 px-3 py-1 rounded-full text-xs font-bold shadow-lg bg-linear-to-r ${product.statusColor} text-white`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {product.status}
                  </motion.div>
                )}

                {/* Main Card */}
                <motion.div
                  className="relative bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl overflow-hidden"
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.8)",
                    boxShadow: "0px 15px 40px -8px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${product.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-linear-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <product.icon className="text-white text-2xl" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <motion.div
                            className={`w-2 h-2 bg-linear-to-r ${product.gradient} rounded-full`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: featureIndex * 0.3,
                            }}
                          />
                          <span className="text-sm font-medium text-gray-700">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="">
                      <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Development Progress</span>
                        <span>
                          {product.status === "Completed"
                            ? "100%"
                            : product.status === "Beta"
                            ? "90%"
                            : product.status === "Development"
                            ? "65%"
                            : product.status === "Alpha"
                            ? "45%"
                            : "20%"}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-full bg-linear-to-r ${product.gradient} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{
                            width:
                              product.status === "Completed"
                                ? "100%"
                                : product.status === "Beta"
                                ? "90%"
                                : product.status === "Development"
                                ? "65%"
                                : product.status === "Alpha"
                                ? "45%"
                                : "20%",
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Action Button */}
                    {/* <motion.button
                      className={`w-full bg-linear-to-r ${product.gradient} text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center space-x-2 shadow-lg`}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0px 8px 20px -5px rgba(0,0,0,0.15)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Learn More</span>
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button> */}
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/20 rounded-full"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        {/* Product Details Section - InsurePulse Preview */}
        <motion.div
          className="mt-16 lg:mt-24 p-8 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          {/* Background grid for detail section */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-50/50 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-1.5 mb-6">
                <FiBarChart2 className="mr-2 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Featured Platform
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                InsurePulse Dashboard Preview
              </h3>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Experience real-time analytics designed specifically for insurance operations. Monitor claims, analyze risk profiles, and generate compliance reports instantly.
              </p>

              <ul className="space-y-4 mb-8">
                {["Real-time claim tracking", "Fraud detection algorithms", "Automated regulatory reporting"].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center text-gray-800"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 shrink-0">
                      <FiZap className="text-blue-600 text-xs" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* UI Mockup - InsurePulse */}
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-[#FFFFFF]">
              {/* Browser/App Header */}
              <div className="h-10 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto bg-[#FFFFFF] border border-[#E2E8F0] rounded-md h-6 w-1/2 flex items-center px-3">
                  <FiSearch className="text-gray-400 text-xs mr-2" />
                  <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 flex flex-col h-[calc(100%-40px)] gap-4">
                {/* Top Row */}
                <div className="flex justify-between items-center mb-2">
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-24 bg-blue-50 border border-blue-100 rounded"></div>
                    <div className="h-6 w-8 bg-[#F8FAFC] border border-[#E2E8F0] rounded"></div>
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 h-24 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="h-2 w-16 bg-gray-300 rounded"></div>
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center ${i === 1 ? 'bg-blue-100 text-blue-600' : i === 2 ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'}`}>
                          {i === 1 ? <FiTrendingUp className="text-xs" /> : i === 2 ? <FiShield className="text-xs" /> : <FiLayers className="text-xs" />}
                        </div>
                      </div>
                      <div>
                        <div className="h-5 w-20 bg-gray-300 rounded mb-1"></div>
                        <div className="h-2 w-12 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex-1 mt-2 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-3 w-24 bg-gray-300 rounded"></div>
                    <div className="h-3 w-32 bg-gray-200 rounded"></div>
                  </div>
                  {/* Simulated Chart */}
                  <div className="h-full flex items-end gap-2 pb-2">
                    {[40, 70, 45, 90, 65, 55, 80, 50, 75, 60, 85, 95].map((h, i) => (
                      <motion.div 
                        key={i} 
                        className="w-full bg-linear-to-t from-blue-600 to-sky-400 rounded-t-sm opacity-80"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </section>
    </main>
  );
}