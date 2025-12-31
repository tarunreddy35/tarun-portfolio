"use client";
import { motion } from "framer-motion";
import { Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact" 
      className="relative bg-slate-900 dark:bg-slate-950 text-white py-20 overflow-hidden"
    >
      {/* Footer Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
      </div>
      
      {/* Footer Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-500/20 rounded-full blur-[80px] animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px] animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Let's Connect & <br/>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Create Something Amazing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to collaborate and turn ideas into impactful solutions.
          </motion.p>
        </motion.div>

        {/* Direct Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Email */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">EMAIL</h3>
              <motion.a 
                href="mailto:tarunrdy9076@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="text-lg md:text-xl font-bold text-white hover:text-blue-300 transition-colors duration-300 block mb-3"
              >
                tarunrdy9076@gmail.com
              </motion.a>
              <motion.a 
                href="mailto:tarunrdy9076@gmail.com"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-all duration-300"
              >
                Connect <ExternalLink className="ml-2 w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Phone */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">PHONE</h3>
              <motion.a 
                href="tel:+15133939695"
                whileHover={{ scale: 1.05 }}
                className="text-lg md:text-xl font-bold text-white hover:text-blue-300 transition-colors duration-300 block mb-3"
              >
                +1 (513) 393-9695
              </motion.a>
              <motion.a 
                href="tel:+15133939695"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-all duration-300"
              >
                Connect <ExternalLink className="ml-2 w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* LinkedIn */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">LINKEDIN</h3>
              <motion.a 
                href="https://www.linkedin.com/in/tarunkesepally/"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="text-lg md:text-xl font-bold text-white hover:text-blue-300 transition-colors duration-300 block mb-3"
              >
                tarunkesepally
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/tarunkesepally/"
                target="_blank"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-all duration-300"
              >
                Connect <ExternalLink className="ml-2 w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Integrated Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex space-x-4"
            >
              <motion.a 
                href="https://github.com/tarunreddy35" 
                target="_blank"
                whileHover={{ y: -3, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-slate-700/50 hover:bg-blue-600 text-white rounded-full hover:shadow-xl transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/tarunkesepally/" 
                target="_blank"
                whileHover={{ y: -3, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-slate-700/50 hover:bg-blue-600 text-white rounded-full hover:shadow-xl transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            </motion.div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-300 font-semibold text-lg mb-1">
                © {new Date().getFullYear()} Tarun Reddy Kesepally
              </p>
              <p className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-sm font-bold uppercase tracking-wider">
                4.5+ Years of Engineering Excellence
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;