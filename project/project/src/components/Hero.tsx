import React from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, FileText, FolderKanban, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/data';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute w-96 h-96 rounded-full bg-blue-300 dark:bg-blue-700 blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-teal-300 dark:bg-teal-700 blur-3xl bottom-10 -right-20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div 
          className="md:w-1/2 md:pr-10 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm {personalInfo.name}
          </h1>
          
          <div className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 h-16">
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'ML Enthusiast',
                1000,
                'DSA Proficient',
                1000,
                'B.Tech Student',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-blue-700 dark:text-blue-400"
            />
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            {personalInfo.shortBio}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
            >
              <FileText className="w-5 h-5" />
              <span>View Resume</span>
            </a>
            
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-3 bg-transparent border-2 border-blue-700 dark:border-blue-500 text-blue-700 dark:text-blue-400 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-600 rounded-lg flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
            >
              <FolderKanban className="w-5 h-5" />
              <span>Explore Projects</span>
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-lg opacity-70 animate-pulse"></div>
            <img 
              src={personalInfo.photo} 
              alt={personalInfo.name}
              className="relative w-full h-full object-cover rounded-full p-2 bg-white dark:bg-gray-800"
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <p className="text-gray-600 dark:text-gray-400 mb-2">Scroll Down</p>
        <ArrowDown className="w-6 h-6 text-blue-700 dark:text-blue-400" />
      </motion.div>
    </section>
  );
};

export default Hero;