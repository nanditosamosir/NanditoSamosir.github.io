import React, { useState } from 'react';
import { SunIcon, MoonIcon } from './Icons';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu on nav click
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Left: Name */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-xl font-bold text-stone-900 dark:text-stone-100">Nandito Samosir</a>
          </div>

          {/* Center: Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Right: Theme Toggle (Desktop) */}
          <div className="hidden md:flex justify-end">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative w-14 h-7 bg-stone-300 dark:bg-gray-700 rounded-full flex items-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <span
                className={`absolute left-1 transition-transform duration-300 ease-in-out ${
                  theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                }`}
              >
                <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-amber-500">
                   {theme === 'light' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4 text-white" />}
                </span>
              </span>
            </button>
          </div>
          
          {/* Mobile Menu Button & Toggle */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative w-14 h-7 bg-stone-300 dark:bg-gray-700 rounded-full flex items-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <span
                className={`absolute left-1 transition-transform duration-300 ease-in-out ${
                  theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                }`}
              >
                <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-amber-500">
                   {theme === 'light' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4 text-white" />}
                </span>
              </span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6 text-stone-700 dark:text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 text-center py-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;