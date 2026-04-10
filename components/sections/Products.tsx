"use client";
import { motion, Variants } from "framer-motion";
import {
  FiLayers,
  FiArrowRight,
  FiLock,
  FiBarChart2,
  FiTrendingUp,
} from "react-icons/fi";
import Link from "next/link";

interface Product {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  features: string[];
  status: string;
}

const products: Product[] = [
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
  },
  {
    name: "Invisiq",
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
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

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

export default function Products() {
  return (
    <section
      className="relative bg-slate-50 py-12 sm:py-16 md:py-20"
      id="products"
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
            <FiLayers
              className="mr-2 text-xs sm:text-sm md:text-base"
              style={{ color: "#10064C" }}
            />
            <span
              className="text-xs sm:text-sm md:text-base font-medium"
              style={{ color: "#10064C" }}
            >
              Innovation Pipeline
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6">
            <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
              Next-Gen Solutions
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Transforming business with AI-powered tools for smarter decisions,
            deeper insights, and stronger data privacy.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {/* Status Badge */}
              <motion.div
                className="absolute -top-2 -right-2 z-20 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-xs font-bold shadow-md sm:shadow-lg bg-linear-to-r from-blue-500 to-indigo-600 text-white"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {product.status}
              </motion.div>

              {/* Main Card */}
              <motion.div
                className="relative bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg sm:shadow-xl overflow-hidden"
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
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br ${product.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-md sm:shadow-lg`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <product.icon className="text-white text-xl sm:text-2xl" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-2 sm:space-x-3"
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
                        <span className="text-xs sm:text-sm font-medium text-gray-700">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                      <span>Development Progress</span>
                      <span>
                        {product.status === "Completed"
                          ? "100%"
                          : product.status === "Beta"
                          ? "90%"
                          : product.status === "Development"
                          ? "65%"
                          : "45%"}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
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
                              : "45%",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    className={`w-full bg-linear-to-r ${product.gradient} text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl flex items-center justify-center space-x-2 shadow-md sm:shadow-lg text-sm sm:text-base cursor-pointer`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0px 8px 20px -5px rgba(0,0,0,0.15)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => alert(`Visual showcase for ${product.name} coming soon!`)}
                  >
                    <span>View Project Visual</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-1 -right-1 w-5 h-5 sm:-top-2 sm:-right-2 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-white/20 rounded-full"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-4 h-4 sm:-bottom-2 sm:-left-2 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white/20 rounded-full"
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

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="group relative text-white font-bold bg-linear-to-r from-blue-500 to-indigo-600 py-3 px-8 sm:py-3.5 sm:px-10 md:py-4 md:px-12 rounded-full overflow-hidden shadow-xl sm:shadow-2xl text-sm sm:text-base md:text-lg"
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 15px 30px -8px rgba(16, 6, 76, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/products">
              <span className="relative z-10 flex items-center">
                View all products
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
