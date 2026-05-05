'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiMail, FiPhone, FiMapPin, FiLinkedin, FiFacebook, FiGithub, FiCheck, FiX } from 'react-icons/fi';

// Mock RiTwitterXFill since we can't import it
const RiTwitterXFill = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const footerLinks = {
  company: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    // { name: "Careers", href: "/careers" },
  ],
  contact: [
    { icon: FiPhone, text: "+94 77 787 2366", href: "tel:+94777872366" },
    { icon: FiMail, text: "hello@kainovation.com", href: "mailto:hello@kainovation.com" },
    { icon: FiMapPin, text: "26A, Rudra Mawatha, Wellawatte, 00600, Sri Lanka", href: "#" }
  ],
  social: [
    { icon: FiLinkedin, href: "https://www.linkedin.com/company/kainovation-technologies/", name: "LinkedIn" },
    { icon: RiTwitterXFill, href: "https://x.com/kainovation", name: "X" },
    { icon: FiFacebook, href: "https://www.facebook.com/kainovation", name: "Facebook" },
    { icon: FiGithub, href: "https://github.com/kainotech", name: "GitHub" }
  ]
};

const serviceLinks = [
  { name: 'Data Engineering & BI', href: '/services#data-engineering' },
  { name: 'Applied AI', href: '/services#applied-ai' },
  { name: 'Platform Engineering', href: '/services#platform-engineering' },
  { name: 'Analytics & Reporting', href: '/services#analytics-reporting' },
  { name: 'Resource Augmentation', href: '/services#resource-augmentation' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.6
    }
  }
};

