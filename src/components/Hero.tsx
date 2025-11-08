import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, EmailIcon, PhoneIcon, DownloadIcon } from './Icons';

const Hero: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('0895626645723').then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  /*
    =============================================
    UBAH FOTO LATAR BELAKANG ANDA DI SINI
    =============================================
    Ganti URL di dalam `backgroundImage` di bawah ini dengan URL gambar yang Anda inginkan.
    Anda bisa menggunakan URL dari Unsplash, Pexels, atau hosting gambar lainnya.
  */
  const heroStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop')`
  };

  return (
    <section 
      id="home" 
      style={heroStyle} 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center"
    >
      {/* Lapisan gelap untuk keterbacaan teks */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      
      {/* Gradien transparan di bagian bawah untuk transisi yang mulus */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-stone-100 dark:from-gray-900 to-transparent z-0"></div>

      {/* Konten diletakkan di atas lapisan */}
      <div className="relative z-10 max-w-3xl px-6">
        {/*
          =============================================
          UBAH FOTO PROFIL ANDA DI SINI
          =============================================
          1. Buat folder `public/assets` di direktori utama proyek Anda.
          2. Tempatkan file gambar Anda di dalam folder `public/assets` tersebut.
          3. Path di bawah ini sudah diperbarui. Pastikan nama file Anda `profile.jpg` atau sesuaikan.
        */}
        <img 
          src="/assets/profile.jpg"
          alt="Nandito Yuda Samosir" 
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto mb-6 border-4 border-stone-100/50 shadow-xl"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-50 leading-tight">
          NANDITO YUDA SAMOSIR
        </h1>
        <p className="mt-4 text-lg md:text-xl text-stone-200">
          A dedicated and results-oriented fresh graduate of Computer Engineering, passionate about Embedded Systems, Data Analysis, and Machine Learning.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-stone-200">
           <button onClick={handleCopy} className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300">
            <PhoneIcon className="w-5 h-5" />
            <span>{isCopied ? 'Copied!' : '+62 895-6266-45723'}</span>
          </button>
          <span className="hidden md:inline text-stone-500">|</span>
          <a href="mailto:nanditoxamosir@gmail.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300">
            <EmailIcon className="w-5 h-5" />
            <span>nanditoxamosir@gmail.com</span>
          </a>
        </div>
        
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://github.com/nanditosamosir" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
            <GithubIcon className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/nanditosamosir/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
            <LinkedinIcon className="w-7 h-7" />
          </a>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://drive.google.com/file/d/1C0rt7orTNHtS0w6FDjyUE6b2dqeqmpXb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-amber-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/20 w-full sm:w-auto justify-center">
                <DownloadIcon className="w-5 h-5" />
                Download CV
            </a>
            <a href="#contact" className="bg-stone-200 text-stone-900 font-semibold py-3 px-8 rounded-full hover:bg-stone-300 transition-all duration-300 w-full sm:w-auto">
                Contact Me
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;