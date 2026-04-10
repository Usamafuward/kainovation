// components/TestimonialCard.tsx
'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { FiStar } from 'react-icons/fi';

interface TestimonialCardProps {
  quote: string;
  client: {
    name: string;
    title: string;
    company: string;
  };
  keywords: string[];
  image: StaticImageData;
}

export default function TestimonialCard({ quote, client, image, keywords }: TestimonialCardProps) {
  const highlightKeywords = (text: string) => {
    if (!keywords.length) return text;
    
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    const parts = text.split(keywordRegex);
    
    return parts.map((part, index) => {
      const isKeyword = keywords.some(keyword => 
        keyword === part
      );
      return isKeyword ? (
        <strong key={index} className="font-bold">{part}</strong>
      ) : (
        part
      );
    });
  };

  return (
    <div className="w-full h-full space-y-6 sm:space-y-8">
      {/* Client Info Header */}
      <motion.div
        className="flex items-center justify-center mx-auto space-x-4 sm:space-x-6 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm"
        whileHover={{
          backgroundColor: "rgba(255,255,255,0.8)",
          boxShadow: "0 15px 30px -8px rgba(0,0,0,0.1)",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 mr-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-50 rounded-xl flex items-center justify-center p-2 border border-gray-200/50">
            <Image
              src={image}
              alt={`${client.company} Logo`}
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex space-x-0.5 sm:space-x-1 lg:hidden">
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
            {client.company}
          </h4>
          <p className="font-medium text-sm sm:text-base text-[#10064C]">
            {client.name}
          </p>
          <p className="text-gray-600 text-sm sm:text-base">- {client.title}</p>
        </div>
        <div className="hidden lg:flex space-x-0.5 lg:space-x-1">
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

      {/* Quote Card */}
      <motion.div 
        className="relative bg-linear-to-br from-white to-blue-50 backdrop-blur-sm border border-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md sm:shadow-lg"
        whileHover={{ 
          backgroundColor: "rgba(255,255,255,0.95)",
          boxShadow: "0 20px 50px -15px rgba(125, 95, 255, 0.2)"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-10">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-blue-500">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        
        <div className="relative z-10">
          <div className="text-blue-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-70" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            {highlightKeywords(quote)}
          </p>
          
          {/* <div className="mt-6 flex items-center justify-end">
            <div className="flex items-center space-x-2">
              <div className="h-0.5 w-8 bg-blue-300"></div>
              <span className="text-sm font-medium text-blue-600">Success Story</span>
            </div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}
