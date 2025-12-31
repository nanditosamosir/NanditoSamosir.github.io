import React from 'react';

export const Divider: React.FC = () => (
  <hr className="border-t-2 border-news-ink my-6 w-full opacity-80" />
);

export const ThinDivider: React.FC = () => (
  <hr className="border-t border-news-ink my-4 w-full opacity-60" />
);

export const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-6 border-b-2 border-news-ink pb-2">
    <h2 className="font-headline text-3xl font-bold uppercase tracking-wide text-news-ink">{title}</h2>
    {subtitle && <p className="font-sans text-sm font-semibold uppercase tracking-wider text-gray-600 mt-2">{subtitle}</p>}
  </div>
);

export const NewspaperHeader: React.FC = () => {
  const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <header className="flex flex-col items-center w-full mb-8 border-b-4 border-news-ink pb-4">
      {/* Top Meta Bar */}
      <div className="w-full flex justify-between border-b border-news-ink py-2 px-4 font-sans font-bold text-xs md:text-xs uppercase mb-4 text-news-ink tracking-widest">
        <span>Vol. 2025 • No. 1</span>
        <span>Nandito Samosir Edition</span>
        <span>Jakarta, ID</span>
      </div>

      {/* Masthead */}
      <h1 className="font-masthead text-6xl md:text-8xl lg:text-9xl text-center leading-none mb-2 text-news-ink tracking-tight">
        The Samosir Times
      </h1>

      {/* Motto / Date Line */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center border-t-2 border-b-2 border-news-ink py-2 mt-4 px-4 text-news-ink">
        <span className="font-headline italic font-bold text-lg">"Building the Web, One Div at a Time"</span>
        <div className="flex flex-col items-center md:items-end font-sans text-xs font-bold uppercase tracking-widest mt-2 md:mt-0">
          <span>{date}</span>
          <span>Status: Open to Work</span>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => (
  <footer className="w-full border-t-4 border-news-ink mt-12 pt-8 pb-12 bg-transparent">
    <div className="container mx-auto px-4 text-center font-sans text-xs font-bold text-news-ink opacity-80 uppercase tracking-widest">
      <p>&copy; {new Date().getFullYear()} The Samosir Times. Written & Edited by Nandito Samosir.</p>
      <p className="mt-2">Distributed via GitHub Pages.</p>
    </div>
  </footer>
);