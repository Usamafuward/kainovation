// components/Testimonial.tsx
'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { FiStar, FiTrendingUp, FiClock, FiMessageSquare } from 'react-icons/fi';
import fairfirst from '@/public/assets/fairfirst.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const floatingVariants: Variants = {
  animate: {
    y: [-5, 5, -5],
    x: [-2, 2, -2],
    rotate: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Pie chart component
// Stylish Pie Chart component
const PieChart = () => {
  const segments = [
    { percentage: 35, color: '#3B82F6', label: 'Revenue' },
    { percentage: 25, color: '#6366F1', label: 'Growth' },
    { percentage: 20, color: '#8B5CF6', label: 'Retention' },
    { percentage: 20, color: '#10B981', label: 'Efficiency' }
  ];

  let cumulativePercentage = 0;

  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500/20 to-purple-500/20 blur-sm animate-pulse" />

      {/* Main chart container */}
      <div className="relative w-full h-full">
        <svg className="w-full h-full transform -rotate-90 drop-shadow-lg" viewBox="0 0 42 42">
          {/* Background circle with subtle gradient */}
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#374151" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1F2937" stopOpacity="0.5" />
            </linearGradient>

            {/* Segment gradients */}
            <linearGradient id="segment1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="segment2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="segment3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="segment4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>

            {/* Drop shadow filter */}
            <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Background circle */}
          <circle
            cx="21"
            cy="21"
            r="15.915"
            fill="transparent"
            stroke="url(#bgGradient)"
            strokeWidth="4"
          />

          {/* Animated segments */}
          {segments.map((segment, index) => {
            const strokeDasharray = `${segment.percentage} ${100 - segment.percentage}`;
            const strokeDashoffset = -cumulativePercentage;
            cumulativePercentage += segment.percentage;

            return (
              <motion.circle
                key={index}
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke={`url(#segment${index + 1})`}
                strokeWidth="4"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                filter="url(#dropshadow)"
                initial={{ strokeDasharray: "0 100" }}
                animate={{ strokeDasharray }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  strokeWidth: 5,
                  r: 16.5,
                  transition: { duration: 0.2 }
                }}
              />
            );
          })}
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Center circle with gradient */}
            <motion.div
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-linear-to-br from-slate-700 to-slate-800 border-2 border-white/20 shadow-lg flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
            >
              {/* Animated pulse dot */}
              <motion.div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Floating percentage indicator */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: 1,
                rotate: 0,
                y: [-1, 1, -1]
              }}
              transition={{
                scale: { delay: 2, duration: 0.6, ease: "backOut" },
                rotate: { delay: 2, duration: 0.6, ease: "backOut" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              %
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonial() {
  return (
    <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20 overflow-hidden" id='testimonials'>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
        <motion.div
          className="w-full mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-10 sm:mb-14 md:mb-16"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-2 mb-4 sm:mb-5 md:mb-6"
              style={{ backgroundColor: 'rgba(147, 197, 253, 0.1)' }}
            >
              <FiMessageSquare className="mr-2 text-xs sm:text-sm md:text-base" style={{ color: '#10064C' }} />
              <span className="text-xs sm:text-sm md:text-base font-medium" style={{ color: '#10064C' }}>Client Success Story</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
                Transforming Business Operations
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center justify-between">
            {/* Testimonial Content */}
            <motion.div
              className="w-full lg:w-1/2 space-y-6 sm:space-y-8"
              variants={itemVariants}
            >
              {/* Quote */}
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md sm:shadow-lg"
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  boxShadow: "0 15px 40px -10px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -top-3 -left-3 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md sm:shadow-lg">
                  <FiMessageSquare className="text-white text-xs sm:text-sm" />
                </div>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  Took us 2-weeks every month to generate/collate manual reports, delaying crucial decisions. Kainovation developed <strong>real-time, web-based reports</strong> on IBM Cognos using our consolidated <strong>ODS</strong> (<strong>Operational Data Store</strong>). Thanks to them we are more <strong>efficient</strong>, <strong>profitable</strong>, and our customers are happier.
                </p>
              </motion.div>

              {/* Client Info */}
              <motion.div
                className="flex items-center space-x-4 sm:space-x-6 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm"
                variants={itemVariants}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.8)",
                  boxShadow: "0 15px 30px -8px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 mr-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-50 rounded-xl flex items-center justify-center p-2 border border-gray-200/50">
                    <Image
                      src={fairfirst}
                      alt="Fairfirst Insurance Logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex space-x-0.5 sm:space-x-1 sm:hidden">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                      >
                        <FiStar className="text-yellow-500 text-base sm:text-lg fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800">
                    Clement Fernandopulle
                  </h4>
                  <p
                    className="font-medium text-sm sm:text-base"
                    style={{ color: "#10064C" }}
                  >
                    Fairfirst Insurance - CTO
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Fairfax Financial Holdings Limited
                  </p>
                </div>
                <div className="hidden space-x-0.5 sm:space-x-1 sm:flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                    >
                      <FiStar className="text-yellow-500 text-base sm:text-lg fill-current" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              className="relative w-full lg:w-5/12 mt-8 lg:mt-0"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="relative w-full mx-auto h-64 sm:h-72 md:h-80 lg:h-96">
                {/* Main Dashboard Mockup */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl transform rotate-1 sm:rotate-2 md:rotate-3 border border-slate-700"
                  whileHover={{ rotate: 0.5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 sm:p-6 h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded-md sm:rounded-lg" />
                        <h3 className="text-white font-bold text-sm sm:text-base">Real-time Dashboard</h3>
                      </div>
                      <div className="flex space-x-0.5 sm:space-x-1">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                      </div>
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="bg-slate-700/50 rounded-md sm:rounded-lg p-2 sm:p-3">
                        <div className="h-12 sm:h-16 flex items-end justify-between">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-2 sm:w-3 bg-linear-to-t from-blue-500 to-indigo-500 rounded-t"
                              animate={{ height: [`${10 + Math.random() * 30}px`, `${10 + Math.random() * 30}px`] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-md sm:rounded-lg p-2 sm:p-3 flex items-center justify-center">
                        <PieChart />
                      </div>
                    </div>

                    {/* Data Rows */}
                    <div className="space-y-1 sm:space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-2 sm:space-x-3 bg-slate-700/30 rounded-md sm:rounded-lg p-1.5 sm:p-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse" />
                          <div className="h-1.5 sm:h-2 bg-slate-600 rounded flex-1" />
                          <div className="h-1.5 sm:h-2 bg-slate-600 rounded w-6 sm:w-8" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-14 h-14 sm:-top-5 sm:-right-5 sm:w-16 sm:h-16 md:-top-6 md:-right-6 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md sm:shadow-lg"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <FiTrendingUp className="text-lg sm:text-xl md:text-2xl" style={{ color: '#10064C' }} />
                </motion.div>

                <motion.div
                  className="absolute -bottom-5 -left-5 w-12 h-12 sm:-bottom-6 sm:-left-6 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FiClock className="text-base sm:text-lg" style={{ color: '#10064C' }} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* End-to-End Project Example */}
        <motion.div
          className="bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm mt-4"
          variants={itemVariants}
        >
          <h5 className="font-bold text-blue-900 mb-2 flex items-center">
            <FiTrendingUp className="mr-2" /> End-to-End Project Delivery
          </h5>
          <p className="text-sm sm:text-base text-gray-700">
            For Fairfirst, we managed the entire lifecycle from the initial data architecture strategy and ODS inception, through custom backend engineering, to the final real-time reporting delivery and ongoing system management. This full-ownership approach ensured seamless integration and maximum ROI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}