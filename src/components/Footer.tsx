import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-stone-200 dark:border-gray-700 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center text-stone-500 dark:text-stone-400">
        <p>&copy; {new Date().getFullYear()} Nandito Yuda Samosir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;