export default function Footer() {
  const [activeTab, setActiveTab] = useState('email');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email subscription
  const handleEmailSubscription = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if email is entered and valid
    if (!email || !email.trim()) {
      return;
    }

    if (!isValidEmail(email)) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call - replace with your actual subscription logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success popup
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
      // Clear email input
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <footer className="relative overflow-hidden bg-[#10064C] backdrop-blur-[20px]">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          {/* Newsletter Section */}
          <motion.div
            className="py-8 sm:py-10 border-b border-white/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
                variants={itemVariants}
              >
                <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Stay Updated
                </span>
                <span className="text-white"> with Our Latest Insights</span>
              </motion.h3>

              <motion.p
                className="text-blue-100 mb-6 sm:mb-8 text-base sm:text-lg"
                variants={itemVariants}
              >
                Subscribe to our newsletter for the latest trends in AI, data
                science, and business intelligence.
              </motion.p>

              {/* Newsletter Type Tabs */}
              <motion.div
                className="flex justify-center mb-6"
                variants={itemVariants}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1 flex">
                  <motion.button
                    onClick={() => setActiveTab("email")}
                    className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                      activeTab === "email"
                        ? "bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                        : "text-blue-200 hover:text-white"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiMail className="inline mr-2" size={16} />
                    Email Newsletter
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveTab("linkedin")}
                    className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                      activeTab === "linkedin"
                        ? "bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                        : "text-blue-200 hover:text-white"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiLinkedin className="inline mr-2" size={16} />
                    LinkedIn Updates
                  </motion.button>
                </div>
              </motion.div>

              {/* Email Newsletter Form */}
              {activeTab === "email" && (
                <motion.form
                  onSubmit={handleEmailSubscription}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto"
                  variants={itemVariants}
                  key="email-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-sm sm:text-base"
                    disabled={isLoading}
                  />
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="group text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full shadow-md sm:shadow-lg min-w-40 sm:min-w-[200px] flex items-center justify-center text-sm sm:text-base bg-linear-to-r from-blue-500 to-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={
                      !isLoading
                        ? {
                            scale: 1.02,
                            boxShadow:
                              "0px 15px 30px -8px rgba(16, 6, 76, 0.3)",
                          }
                        : {}
                    }
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}

              {/* LinkedIn Newsletter */}
              {activeTab === "linkedin" && (
                <motion.div
                  className="max-w-md mx-auto"
                  key="linkedin-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-4"
                    whileHover={{
                      boxShadow: "0px 10px 25px -8px rgba(16, 6, 76, 0.2)",
                    }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <motion.div
                        className="w-12 h-12 bg-linear-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FiLinkedin className="text-white" size={24} />
                      </motion.div>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">
                      Follow Our LinkedIn Newsletter
                    </h4>
                    <p className="text-blue-200 text-sm mb-4">
                      Get exclusive insights, industry updates, and
                      behind-the-scenes content directly on LinkedIn.
                    </p>
                    <div className="flex items-center justify-center text-blue-300 text-sm">
                      <motion.span
                        className="w-2 h-2 bg-blue-400 rounded-full mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      Join 1,000+ professionals
                    </div>
                  </motion.div>

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 15px 30px -8px rgba(16, 6, 76, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="https://www.linkedin.com/company/kainovation-technologies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mx-auto text-white font-bold py-3 px-8 rounded-full shadow-lg bg-linear-to-r from-blue-500 to-indigo-600 flex items-center justify-center"
                    >
                      <FiLinkedin className="mr-2" size={20} />
                      Follow on LinkedIn
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.button>

                  <p className="text-blue-300 text-xs mt-3">
                    Click to visit our LinkedIn company page and follow our
                    newsletter
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Main Footer Content */}
          <motion.div
            className="py-8 sm:py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
              {/* Company Info */}
              <motion.div
                variants={itemVariants}
                className="xs:col-span-2 md:col-span-1"
              >
                <motion.h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6">
                  <span className="bg-blue-400 bg-clip-text text-transparent">
                    KAINO
                  </span>
                  <span className="relative text-white">
                    VATION
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-blue-400 to-indigo-400 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </span>
                </motion.h2>

                <p className="text-blue-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  A software and data engineering company building systems that scale.
                </p>

                <div className="flex space-x-3 sm:space-x-4">
                  {footerLinks.social.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-blue-200 hover:text-white hover:bg-linear-to-r hover:from-blue-500 hover:to-indigo-600 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon size={16} className="sm:text-lg" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Company Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                  Company
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.a
                        href={link.href}
                        className="text-blue-200 hover:text-blue-400 transition-colors duration-300 flex items-center group text-sm sm:text-base"
                        whileHover={{ x: 5 }}
                      >
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                  Contact Us
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {footerLinks.contact.map((contact, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.a
                        href={contact.href}
                        className="flex items-start space-x-2 sm:space-x-3 text-blue-200 hover:text-blue-400 transition-colors duration-300 group text-sm sm:text-base"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-5 h-5 sm:w-6 sm:h-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:to-indigo-600 transition-all duration-300 shrink-0"
                          whileHover={{ scale: 1.1 }}
                        >
                          <contact.icon size={12} className="sm:text-sm" />
                        </motion.div>
                        <span className="flex-1 leading-relaxed">
                          {contact.text}
                        </span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services Quick Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                  Our Services
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {serviceLinks.map((service, index) => (
                    <motion.li
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.a
                        href={service.href}
                        className="text-blue-200 hover:text-blue-400 transition-colors duration-300 flex items-center group text-sm sm:text-base"
                        whileHover={{ x: 5 }}
                      >
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-white/10 py-5 sm:py-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="text-center md:text-left">
                <p className="text-blue-300 text-xs sm:text-sm">
                  © 2025 Kainovation. All Rights Reserved
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                <motion.a
                  href="/privacy-policy"
                  className="text-blue-300 hover:text-blue-400 text-xs sm:text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Privacy Policy
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Success Alert Popup - Now positioned outside footer with fixed positioning */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-9999 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Success Icon */}
              <motion.div
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <FiCheck className="text-green-600 text-2xl" />
              </motion.div>

              {/* Success Message */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Successfully Subscribed!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for subscribing to our newsletter. You&apos;ll receive
                the latest insights on AI, data science, and business
                intelligence directly in your inbox.
              </p>

              {/* Newsletter Details */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-3 text-gray-700 text-sm mb-2">
                  <FiMail className="text-blue-600" />
                  <span className="font-medium">
                    Welcome to Kainovation Newsletter
                  </span>
                </div>
                <div className="text-gray-600 text-sm">
                  Stay tuned for weekly updates and exclusive content!
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Awesome, thanks!
              </button>

              {/* Close Button */}
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FiX className="text-gray-400 text-lg" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
