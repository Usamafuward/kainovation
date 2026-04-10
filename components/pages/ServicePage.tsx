"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FiArrowRight,
  FiDatabase,
  FiCpu,
  FiBarChart2,
  FiLayers,
  FiZap,
  FiTrendingUp,
  FiCode,
  FiUsers,
} from "react-icons/fi";
import { StaticImageData } from "next/image";
import business_inteligence from "@/public/assets/photos/business_intelligence.png";
import data_engineering from "@/public/assets/photos/data_engineering.png";
import machine_learning from "@/public/assets/photos/machine_learning.png";
import software_engineering from "@/public/assets/photos/software_engineering.png";
import resource_augmentation from "@/public/assets/photos/resource_augmentation.png";
import fairfirst from "@/public/assets/fairfirst.png";
import healthhelper from "@/public/assets/healthhelper.png";
import ServiceCard from "@/components/cards/ServiceCard";
import ClientLogoCard from "@/components/cards/ClientLogoCard";
import TestimonialCard from "@/components/cards/TestimonialCard";

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  features: string[];
  image: StaticImageData;
  id: string;
}

interface Testimonial {
  quote: string;
  client: {
    name: string;
    title: string;
    company: string;
  };
  keywords: string[];
  image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We use Kainovation as a recruiting resource as we prefer that all of our products are developed inhouse. They are able to find strong candidates quickly. We've been happy with the skill level of the people we hired through them. The Kainovation team also takes care of all of the HR related processes so that all we have to worry about is the actual work. Their rates are reasonable as well.",
    client: {
      name: "Vlad Lipunov",
      title: "Cofounder - CTO",
      company: "HealthHelper",
    },
    keywords: ["strong candidates", "skill level", "HR related processes"],
    image: healthhelper,
  },
  {
    quote:
      "Took us 2-weeks every month to generate/collate manual reports, delaying crucial decisions. Kainovation developed real-time, web-based reports on IBM Cognos using our consolidated ODS (Operational Data Store). Thanks to them we are more efficient, profitable, and our customers are happier.",
    client: {
      name: "Clement Fernandopulle",
      title: "Fairfirst Insurance - CTO",
      company: "Fairfax Financial Holdings Limited",
    },
    keywords: ["real-time, web-based reports", "Operational Data Store", "ODS", "efficient", "profitable"],
    image: fairfirst,
  },
];

const servicesData: Service[] = [
  {
    title: "Data Engineering",
    description:
      "Build robust data pipelines and architectures that scale with your business. From legacy systems to modern cloud solutions, we engineer your data infrastructure for optimal performance.",
    icon: FiDatabase,
    gradient: "from-violet-500 to-purple-600",
    features: [
      "ETL/ELT Pipelines",
      "Cloud Data Lakes",
      "Stream Processing",
      "Data Warehousing",
    ],
    image: data_engineering,
    id: "data-engineering",
  },
  {
    title: "Machine Learning",
    description:
      "Harness the power of AI to predict future outcomes and automate decision-making. Our ML solutions turn your data into a competitive advantage through intelligent automation.",
    icon: FiCpu,
    gradient: "from-orange-500 to-red-600",
    features: [
      "Predictive Analytics",
      "Neural Networks",
      "Computer Vision",
      "NLP Solutions",
    ],
    image: machine_learning,
    id: "machine-learning",
  },
  {
    title: "Software Engineering",
    description:
      "Develop scalable, secure, and high-performance applications tailored to your business needs. Our software solutions integrate seamlessly with your existing systems and drive innovation.",
    icon: FiCode,
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "Full-Stack Development",
      "API Integrations",
      "Cloud-Native Applications",
      "DevOps Automation",
    ],
    image: software_engineering,
    id: "software-engineering",
  },
  {
    title: "Resource Augmentation",
    description:
      "Scale your team with our expert developers and data scientists. We provide skilled professionals who integrate seamlessly into your projects, ensuring rapid delivery and high quality.",
    icon: FiUsers,
    gradient: "from-pink-500 to-rose-600",
    features: [
      "On-Demand Talent",
      "Flexible Engagement Models",
      "Domain Expertise",
      "Rapid Onboarding",
    ],
    image: resource_augmentation,
    id: "resource-augmentation",
  },
  {
    title: "Business Intelligence",
    description:
      "Transform raw data into actionable insights with cutting-edge visualization and analytics platforms. We create powerful dashboards that reveal hidden patterns and drive strategic decisions.",
    icon: FiTrendingUp,
    gradient: "from-emerald-500 to-teal-600",
    features: [
      "Azure Synapse Analytics",
      "Power BI Dashboards",
      "Real-time Reporting",
      "Custom Visualizations",
    ],
    image: business_inteligence,
    id: "business-intelligence",
  },
];

