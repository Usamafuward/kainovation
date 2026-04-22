"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiZap,
  // FiTrendingUp,
  FiDatabase,
  FiCpu,
  FiCode,
} from "react-icons/fi";
import Link from "next/link";
import { StaticImageData } from "next/image";
// import business_inteligence from "@/public/assets/photos/business_intelligence.png";
import software_engineering from "@/public/assets/photos/software_engineering.png";
import data_engineering from "@/public/assets/photos/data_engineering.png";
import machine_learning from "@/public/assets/photos/machine_learning.png";
import ServiceCard from "@/components/cards/ServiceCard";

export default function Services() {
  interface Service {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    features: string[];
    image: StaticImageData;
    id: string;
  }

  const servicesData: Service[] = [
    // {
    //   title: "Business Intelligence",
    //   description:
    //     "Transform raw data into actionable insights with cutting-edge visualization and analytics platforms. We create powerful dashboards that reveal hidden patterns and drive strategic decisions.",
    //   icon: FiTrendingUp,
    //   gradient: "from-sky-500 to-blue-600",
    //   features: [
    //     "Azure Synapse Analytics",
    //     "Power BI Dashboards",
    //     "Real-time Reporting",
    //     "Custom Visualizations",
    //   ],
    //   image: business_inteligence,
    // },
    {
      title: "Data Engineering",
      description:
        "Build robust data pipelines and architectures that scale with your business. From legacy systems to modern cloud solutions, we engineer your data infrastructure for optimal performance.",
      icon: FiDatabase,
      gradient: "from-blue-500 to-indigo-600",
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
      title: "Applied AI",
      description:
        "Harness the power of AI to predict future outcomes and automate decision-making. Our ML solutions turn your data into a competitive advantage through intelligent automation.",
      icon: FiCpu,
      gradient: "from-indigo-500 to-blue-600",
      features: [
        "Predictive Analytics",
        "Neural Networks",
        "Computer Vision",
        "NLP Solutions",
      ],
      image: machine_learning,
      id: "applied-ai",
    },
    {
      title: "Platform Engineering",
      description:
        "Develop scalable, secure, and high-performance applications tailored to your business needs. Our software solutions integrate seamlessly with your existing systems and drive innovation.",
      icon: FiCode,
      gradient: "from-blue-500 to-indigo-600",
      features: [
        "Full-Stack Development",
        "API Integrations",
        "Cloud-Native Applications",
        "DevOps Automation",
      ],
      image: software_engineering,
      id: "platform-engineering",
    },
  ];

  return (
    <section
      className="relative bg-slate-50 py-12 sm:py-16 md:py-20"
      id="services"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
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
              How We Work
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6">
            <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
              Our End-to-End Services
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            From architecture to deployment, we own the full delivery lifecycle so you don&apos;t have to.
          </p>
        </motion.div>

        {/* End-to-End Workflow */}
        <div className="mb-20 sm:mb-24 md:mb-28 lg:mb-32 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-blue-100 via-indigo-200 to-sky-100 transform -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.8)",
                boxShadow: "0px 15px 40px -8px rgba(0,0,0,0.1)",
                y: -10
              }}
              className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md sm:shadow-lg flex flex-col items-center text-center transition-colors"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-md sm:shadow-lg">
                <FiZap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2 sm:mb-3">1. Discovery & Architecture</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Requirements gathering, system design, and technical roadmap definition.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.8)",
                boxShadow: "0px 15px 40px -8px rgba(0,0,0,0.1)",
                y: -10
              }}
              className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md sm:shadow-lg flex flex-col items-center text-center transition-colors"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-md sm:shadow-lg">
                <FiCode className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2 sm:mb-3">2. Engineering & Development</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Full-stack development, backend systems, data pipelines, and scalable infrastructure.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.8)",
                boxShadow: "0px 15px 40px -8px rgba(0,0,0,0.1)",
                y: -10
              }}
              className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md sm:shadow-lg flex flex-col items-center text-center transition-colors"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-md sm:shadow-lg">
                <FiArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2 sm:mb-3">3. Deployment & QA</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Rigorous testing, CI/CD pipelines, and production-grade delivery.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.8)",
                boxShadow: "0px 15px 40px -8px rgba(0,0,0,0.1)",
                y: -10
              }}
              className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md sm:shadow-lg flex flex-col items-center text-center transition-colors"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-md sm:shadow-lg">
                <FiDatabase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2 sm:mb-3">4. Support & Maintenance</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Ongoing monitoring, system updates, and technical support.</p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
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

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 sm:mt-18 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="group relative text-white font-bold bg-linear-to-r from-blue-500 to-indigo-600 py-3 px-8 sm:py-3.5 sm:px-10 md:py-4 md:px-12 rounded-full overflow-hidden shadow-xl sm:shadow-2xl"
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 15px 30px -8px rgba(16, 6, 76, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/services">
              <span className="relative z-10 flex items-center text-sm sm:text-base md:text-lg">
                Explore All Services
                <FiArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
              layoutId="button-bg"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
