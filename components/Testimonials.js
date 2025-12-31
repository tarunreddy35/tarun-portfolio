"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFull, setShowFull] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Tomas",
      role: "Founder",
      company: "ReplyQuick LLC",
      content: "Tarun distinguished himself as one of the strongest engineers on our team, contributing across full-stack development, AI and machine learning integration, and large-scale telecommunications systems. He demonstrated deep expertise across both backend and frontend systems, building and maintaining scalable, production-grade architectures. His ability to bridge applied machine learning with core software engineering significantly accelerated product execution.",
      fullContent: "I am writing to formally recommend Tarun, who worked closely with our engineering organization at ReplyQuick LLC and consistently operated at an exceptionally high technical and professional standard. During his time with us, Tarun distinguished himself as one of the strongest engineers on our team, contributing across full-stack development, AI and machine learning integration, and large-scale telecommunications systems. Tarun demonstrated deep expertise across both backend and frontend systems, building and maintaining scalable, production-grade architectures. He showed strong command of system design, API development, data flows, and modern frontend frameworks, consistently delivering high-quality solutions with clarity and speed while maintaining reliability under complex requirements. Beyond his technical skill set, Tarun consistently demonstrated ownership, reliability, and professionalism. He required minimal oversight, communicated clearly across teams, and took initiative on complex problems without hesitation. I recommend Tarun without reservation for senior full-stack, software engineering, AI-focused, or platform engineering roles.",
      rating: 5,
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
      avatar: "T"
    },
    {
      id: 2,
      name: "Senior Engineering Team",
      role: "Colleagues",
      company: "Progress Solutions",
      content: "Tarun's contributions to maintaining our web applications were outstanding. His ability to optimize database performance and resolve API issues made him an invaluable team member during our development cycles.",
      rating: 5,
      gradient: "from-purple-500 to-pink-500",
      avatar: "S"
    },
    {
      id: 3,
      name: "Product Development Team",
      role: "Cross-functional Team",
      company: "Soft Buzz Technologies",
      content: "Working with Tarun on our supply chain digitization project was exceptional. His expertise in real-time price synchronization and full-stack development helped us transform manual processes into automated, efficient systems.",
      rating: 5,
      gradient: "from-green-500 to-emerald-500",
      avatar: "P"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setShowFull(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setShowFull(false);
  };

  const toggleShowFull = () => {
    setShowFull(!showFull);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-screen flex items-center justify-center px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            What Colleagues Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Testimonials from industry professionals</p>
        </motion.div>
        
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="group relative"
          >
            <div className="p-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl mx-auto border border-white/20 dark:border-slate-700/20 hover:shadow-3xl transition-all duration-500 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="w-7 h-7 text-yellow-400 mx-1 filter drop-shadow-sm"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Quote */}
                <motion.blockquote 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic text-center max-w-3xl mx-auto"
                >
                  "{showFull && testimonials[currentIndex].fullContent ? testimonials[currentIndex].fullContent : testimonials[currentIndex].content}"
                </motion.blockquote>

                {/* Read More/Less Button for featured testimonial */}
                {testimonials[currentIndex].featured && testimonials[currentIndex].fullContent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mb-8"
                  >
                    <button
                      onClick={toggleShowFull}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                    >
                      {showFull ? "Show Less" : "Read Full Testimonial"}
                    </button>
                  </motion.div>
                )}

                {/* Author Info */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl shadow-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-semibold">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-full shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => { setCurrentIndex(index); setShowFull(false); }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-full shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Progress indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {currentIndex + 1} of {testimonials.length}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;