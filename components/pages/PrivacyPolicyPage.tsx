"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FiShield,
  FiLock,
  FiEye,
  FiDatabase,
  FiUsers,
  FiMail,
  FiArrowRight,
  FiCheck,
  FiInfo,
  FiFileText,
  FiGlobe,
} from "react-icons/fi";

export default function PrivacyPolicyPage() {
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

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

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
              <FiShield className="text-sky-400 mr-2" />
              <span className="text-sm font-medium text-sky-300">
                Your Privacy Matters
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="bg-linear-to-r from-white via-blue-200 to-slate-200 bg-clip-text text-transparent">
                Privacy
              </span>
              {" "}
              <span className="bg-linear-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-md sm:text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Transparent about how we collect, use, and protect your personal
              information.
            </motion.p>

            {/* Last Updated Info */}
            <motion.div
              className="flex flex-wrap gap-6 mb-10 justify-center"
              variants={itemVariants}
            >
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiFileText className="text-blue-400 mr-2" />
                <span className="text-sm">Last Updated: 14th October 2022</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiGlobe className="text-green-400 mr-2" />
                <span className="text-sm">GDPR Compliant</span>
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
                  .getElementById("policy-content")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10 flex items-center">
                Read Our Policy
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECTION: POLICY OVERVIEW */}
      <section
        className="relative bg-slate-50 py-12 sm:py-16 md:py-20"
        id="policy-content"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] md:bg-[size:4rem_4rem]" />

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
            >
              <FiInfo className="mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Policy Overview
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
              variants={itemVariants}
            >
              <span className="bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                What This Policy Covers
              </span>
            </motion.h2>
          </motion.div>

          {/* Policy Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: FiDatabase,
                title: "Information Collection",
                description:
                  "How we collect and manage your personal information",
              },
              {
                icon: FiLock,
                title: "Data Security",
                description: "How we protect and secure your data",
              },
              {
                icon: FiEye,
                title: "Data Usage",
                description: "What we do with your information",
              },
              {
                icon: FiUsers,
                title: "Third-Party Policies",
                description: "Our relationships with external services",
              },
              {
                icon: FiShield,
                title: "GDPR Rights",
                description: "Your data protection rights under GDPR",
              },
              {
                icon: FiMail,
                title: "Contact Us",
                description: "How to reach us about privacy concerns",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group bg-linear-to-br from-white to-blue-50/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 ml-4">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Introduction */}
          <motion.div
            className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Kainovation Technologies, accessible from{" "}
              <a
                href="https://kainovation.com/"
                className="text-blue-600 hover:underline font-medium"
              >
                https://kainovation.com/
              </a>
              , we always ensure that the information collected from you is
              protected in all costs. This privacy policy document that we
              present to you is relevant to this website and we mention the
              various information that is collected and all the relevant steps
              that are taken to safeguard them.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By providing us information through our forums, you signify your
              acceptance of our Privacy Policy. Kainovation Technologies is the
              sole owner of this website including all the information that you
              submit through it.
            </p>
          </motion.div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8">
          <div className="w-full mx-auto">
            {/* Information Collection */}
            <motion.div
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl mr-4">
                  <FiDatabase size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Information That We Collect and How We Manage Them
                </h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  All information that is collected depends on your actions
                  within the website. Your personal details such as your name,
                  email, and contact number are retrieved for any future
                  purposes when we need to contact you. In addition to this, any
                  other analytical information required to improve Kainovation
                  will be collected.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We do not retain information more than it is necessary. We
                  only store all information only until it is needed for the
                  specific purposes it was collected for. The retention period
                  may vary from different situations and requirements. Once the
                  information passes the specific retention period, it will be
                  securely disposed of.
                </p>
              </div>
            </motion.div>

            {/* How We Collect Information */}
            <motion.div
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl mr-4">
                  <FiMail size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  How Do We Collect Your Information?
                </h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  We collect personal information such as your Name, Email, and
                  Contact Number which is collected through the Contact Form
                  that is provided on the website.
                </p>
              </div>
            </motion.div>

            {/* What We Do With Information */}
            <motion.div
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl mr-4">
                  <FiEye size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  What Do We Do With Your Information?
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                    <FiCheck className="text-blue-600 mr-2" />
                    Log Files
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The information collected for Analytics through the website
                    is known as &apos;Log Files&apos;. These files log user information
                    when you visit Kainovation and track all actions done within
                    the website. All hosting companies do this as a part of
                    their hosting services&apos; analytics.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                    <FiCheck className="text-blue-600 mr-2" />
                    Analytics
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To measure Kainovation&apos;s Analytics we use Google Analytics.
                    The log files that are collected are used by these tools to
                    give us an idea about how well the website is doing and what
                    areas could improve for our visitors. Such information is
                    valuable for Kainovation to make sure all our visitors have
                    a seamless experience within the website.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                    <FiCheck className="text-blue-600 mr-2" />
                    Cookies
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Cookies, also known as browser cookies, are small encrypted
                    text files located in the browser directories. These files
                    help web developers to navigate the functionality they
                    perform certain functions. Kainovation does not use any
                    cookies to get information from our users but as we use
                    third-party integrations there can be instances where you
                    would have to accept any cookies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* GDPR Section */}
            <motion.div
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl mr-4">
                  <FiShield size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  GDPR - General Data Protection Regulation
                </h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  These data protection regulations allow any individual to have
                  easier access to the data that is collected and helps to
                  manage their own information. According to this, any user has
                  the right to access, update and remove their personal
                  information when needed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Must be processed lawfully, fairly, and in a transparent manner.",
                  "Must be collected for only specified, explicit, and legitimate purposes.",
                  "Must always be the adequate amount that is needed.",
                  "Must be accurate and up to date.",
                  "Must not be kept any longer than necessary.",
                  "Must be processed in a manner that ensures the security of personal data.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white rounded-lg p-4 border border-blue-200"
                  >
                    <FiCheck className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Children's Information */}
            <motion.div
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl mr-4">
                  <FiUsers size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Children&apos;s Information
                </h2>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  One of the main concerns at Kainovation is protection for
                  children while using the internet. While we encourage parents
                  to acknowledge and guide children&apos;s activities on the
                  internet, Kainovation do not knowingly collect any personally
                  identifiable information from anyone under the age of 13.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As we need to rely on consent as a legal basis for processing
                  your information, a child would require consent from a parent.
                  Therefore we may require parent&apos;s consent before we collect
                  and use children&apos;s information.
                </p>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-xl">
                    <FiMail size={32} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  If you have any questions about Kainovation&apos;s privacy policy,
                  please do not hesitate to contact us through{" "}
                  <a
                    href="mailto:hello@kainovation.com"
                    className="text-white hover:underline font-medium"
                  >
                    hello@kainovation.com
                  </a>
                  . We are open to any suggestions that you have!
                </p>
                {/* <motion.a
                  href="mailto:hello@kainovation.com"
                  className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send us an Email
                  <FiArrowRight className="ml-2" />
                </motion.a> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
