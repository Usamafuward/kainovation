"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  serviceId: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  features: string[];
  image: StaticImageData;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceId,
  title,
  description,
  icon: Icon,
  gradient,
  features,
  image,
  index,
}) => {
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

  const iconVariants: Variants = {
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      rotate: -5,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    hover: {
      rotate: [0, 3, 0, -3, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-col ${
        index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      {/* Content */}
      <div
        className="w-full lg:w-7/12 space-y-6 sm:space-y-7 md:space-y-8"
        id={serviceId}
      >
        <motion.div
          className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6"
          whileHover="hover"
        >
          <motion.div
            className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br ${gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md sm:shadow-lg`}
            variants={iconVariants}
          >
            <Icon className="text-white text-xl sm:text-2xl" />
          </motion.div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            {title}
          </h3>
        </motion.div>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 xs:grid-cols-2 gap-3 sm:gap-4">
          {features.map((feature, featureIndex) => (
            <motion.div
              key={feature}
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: featureIndex * 0.1 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
            >
              <div
                className={`w-2 h-2 bg-linear-to-r ${gradient} rounded-full`}
              />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual Element */}
      <div className="w-full lg:w-5/12 mt-8 lg:mt-0 lg:mx-10">
        <motion.div
          className="relative w-full mx-auto aspect-5/4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient Background */}
          <motion.div
            className={`absolute inset-0 bg-linear-to-br ${gradient} rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl transform rotate-3 sm:rotate-4 md:rotate-5 lg:rotate-6`}
            animate={{ rotate: [3, 5, 3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Image Container */}
          <motion.div
            className="absolute inset-2 sm:inset-3 md:inset-4 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 border-white shadow-lg sm:shadow-xl"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            animate="float"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
            />
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-2 -right-2 w-10 h-10 sm:-top-3 sm:-right-3 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:-top-4 lg:-right-4 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 shadow-md flex items-center justify-center"
            animate={{
              rotate: [0, 360],
              y: [-3, 5, -3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-white/40 rounded-md sm:rounded-lg" />
          </motion.div>

          <motion.div
            className="absolute -bottom-3 -left-3 w-8 h-8 sm:-bottom-4 sm:-left-4 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:-bottom-6 lg:-left-6 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 shadow-md flex items-center justify-center"
            animate={{
              rotate: [0, -360],
              y: [0, -8, 0],
              x: [0, -4, 0],
            }}
            transition={{
              rotate: {
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
