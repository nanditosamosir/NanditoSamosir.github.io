import React from 'react';
import { GithubIcon, LinkedinIcon, EmailIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
          Get In <span className="text-amber-600 dark:text-amber-500">Touch</span>
        </h2>
        <p className="text-stone-600 dark:text-stone-400 mb-8">
          I'm currently looking for new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.
        </p>
        <a 
          href="mailto:nanditoxamosir@gmail.com"
          className="inline-block bg-amber-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/20 text-lg"
        >
          Say Hello
        </a>
        <div className="mt-12 flex justify-center space-x-8">
          <a href="https://github.com/nanditosamosir" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/nanditosamosir/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
            <LinkedinIcon className="w-8 h-8" />
          </a>
           <a href="mailto:nanditoxamosir@gmail.com" aria-label="Email" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
            <EmailIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;