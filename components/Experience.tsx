import React from 'react';
import type { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    role: 'Market Research (Apprenticeship)',
    company: 'Indosat Ooredoo Hutchison',
    date: 'Jul 2025 - Now',
    type: 'work',
    description: [
      'Conducted research on market share and target customers for LEO satellite internet in Indonesia.',
      'Researched the top 10 upstream tier-1 transits in Indonesia based on popular Internet Network Providers.',
      'Participated in the development and configuration of 108 Roaming mobile internet package products.',
      'Contributed to the development of the Flexi Mobile internet package product.'
    ]
  },
  {
    role: 'Staff, Scientific and Professional Development',
    company: 'HMDTIF, University of Brawijaya',
    date: 'Feb 2023 - Feb 2024',
    type: 'organization',
    description: [
      'Carried out work programs related to scientific and professional development for 11 months.',
      'Responsible for running committees under the auspices of the department.'
    ]
  },
  {
    role: 'Head of Design and Multimedia Division',
    company: 'EMPOWER Event',
    date: 'Oct 2023',
    type: 'organization',
    description: [
      'Led a design team of 4 members, creating job descriptions and representing the team in communications.',
      'Spearheaded the visual design and branding, leading to positive feedback and a 10% increase in attendee engagement.'
    ]
  },
  {
    role: 'Deputy Chief Executive',
    company: 'PRESTALK Event',
    date: 'Jul 2023',
    type: 'organization',
    description: [
      'Managed all required document files and acted as an intermediary with the Faculty BEM.',
      'Oversaw the smooth running of the event, from committee selection to final execution over 3 weeks.'
    ]
  }
];

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="pl-8 relative border-l-2 border-stone-200 dark:border-gray-700 transition-colors duration-500">
    <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full ${item.type === 'work' ? 'bg-amber-600' : 'bg-stone-500 dark:bg-gray-500'}`}></div>
    <div className="mb-8">
      <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">{item.role}</h3>
      <p className="text-md font-semibold text-stone-700 dark:text-stone-300">{item.company}</p>
      <p className="text-sm text-stone-500 dark:text-stone-500 mb-3">{item.date}</p>
      <ul className="list-disc list-outside ml-5 space-y-1 text-stone-600 dark:text-stone-400">
        {item.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-12">
            Work & Organization <span className="text-amber-600 dark:text-amber-500">Experience</span>
            </h2>
        </div>
        <div>
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;