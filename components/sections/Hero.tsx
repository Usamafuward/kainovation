'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiArrowRight, FiZap, FiTrendingUp, FiDatabase, FiCpu } from 'react-icons/fi';

// Hero Section Component
export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants: Variants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      className="relative min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white flex justify-center items-center overflow-hidden"
      id='hero'
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10 pt-32 lg:pt-18">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center bg-linear-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6"
              variants={itemVariants}
            >
              <FiZap className="text-sky-400 mr-2" />
              <span className="text-sm font-medium text-sky-300">
                Software & Data Engineering
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="bg-linear-to-r from-white via-blue-200 to-slate-200 bg-clip-text text-transparent">
                Kainovation
              </span>
              <br />
              <span className="bg-linear-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-md sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              We build data infrastructure, AI systems, and software products. We deliver them end-to-end, from architecture to deployment.
            </motion.p>

            {/* Features */}
            {/* <motion.div 
              className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                <span className="text-sm">Automated Analysis</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
                <span className="text-sm">Future Predictions</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full mr-2 animate-pulse" />
                <span className="text-sm">Real-time Insights</span>
              </div>
            </motion.div> */}

            {/* CTA Button */}
            <motion.button 
              className="group relative bg-linear-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full overflow-hidden shadow-2xl shadow-sky-500/25"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                Explore Our Solutions
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>

          {/* Right Side - 3D Visual */}
          <motion.div 
            className="hidden lg:block lg:w-1/2 h-full"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="relative w-full max-w-2xl mx-auto h-[500px] perspective-1000">
              {/* Company Image Placeholder */}
              <motion.div 
                className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 h-48 bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 shadow-xl flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-linear-to-br from-sky-400 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">K</span>
                  </div>
                  <div className="text-blue-300 text-sm font-medium">Company Logo</div>
                  <div className="text-blue-400 text-xs">Kainovation Technologies</div>
                </div>
              </motion.div>

              {/* Main Central Element */}
              <motion.div 
                className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2"
                variants={pulseVariants}
                animate="animate"
              >
                <div className="w-full h-full bg-linear-to-br from-sky-500/30 to-blue-600/30 rounded-3xl backdrop-blur-sm border border-sky-500/50 shadow-2xl transform rotate-12" />
                <div className="absolute inset-4 bg-linear-to-br from-white/20 to-transparent rounded-2xl" />
                <div className="absolute inset-8 bg-linear-to-br from-sky-500/40 to-blue-600/40 rounded-xl" />
                
                {/* Center Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-linear-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FiTrendingUp className="text-white text-2xl" />
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div 
                className="absolute top-0 right-0 w-48 h-32 bg-linear-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border border-indigo-500/30 shadow-xl"
                animate={{ rotate: [0, 5, 0], y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="p-4 h-full flex flex-col justify-between">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <FiDatabase className="text-white text-sm" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/30 rounded" />
                    <div className="h-2 bg-white/20 rounded w-2/3" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-0 left-0 w-56 h-36 bg-linear-to-br from-blue-500/20 to-sky-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 shadow-xl"
                animate={{ rotate: [0, -3, 0], y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="p-4 h-full flex flex-col justify-between">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <FiCpu className="text-white text-lg" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/30 rounded" />
                    <div className="h-2 bg-white/20 rounded w-3/4" />
                    <div className="h-2 bg-white/15 rounded w-1/2" />
                  </div>
                </div>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0.4)" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M200 100 Q 300 200 400 300"
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M100 400 Q 200 300 300 300"
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, 20] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


