import asp from "@/public/assets/asp.png";
import axion from "@/public/assets/axion.png";
import cardiff from "@/public/assets/cardiff.png";
import ceb from "@/public/assets/ceb.png";
import dbsa from "@/public/assets/dbsa.svg";
import fairfirst from "@/public/assets/fairfirst.png";
import healthhelper from "@/public/assets/healthhelper.png";
import impact from "@/public/assets/impact-labs.png";
import meu from "@/public/assets/meu-labs.png";
import beakbook from "@/public/assets/beakbook.png";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ClientLogo {
  name: string;
  src: StaticImageData;
}

const clientLogos: ClientLogo[] = [
  { name: "ASP", src: asp },
  { name: "Axion", src: axion },
  { name: "Cardiff", src: cardiff },
  { name: "CEB", src: ceb },
  { name: "DBSA", src: dbsa },
  { name: "Fairfirst", src: fairfirst },
  { name: "HealthHelper", src: healthhelper },
  { name: "Impact Labs", src: impact },
  { name: "MEU Labs", src: meu },
  { name: "Beakbook", src: beakbook },
];
const duplicatedLogos = [...clientLogos, ...clientLogos];

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function ClientLogoCard() {
  return (
    <div className="relative overflow-hidden py-6 sm:py-8 mb-12 sm:mb-16 md:mb-20">
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-linear-to-r from-slate-50 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-linear-to-l from-slate-50 to-transparent" />
      </div>

      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo.name}-${index}`}
            className="shrink-0 px-3 sm:px-4 w-36 sm:w-40 md:w-48 lg:w-56"
            variants={logoVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="relative h-24 sm:h-28 md:h-32 w-full bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md flex items-center justify-center overflow-hidden"
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.9)",
                boxShadow: "0 15px 30px -8px rgba(0,0,0,0.1)",
              }}
              variants={floatingVariants}
            >
              {/* Gradient overlay on hover */}
              <motion.div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-indigo-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />

              {/* Client logo */}
              <div className="relative z-10 p-3 sm:p-4 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-2xl">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  className="object-contain max-h-16 sm:max-h-20 max-w-[80%]"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
