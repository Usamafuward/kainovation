"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  FiLinkedin, 
  FiArrowRight, 
  FiUsers, 
  FiTarget,
  FiGlobe,
  FiAward,
  FiTrendingUp
} from "react-icons/fi";
import all from "@/public/assets/persons/all.webp";
import shayen from "@/public/assets/persons/shayen.webp";
import pasindu from "@/public/assets/persons/pasindu.webp";
import thulith from "@/public/assets/persons/thulith.webp";
import biman from "@/public/assets/persons/biman.webp";
// import raman from "@/public/assets/persons/raman.jpeg";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: StaticImageData;
  linkedinUrl: string;
}

const leadershipTeam: TeamMember[] = [
  {
    name: "Shayen Yatagama",
    title: "Co - Founder/Director",
    bio: "Shayen majored in Applied Statistics from the University of Colombo. He started off in the Software Industry as a Business Analyst and has led software teams in designing & re-engineering business process workflows for some leading banks. He has a passion for Data Analytics, Visualisation, Systems Design, and Data science applications and strives to create positive change with his can-do attitude!",
    image: shayen,
    linkedinUrl: "https://www.linkedin.com/in/shayen-yatagama/",
  },
  {
    name: "Pasindu Jayathilaka",
    title: "Co - Founder/Director",
    bio: "Pasindu is an entrepreneur who graduated from the University of Colombo and a CIMA(UK) passed finalist. Having worked as a Business Analyst and a Product Manager he has designed and developed BI solutions for several fortune 500 companies. Pasindu is passionate about Social and HR data analytics and has a proven track record of delivering BI and software solutions in multiple domains including Banking, HR, and E-Commerce. He is determined to help Sri Lanka become the world's IT powerhouse!",
    image: pasindu,
    linkedinUrl: "https://www.linkedin.com/in/pasindut/",
  },
  {
    name: "Thulith Edirisinghe",
    title: "Co - Founder/Director",
    bio: "Thulith is a Mechanical Engineer from Massachusetts Institute of Technology, USA and a UWC Atlantic college alumni. He has experience of working in five countries across four continents, in diverse industries such as AI, E-commerce, Education, Renewable energy, Agriculture and even Biotech. Thulith strives to leverage his diverse experience to help organisation integrate the power of Data and AI to solve challenging problems and adapt to industry 4.0",
    image: thulith,
    linkedinUrl: "https://www.linkedin.com/in/thulith-edirisinghe-46826988/",
  },
  {
    name: "Biman Kasun Wimalaratne",
    title: "Business Development Partner",
    bio: "Passionate in connecting technology to empower communities, create sustainable wealth and improve our experience of life. Trained, educated and worked in London and Sydney, and here to take great Sri Lankan products and services to the world. Telling a better tech-enabled story.",
    image: biman,
    linkedinUrl: "https://www.linkedin.com/in/biman-wimalaratne-bb3804b7/",
  },
  // {
  //   name: "Raman Singh",
  //   title: "Business Development Partner - ANZ",
  //   bio: "Strategic Advisor to provide current industry knowledge, critical thinking and analysis. He represents us in thought leadership and product innovation by leading customer partnerships.",
  //   image: raman,
  //   linkedinUrl: "https://www.linkedin.com/in/singhraman/",
  // },
];

export default function AboutPage() {
  // Animation variants for container elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // Animation variants for child items
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
              <FiUsers className="text-sky-400 mr-2" />
              <span className="text-sm font-medium text-sky-300">
                Meet Our Team
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="bg-linear-to-r from-white via-blue-200 to-slate-200 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-linear-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Kainovation
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-md sm:text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Transforming businesses through data-driven innovation and
              intelligent AI solutions across the globe.
            </motion.p>

            {/* Achievement Stats */}
            <motion.div
              className="flex flex-wrap gap-6 mb-10 justify-center"
              variants={itemVariants}
            >
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiGlobe className="text-blue-400 mr-2" />
                <span className="text-sm">Global Experience</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiAward className="text-green-400 mr-2" />
                <span className="text-sm">Fortune 500 Clients</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiTrendingUp className="text-purple-400 mr-2" />
                <span className="text-sm">Proven Results</span>
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
                  .getElementById("who-we-are")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10 flex items-center">
                Discover Our Story
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECTION: WHO WE ARE */}
      <section
        className="relative bg-slate-50 py-12 sm:py-16 md:py-20"
        id="who-we-are"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
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
            {/* Badge */}
            <motion.div
              className="inline-flex items-center bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6"
              variants={itemVariants}
            >
              <FiTarget className="mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
              variants={itemVariants}
            >
              <span className="bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Who We Are
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-transparent z-10" />
              <Image
                src={all}
                alt="Kainovation Team"
                className="w-full h-auto object-cover"
                placeholder="blur"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div className="space-y-6" variants={itemVariants}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are a global tech company specializing in end-to-end data-driven
                  solutions using AI and Automation. Backed by a growing team of over 30 dedicated professionals, we unlock the power of Business Process Automation to transform businesses and provide you with the advantage of making better decisions.
                </p>

                <div className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-2">Our Mission</h4>
                  <p className="text-md text-gray-700 leading-relaxed mb-4">
                    To empower organizations with robust, end-to-end AI and data solutions that drive real-world transformation and sustainable growth.
                  </p>
                  <h4 className="font-bold text-blue-900 mb-2">Our Vision</h4>
                  <p className="text-md text-gray-700 leading-relaxed">
                    To be the global partner of choice for continuous innovation, seamlessly blending human expertise with next-generation technology.
                  </p>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  What sets us apart? We take full ownership of your product journey from brand inception and architecture design to real-time performance insights and ongoing management. We do the heavy lifting so you don&apos;t have to.
                </p>
                
                <div className="flex gap-4 pt-2">
                  <a href="https://meulabs.org" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline">Visit Meu Labs</a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline">Explore Our Outsourcing Solutions</a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Brand Values */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100" variants={itemVariants}>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <FiAward className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Quality</h3>
              <p className="text-slate-600 leading-relaxed">We deliver rigorous, high-standard solutions that stand the test of time, ensuring every product is built with excellence in mind.</p>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100" variants={itemVariants}>
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <FiUsers className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Professionalism</h3>
              <p className=" text-slate-600 leading-relaxed">Our team of subject matter experts brings deep competence and structured processes to ensure smooth, end-to-end project execution.</p>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100" variants={itemVariants}>
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                <FiGlobe className="text-sky-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Trust</h3>
              <p className="text-slate-600 leading-relaxed">We focus on long-term partnership orientation. We are fair, ethical, and committed to delivering the best value to your business.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: LEADERSHIP TEAM */}
      <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 mb-8"
            >
              <FiUsers className="mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Leadership Excellence
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Our Leadership
              </span>
              <br />
              <span className="bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders driving innovation and excellence
              across our global operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                className="group relative bg-linear-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/6 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                  <div className="shrink-0 w-full sm:w-48">
                    <div className="relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="rounded-xl object-cover w-full h-64 sm:h-auto shadow-lg aspect-4/5 transition-transform duration-500"
                        placeholder="blur"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  <div className="grow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full inline-block mt-1">
                          {member.title}
                        </p>
                      </div>
                      <motion.a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s LinkedIn Profile`}
                        className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ml-4 bg-blue-50 p-2 rounded-full hover:bg-blue-100"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiLinkedin size={20} />
                      </motion.a>
                    </div>

                    <div className="bg-linear-to-r from-slate-50 to-blue-50/50 rounded-lg p-4 border border-gray-100">
                      <p className="text-gray-600 text-base leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}