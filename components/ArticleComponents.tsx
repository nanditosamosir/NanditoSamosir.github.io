import React from 'react';
import { Project, Experience, SkillCategory } from '../types';

interface HeroArticleProps {
  name: string;
  role: string;
  intro: string;
  imageUrl: string;
}

export const HeroArticle: React.FC<HeroArticleProps> = ({ name, role, intro, imageUrl }) => {
  return (
    <article className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Lead Story */}
        <div className="md:col-span-8">
          <h2 className="font-headline text-5xl md:text-6xl font-bold leading-tight mb-4 hover:underline decoration-news-accent cursor-pointer">
            {role.toUpperCase()} HIRED FOR TOP PROJECTS
          </h2>
          <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
            <span className="font-sans font-bold text-[10px] uppercase bg-news-ink text-white px-2 py-1 tracking-widest">Breaking News</span>
            <p className="font-sans text-xs font-bold uppercase text-gray-500 tracking-wide">By Staff Writer • Jakarta</p>
          </div>
          
          <div className="float-none md:float-right md:ml-6 md:mb-4 w-full md:w-2/3">
             <div className="border border-news-ink p-1 bg-white shadow-sm">
                <img 
                  src={imageUrl} 
                  alt="Profile" 
                  className="w-full h-auto grayscale contrast-110 sepia-[.1]"
                />
                <p className="font-sans text-[10px] font-bold uppercase text-gray-500 text-left mt-2 pl-1 leading-tight">
                  FIG A. {name} captured working on latest feature deployment.
                </p>
             </div>
          </div>

          <p className="font-body text-lg text-justify leading-relaxed first-letter:text-5xl first-letter:font-headline first-letter:font-bold first-letter:mr-2 first-letter:float-left text-news-ink">
            {intro}
          </p>
        </div>

        {/* Sidebar / Quick Facts */}
        <div className="md:col-span-4 border-l-2 border-news-ink pl-6 hidden md:block">
           <div className="bg-neutral-100 p-4 border border-news-ink mb-6 shadow-[4px_4px_0px_rgba(44,41,37,0.1)]">
              <h3 className="font-headline font-bold text-xl mb-3 text-center uppercase border-b-2 border-news-ink pb-2">Flash Briefing</h3>
              <ul className="list-disc pl-5 font-body text-sm space-y-2 leading-snug">
                <li><strong className="font-sans text-xs uppercase">Update:</strong> Full-Stack Expert available for hire immediately.</li>
                <li><strong className="font-sans text-xs uppercase">Trend:</strong> React 19 adoption rises by 200% in local sector.</li>
                <li><strong className="font-sans text-xs uppercase">Opinion:</strong> TypeScript voted "Safest Language" by council.</li>
              </ul>
           </div>
           
           <div className="text-center border-t-2 border-b-2 border-news-ink py-4 my-6">
              <span className="font-masthead text-4xl block mb-2 opacity-80">Ad Space</span>
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest">Call 555-CODE to advertise here</p>
           </div>
        </div>
      </div>
    </article>
  );
};

export const ProjectColumn: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col border-b border-gray-300 pb-6 mb-6 last:border-0">
      <h3 className="font-headline text-2xl font-bold mb-2 leading-tight">{project.title}</h3>
      <div className="mb-3">
         <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover border border-news-ink grayscale hover:grayscale-0 transition-all duration-500" />
         <p className="font-sans text-[10px] font-bold uppercase text-gray-500 mt-1 text-right tracking-wider">{project.date}</p>
      </div>
      <p className="font-body text-sm text-justify mb-3 leading-relaxed text-gray-800">{project.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.technologies.map(tech => (
          <span key={tech} className="font-sans text-[9px] font-bold uppercase border border-gray-400 px-1 text-gray-600 tracking-wider">{tech}</span>
        ))}
      </div>
      {project.link && (
        <a href={project.link} className="font-sans font-bold text-xs uppercase underline decoration-news-accent decoration-2 underline-offset-2 hover:text-news-accent self-start tracking-wide">
          Read Full Story &rarr;
        </a>
      )}
    </div>
  );
};

export const ClassifiedsSection: React.FC<{ skills: SkillCategory[] }> = ({ skills }) => {
  return (
    <div className="border-2 border-news-ink p-2 mt-8">
      <h3 className="font-headline text-center text-2xl font-bold uppercase bg-news-ink text-white py-1 mb-4 tracking-wide">Classifieds & Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="border-r border-gray-300 last:border-r-0 pr-2">
            <h4 className="font-sans font-bold text-xs uppercase underline underline-offset-2 mb-2 tracking-wider">{skillGroup.category}</h4>
            <ul className="text-xs font-sans space-y-1 text-gray-700">
              {skillGroup.items.map(item => (
                <li key={item} className="cursor-help hover:text-black hover:font-bold">✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-gray-300 pt-2 text-center font-sans text-[9px] font-bold uppercase tracking-widest text-gray-500">
        * Experienced professionals only. Serious inquiries.
      </div>
    </div>
  );
};

export const ExperienceList: React.FC<{ experiences: Experience[] }> = ({ experiences }) => (
    <div className="space-y-6">
        {experiences.map((exp) => (
            <div key={exp.id} className="border-l-4 border-news-accent pl-4">
                <h4 className="font-headline font-bold text-xl">{exp.role}</h4>
                <div className="font-sans text-xs font-bold uppercase text-gray-500 mb-2 tracking-wide">{exp.company} | {exp.period}</div>
                <p className="font-body text-sm leading-relaxed text-gray-800">{exp.description}</p>
            </div>
        ))}
    </div>
);
