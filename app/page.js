"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
      <Navbar />
      
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 text-blue-200/20 dark:text-blue-500/10"
          >
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: -360,
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 right-32 text-purple-200/20 dark:text-purple-500/10"
          >
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </motion.div>
          
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-32 left-40 text-green-200/20 dark:text-green-500/10"
          >
            <svg className="w-28 h-28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, 20, 0]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-20 text-orange-200/20 dark:text-orange-500/10"
          >
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </motion.div>
          
          {/* Binary code pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="text-xs font-mono text-blue-500 absolute top-10 left-10 transform rotate-45">
              01010011 01001000 01001001 01000110 01010100<br/>
              01000011 01001100 01001001 01000011 01001011<br/>
              01010010 01000101 01000001 01000011 01010100
            </div>
            <div className="text-xs font-mono text-purple-500 absolute bottom-10 right-10 transform -rotate-45">
              function() {"{"}console.log('Hello World'){"}"}<br/>
              const portfolio = new Portfolio();<br/>
              portfolio.build().deploy();
            </div>
          </div>
        </div>
        
        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      {/* About Section - Full Screen */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="about" 
        className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
      >
        {/* Background with tech patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        
        {/* Animated Development Tools */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-16 right-16 text-blue-200/15 dark:text-blue-400/10"
          >
            <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -40, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-16 left-16 text-purple-200/15 dark:text-purple-400/10"
          >
            <svg className="w-36 h-36" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.19 0 2.34-.21 3.41-.6.3-.11.49-.4.49-.72 0-.43-.35-.78-.78-.78-.22 0-.42.1-.56.26-.82.28-1.69.42-2.56.42-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7c0 .87-.15 1.74-.42 2.56-.16.14-.26.34-.26.56 0 .43.35.78.78.78.32 0 .61-.19.72-.49.39-1.07.6-2.22.6-3.41C22 6.48 17.52 2 12 2z"/>
            </svg>
          </motion.div>
          
          {/* Code snippet backdrop */}
          <div className="absolute inset-0 opacity-5">
            <div className="text-sm font-mono text-indigo-600 absolute top-32 left-32 transform rotate-12">
              class Developer {"{"}
              <br/>  constructor() {"{"}
              <br/>    this.skills = ['React', 'Java', 'AI'];
              <br/>  {"}"}
              <br/>  createMagic() {"{"}
              <br/>    return this.skills.map(skill =&gt; 
              <br/>      skill + ' mastery');
              <br/>  {"}"}
              <br/>{"}"}
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              I'm passionate about leveraging cutting-edge technology to solve real-world problems. My expertise spans from building HIPAA-compliant healthcare platforms to developing autonomous AI voice agents. I thrive in environments where innovation meets impact, consistently delivering solutions that scale and perform.
            </p>
            
            {/* Technical Skills - Detailed */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                  title: "Full-Stack Development",
                  description: "Expert in Java (Spring Boot), React.js, Node.js with 4.5 years of scalable system development",
                  color: "blue",
                  bgGradient: "from-blue-500 to-blue-600"
                },
                {
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                  title: "AI & Machine Learning",
                  description: "Specialized in conversational AI, voice agents, and ML pipelines with proven 85%+ accuracy rates",
                  color: "purple",
                  bgGradient: "from-purple-500 to-purple-600"
                },
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "HIPAA-Compliant Systems",
                  description: "Experienced in building secure, compliant healthcare technology with JWT authentication",
                  color: "green",
                  bgGradient: "from-green-500 to-green-600"
                }
              ].map((skill, index) => (
                <motion.div 
                  key={skill.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={skill.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">{skill.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Technical Skills - Full Screen */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        
        {/* Floating Tech Stack Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 text-cyan-200/20 dark:text-cyan-400/10"
          >
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
            </svg>
          </motion.div>
          
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-24 right-24 text-indigo-200/20 dark:text-indigo-400/10"
          >
            <svg className="w-28 h-28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </motion.div>
          
          {/* Database and Cloud Icons */}
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              x: [0, -20, 0]
            }}
            transition={{ 
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-40 text-green-200/20 dark:text-green-400/10"
          >
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zM4 16v1c0 2.21 3.58 4 8 4s8-1.79 8-4v-1c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
            </svg>
          </motion.div>
          
          {/* Algorithm patterns */}
          <div className="absolute inset-0 opacity-5">
            <div className="text-xs font-mono text-blue-500 absolute top-10 right-10 transform -rotate-12">
              // Machine Learning Pipeline<br/>
              const model = tf.sequential();<br/>
              model.add(tf.layers.dense({"{"}units: 128{"}"}));<br/>
              model.compile({"{"}optimizer: 'adam'{"}"});<br/>
              await model.fit(trainX, trainY);
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Core technologies and skills</p>
          </motion.div>
          
          {/* Compact Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {[
              { name: "Java", color: "from-blue-500 to-blue-600" },
              { name: "JavaScript", color: "from-blue-600 to-blue-700" },
              { name: "React.js", color: "from-blue-700 to-blue-800" },
              { name: "Spring Boot", color: "from-blue-800 to-blue-900" },
              { name: "Node.js", color: "from-blue-600 to-blue-700" },
              { name: "AWS", color: "from-blue-500 to-blue-600" },
              { name: "Docker", color: "from-blue-700 to-blue-800" },
              { name: "PostgreSQL", color: "from-blue-800 to-blue-900" },
              { name: "Python", color: "from-blue-600 to-blue-700" },
              { name: "Next.js", color: "from-blue-500 to-blue-600" },
              { name: "TypeScript", color: "from-blue-700 to-blue-800" },
              { name: "MongoDB", color: "from-blue-800 to-blue-900" },
              { name: "Scikit-learn", color: "from-blue-500 to-blue-600" },
              { name: "TensorFlow", color: "from-blue-600 to-blue-700" },
              { name: "Random Forest", color: "from-blue-700 to-blue-800" },
              { name: "XGBoost", color: "from-blue-800 to-blue-900" },
              { name: "Pandas", color: "from-blue-600 to-blue-700" },
              { name: "NumPy", color: "from-blue-500 to-blue-600" }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05
                }}
                className={`
                  bg-gradient-to-br ${skill.color}
                  rounded-lg p-3 shadow-md backdrop-blur-sm 
                  border border-white/10 hover:border-white/20
                  transition-all duration-200 hover:shadow-lg
                  hover:shadow-blue-500/20 text-center
                `}
              >
                <span className="text-sm font-medium text-white">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects - Full Screen */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="projects" 
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Innovative solutions that make a real impact</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Ledger App",
              impact: "Full-stack financial tracking application with real-time data management and responsive design for personal expense management.",
              tags: ["React", "Node.js", "MongoDB", "CSS3"],
              gradient: "from-green-400 to-green-500",
              link: "https://frontend-neon-two-16.vercel.app/",
              isLive: true
            },
            {
              title: "Movie Search",
              impact: "Dynamic movie discovery platform with real-time search functionality and detailed movie information using external APIs.",
              tags: ["JavaScript", "API Integration", "CSS3", "Responsive"],
              gradient: "from-purple-400 to-purple-500", 
              link: "https://movie-search1.onrender.com/",
              isLive: true
            },
            {
              title: "DentalScan AI",
              impact: "HIPAA-compliant dental diagnostic MVP that reduced patient intake friction with AI-driven mobile entry system and JWT-based authentication.",
              tags: ["HealthTech", "React", "Spring Boot", "AWS", "AI"],
              gradient: "from-blue-400 to-blue-500"
            },
            {
              title: "N1 & N4 Telecom", 
              impact: "Autonomous voice agents with 100% CRM sync accuracy and compliant SMS campaigns using Retell.ai, Bland-AI, and Twilio.",
              tags: ["AI", "Node.js", "Twilio", "Retell.ai", "PlayHT"],
              gradient: "from-blue-500 to-blue-600"
            },
            {
              title: "Smart Waste ML Dashboard",
              impact: "85% prediction accuracy for bin fill levels using Random Forest and KNN for driver auto-assignment with real-time alerts.",
              tags: ["ML", "Python", "React", "Random Forest", "KNN"],
              gradient: "from-blue-600 to-blue-700"
            },
            {
              title: "Imagify - AI SaaS",
              impact: "Full-stack AI-powered text-to-image generator with credit-based system, Stripe integration, and mobile responsiveness.", 
              tags: ["MERN", "AI", "Stripe", "MongoDB", "Clip Drop API"],
              gradient: "from-blue-700 to-blue-800"
            },
            {
              title: "Supply Chain Platform",
              impact: "Digitized manual supply chain with real-time price synchronization and automated inventory management for diverse customer base.",
              tags: ["Java", "Spring Boot", "React", "Oracle", "AWS EC2"],
              gradient: "from-blue-500 to-blue-600"
            },
            {
              title: "Internal Business Tools",
              impact: "Optimized backend APIs reducing loading times and maintained 24/7 availability for operations team with performance patches.",
              tags: ["Spring Boot", "TypeScript", "MySQL", "Docker", "AWS"],
              gradient: "from-blue-600 to-blue-700"
            }
          ].map((project, index) => {
            const ProjectWrapper = project.link ? motion.a : motion.div;
            
            return (
              <ProjectWrapper
                key={project.title}
                href={project.link}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className={`group p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 hover:shadow-3xl transition-all duration-300 relative overflow-hidden ${project.link ? 'cursor-pointer' : ''}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`text-sm bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-bold uppercase tracking-widest`}>
                      {project.tags[0]}
                    </div>
                    {project.isLive && (
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                        <span className="text-xs text-green-600 dark:text-green-400 font-semibold">LIVE</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300 flex items-center">
                    {project.title}
                    {project.link && (
                      <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (tagIndex * 0.05) }}
                        className="px-3 py-2 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-full text-xs font-medium hover:scale-110 transition-transform duration-200 cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ProjectWrapper>
            );
          })}
          </div>
        </div>
      </motion.section>

      {/* Experience Timeline - Full Screen */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="experience" 
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Building innovative solutions across the tech landscape</p>
          </motion.div>
          <div className="space-y-8 relative max-w-3xl">
            {/* Animated Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
            
            {[
              {
                title: "ReplyQuickAI | Lead Frontend Engineer",
                period: "Aug 2025 - Present",
                description: "Leading DentalScan AI and N1 & N4 Telecom platforms. Built HIPAA-compliant diagnostic MVP and autonomous voice agents with 100% CRM sync accuracy.",
                skills: ["Next.js", "React", "Spring Boot", "AWS", "Conversational AI"],
                isActive: true,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Progress Solutions | Software Engineer", 
                period: "Feb 2025 - Aug 2025",
                description: "Maintained web applications using Node.js and Express.js, optimized database performance and resolved functional bugs in REST APIs.",
                skills: ["Node.js", "Express.js", "PostgreSQL", "MySQL"],
                isActive: false,
                gradient: "from-blue-600 to-blue-700"
              },
              {
                title: "Soft Buzz Technologies | Junior Software Developer",
                period: "Feb 2022 - Mar 2023", 
                description: "Developed mobile-responsive web application that digitized manual supply chain with real-time price synchronization and automated inventory management.",
                skills: ["Java", "Spring Boot", "React", "Oracle"],
                isActive: false,
                gradient: "from-blue-700 to-blue-800"
              },
              {
                title: "Winota Softech | Software Engineer",
                period: "Jan 2020 - Feb 2022",
                description: "Promoted from Support Engineer to Backend Contributor. Developed core in-house services and optimized backend APIs, reducing system downtime and improving responsiveness.",
                skills: ["Spring Boot", "TypeScript", "MySQL", "Docker"],
                isActive: false,
                gradient: "from-blue-800 to-blue-900"
              }
            ].map((experience, index) => (
              <motion.div 
                key={experience.title}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ x: 10 }}
                className="relative group"
              >
                <div className={`absolute -left-8 top-6 w-6 h-6 bg-gradient-to-r ${experience.gradient} rounded-full shadow-lg border-4 border-white dark:border-slate-900 group-hover:scale-125 transition-transform duration-300`} />
                <div className="ml-12 p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/20 group-hover:shadow-3xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mt-2 lg:mt-0 ${
                      experience.isActive 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {experience.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skill}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (skillIndex * 0.05) }}
                        className={`px-4 py-2 bg-gradient-to-r ${experience.gradient} text-white text-sm rounded-full font-medium shadow-lg hover:scale-110 transition-transform duration-200`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Continuous learning and professional development</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {[
              {
                degree: "Master of Science, Information Systems",
                school: "Indiana Institute of Technology",
                period: "May 2023 - Oct 2024",
                coursework: "Information Security & IT Governance, Database Management, Engineering Management",
                gradient: "from-blue-500 to-blue-600",
                icon: "🎓"
              },
              {
                degree: "Bachelor of Science, Computer Science Engineering",
                school: "KG Reddy College of Engineering & Technology", 
                period: "Jun 2018 - Aug 2022",
                coursework: "Java, C++, Data Structures & Algorithms, DBMS, AI/ML, SQL",
                gradient: "from-blue-600 to-blue-700",
                icon: "🎓"
              }
            ].map((education, index) => (
              <motion.div 
                key={education.degree}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/20 hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${education.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${education.gradient} rounded-2xl flex items-center justify-center mr-4 text-2xl`}>
                      {education.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                        {education.degree}
                      </h3>
                      <p className={`bg-gradient-to-r ${education.gradient} bg-clip-text text-transparent font-semibold`}>
                        {education.school}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">{education.period}</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="font-semibold">Coursework:</span> {education.coursework}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/20 hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                  Professional Certifications
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  ["AWS Certified Developer - Associate", "Oracle Certified Associate, Java SE", "Meta Front-End Developer Certificate"],
                  ["Supervised Machine Learning - Andrew Ng", "Frontend Developer (React)"]
                ].map((column, columnIndex) => (
                  <div key={columnIndex} className="space-y-3">
                    {column.map((cert, certIndex) => (
                      <motion.div
                        key={cert}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + (columnIndex * 0.1) + (certIndex * 0.05) }}
                        className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-700 dark:to-slate-600 rounded-xl border border-blue-200/50 dark:border-slate-500/50 group-hover:scale-105 transition-transform duration-200"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 shrink-0"></div>
                        <p className="font-medium text-slate-900 dark:text-white">{cert}</p>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}