"use client";
import { motion, Variants } from "framer-motion";
import { FiHeart, FiClock, FiAward, FiZap } from "react-icons/fi";
import ClientLogoCard from "@/components/cards/ClientLogoCard";

const cardVariants: Variants = {
  offscreen: { y: 50, opacity: 0, scale: 0.95 },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

export default function Clients() {
  const trustValues = [
    {
      title: "Quality",
      description:
        "We deliver rigorous, high-standard solutions that stand the test of time, ensuring every product is built with excellence in mind.",
      icon: FiAward,
      gradient: "from-sky-500 to-blue-600",
    },
    {
      title: "Professionalism",
      description:
        "Our team of subject matter experts brings deep competence and structured processes to ensure smooth, end-to-end project execution.",
      icon: FiClock,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Trust",
      description:
        "We focus on long-term partnership orientation. We are fair, ethical, and committed to delivering the best value to your business.",
      icon: FiHeart,
      gradient: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <section
      className="relative py-12 bg-slate-50 sm:py-16 md:py-20 overflow-hidden"
      id="clients"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-2 mb-4 sm:mb-5 md:mb-6"
            style={{ backgroundColor: "rgba(147, 197, 253, 0.1)" }}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
            <span
              className="text-xs sm:text-sm md:text-base font-medium"
              style={{ color: "#10064C" }}
            >
              Clients
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
              Our Clients
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg sm:max-w-2xl mx-auto">
            Organisations we&apos;ve built for.
          </p>
        </motion.div>

        {/* Infinite Scrolling Client Logos */}
        <ClientLogoCard />

        {/* Why They Trust Us Section */}
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-2 mb-4 sm:mb-5 md:mb-6"
            style={{ backgroundColor: "rgba(147, 197, 253, 0.1)" }}
          >
            <FiZap
              className="mr-2 text-xs sm:text-sm md:text-base"
              style={{ color: "#10064C" }}
            />
            <span
              className="text-xs sm:text-sm md:text-base font-medium"
              style={{ color: "#10064C" }}
            >
              Our Foundation
            </span>
          </motion.div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
              Why They Trust Us
            </span>
          </h3>
        </motion.div>

        {/* Trust Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full mx-auto">
          {trustValues.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md sm:shadow-lg"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.8)",
                boxShadow: "0 15px 40px -10px rgba(0,0,0,0.1)",
              }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center text-center mb-4 sm:mb-6 gap-3 sm:gap-5">
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br ${value.gradient} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-md sm:shadow-lg`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 15px 30px -8px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <value.icon className="text-white text-xl sm:text-2xl" />
                </motion.div>

                <h4 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {value.title}
                </h4>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}