export default function ServicesPage() {
  const stageVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
      {/* 
        SECTION: PAGE HERO
      */}
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
              <FiZap className="text-sky-400 mr-2" />
              <span className="text-sm font-medium text-sky-300">
                Comprehensive AI & Data Solutions
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="bg-linear-to-r from-white via-blue-200 to-slate-200 bg-clip-text text-transparent">
                Our
              </span>
              {" "}
              <span className="bg-linear-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-md sm:text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              From data engineering to AI-powered insights, we provide
              end-to-end solutions that transform your business operations and
              drive unprecedented growth.
            </motion.p>

            {/* Service Categories */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10 justify-center"
              variants={itemVariants}
            >
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiDatabase className="text-blue-400 mr-2" />
                <span className="text-sm">Data Engineering</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiTrendingUp className="text-green-400 mr-2" />
                <span className="text-sm">Business Intelligence</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiCpu className="text-purple-400 mr-2" />
                <span className="text-sm">Machine Learning</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiCode className="text-sky-400 mr-2" />
                <span className="text-sm">Software Engineering</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="group relative bg-linear-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full overflow-hidden shadow-2xl shadow-sky-500/25"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                Explore Our Solutions
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 
      SECTION: DATA ARCHITECTURE FLOWCHART - ENHANCED VERSION
    */}
      <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-linear-to-r from-blue-200/40 to-sky-200/40 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-linear-to-r from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-linear-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Data Architecture
              </span>
              <br />
              <span className="text-slate-800">Management</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We manage your complete data architecture from source to insights
            </p>
          </motion.div>

          <div className="flex flex-col items-center max-w-5xl mx-auto">
            {/* Data Sources */}
            <motion.div
              className="relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stageVariant}
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-linear-to-r from-sky-400/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative flex flex-col items-center gap-6 p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-blue-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 bg-linear-to-br from-sky-500 via-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                    <FiDatabase className="text-4xl text-white" />
                  </div>
                  {/* Floating particles around icon */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-sky-400 rounded-full animate-ping" />
                  <div
                    className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"
                    style={{ animationDelay: "1s" }}
                  />
                </motion.div>

                <h3 className="text-3xl font-black bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  Data Sources
                </h3>

                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  {[
                    "Finance Systems",
                    "CRM & ERP",
                    "Human Resources",
                    "Legacy Systems",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-2xl text-sm bg-linear-to-r from-white to-gray-50 text-slate-700 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer"
                      
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Connector */}
            <motion.div
              className="relative my-8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-px h-20 bg-linear-to-b from-blue-400 via-indigo-400 to-purple-400 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50" />
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-blue-400" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-purple-400" />
            </motion.div>

            {/* ETL Pipeline */}
            <motion.div
              className="relative group w-full max-w-5xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stageVariant}
            >
              {/* Enhanced background with gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-100 via-green-50 to-teal-50 rounded-3xl" />
              <div className="absolute inset-0 bg-linear-to-r from-green-400/10 to-emerald-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative p-10 border-2 border-green-200/70 rounded-3xl shadow-2xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-500 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-20 h-20 bg-linear-to-br from-green-500 via-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30">
                      <FiCpu className="text-3xl text-white" />
                    </div>
                    {/* Processing indicator */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                  </motion.div>

                  <h3 className="text-3xl font-black text-slate-800 mb-3">
                    ETL Pipeline
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg max-w-2xl">
                    Intelligent data transformation pipelines engineered for
                    your specific business requirements
                  </p>

                  <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                    {[
                      { name: "Python", color: "yellow-600", bg: "yellow-50" },
                      {
                        name: "Azure Data Factory",
                        color: "blue-600",
                        bg: "blue-50",
                      },
                      { name: "Pentaho", color: "orange-600", bg: "orange-50" },
                    ].map((tech) => (
                      <motion.div
                        key={tech.name}
                        className={`bg-white border-2 border-gray-200 rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl cursor-pointer bg-${tech.bg}/30`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <span
                          className={`font-bold text-${tech.color} text-lg`}
                        >
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className="group font-bold text-green-600 hover:text-green-500 transition-all duration-300 flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('de')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span>Explore Data Engineering</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Connector */}
            <motion.div
              className="relative my-8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-px h-20 bg-linear-to-b from-green-400 via-purple-400 to-indigo-400 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" />
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-green-400" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-indigo-400" />
            </motion.div>

            {/* Storage Solutions */}
            <motion.div
              className="relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stageVariant}
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative flex flex-col items-center gap-6 p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 bg-linear-to-br from-purple-500 via-indigo-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30">
                    <FiLayers className="text-4xl text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-400 rounded-full animate-ping" />
                </motion.div>

                <h3 className="text-3xl font-black bg-linear-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
                  Storage Solutions
                </h3>

                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {["Data Warehouse", "Data Lake", "Data Lakehouse"].map(
                    (item, index) => (
                      <motion.div
                        key={item}
                        className="flex items-center gap-2 px-5 py-3 border-2 border-gray-200 rounded-2xl text-sm bg-linear-to-r from-white to-purple-50 text-slate-700 shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        {item}
                      </motion.div>
                    )
                  )}
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6">
                  {[
                    { name: "Azure", color: "blue-600" },
                    { name: "Google Cloud", color: "red-600" },
                    { name: "AWS", color: "orange-600" },
                  ].map((cloud) => (
                    <motion.div
                      key={cloud.name}
                      className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className={`font-bold text-${cloud.color} text-lg`}>
                        {cloud.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Connector */}
            <motion.div
              className="relative my-8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-px h-20 bg-linear-to-b from-purple-400 via-blue-400 to-cyan-400 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50" />
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-purple-400" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-cyan-400" />
            </motion.div>

            {/* Data Modeling */}
            <motion.div
              className="relative group w-full max-w-5xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stageVariant}
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-100 via-indigo-50 to-cyan-50 rounded-3xl" />
              <div className="absolute inset-0 bg-linear-to-r from-blue-400/10 to-indigo-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative p-10 border-2 border-blue-200/70 rounded-3xl shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-20 h-20 bg-linear-to-br from-blue-500 via-indigo-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                      <FiTrendingUp className="text-3xl text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse" />
                  </motion.div>

                  <h3 className="text-3xl font-black text-slate-800 mb-3">
                    Data Modeling
                  </h3>

                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {[
                      "Data Processing",
                      "Calculations",
                      "Prepare for Visualization",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        className="flex items-center gap-2 px-5 py-3 border-2 border-gray-200 rounded-2xl text-sm bg-linear-to-r from-white to-blue-50 text-slate-700 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {item}
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                    {[
                      { name: "Dremio", color: "cyan-600" },
                      { name: "Azure Synapse", color: "purple-600" },
                    ].map((tech) => (
                      <motion.div
                        key={tech.name}
                        className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <span
                          className={`font-bold text-${tech.color} text-lg`}
                        >
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className="group font-bold text-blue-600 hover:text-blue-500 transition-all duration-300 flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('bi')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span>Business Intelligence Solutions</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Final Enhanced Connector */}
            <motion.div
              className="relative my-8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-px h-20 bg-linear-to-b from-blue-400 via-emerald-400 to-teal-400 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-blue-400" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-teal-400" />
            </motion.div>

            {/* Visualization */}
            <motion.div
              className="relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stageVariant}
            >
              <div className="absolute inset-0 bg-linear-to-r from-sky-400/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative flex flex-col items-center gap-6 p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-blue-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 bg-linear-to-br from-emerald-500 via-teal-600 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                    <FiBarChart2 className="text-4xl text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
                  <div
                    className="absolute -bottom-2 -left-2 w-2 h-2 bg-teal-400 rounded-full animate-ping"
                    style={{ animationDelay: "1s" }}
                  />
                </motion.div>

                <h3 className="text-3xl font-black bg-linear-to-r from-slate-800 to-emerald-600 bg-clip-text text-transparent">
                  Visualization
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
                  {[
                    { name: "Power BI", color: "yellow-600" },
                    { name: "Tableau", color: "blue-600" },
                    { name: "IBM Cognos", color: "gray-600" },
                  ].map((tool) => (
                    <motion.div
                      key={tool.name}
                      className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className={`font-bold text-${tool.color} text-lg`}>
                        {tool.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-2xl text-sm bg-linear-to-r from-white to-emerald-50 text-slate-700 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  Custom Dashboards
                </motion.div>

                <motion.button
                  className="group font-bold text-emerald-600 hover:text-emerald-500 transition-all duration-300 flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-emerald-200 shadow-lg hover:shadow-xl mt-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('ml')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Machine Learning Integration</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        SECTION: SERVICES PLACEHOLDER
      */}
      <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20" id="services">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            className="text-center mb-16 lg:mb-20"
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
                Detailed Services
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
                Our Complete
              </span>
              <br />
              <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </h2>
          </motion.div>

          {/* Placeholder for your services content */}
          <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.title}
                serviceId={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                gradient={service.gradient}
                features={service.features}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 
        SECTION: CLIENTS
      */}
      <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[4rem_4rem] animate-pulse" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Enhanced badge */}
            <motion.div
              className="inline-flex items-center bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 mb-8"
            >
              <FiUsers className="mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Trusted Partnership Network
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Trusted By
              </span>
              <br />
              <span className="bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re proud to work with innovative companies across various
              industries, delivering exceptional results that drive business
              transformation.
            </p>
          </motion.div>

          {/*Client Logo Section */}
          <ClientLogoCard />

          {/* Enhanced Testimonial Section */}
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-5xl font-black">
                <span className="bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  keywords={testimonial.keywords}
                  client={testimonial.client}
                  image={testimonial.image}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
