import React from 'react';
import type { EducationItem } from '../types';

/*
  =============================================
  UBAH DATA PENDIDIKAN ANDA DI SINI
  =============================================
  1. Buat folder `public/assets` di direktori utama (root) proyek Anda.
  2. Tempatkan file logo institusi Anda di dalam folder `public/assets`.
  3. Path di bawah ini telah diperbarui. Pastikan nama file Anda sudah benar.
*/
const educationData: EducationItem[] = [
  {
    institution: 'University of Brawijaya',
    degree: 'Bachelor of Engineering (S.T.)',
    date: 'Sept 2021 - Jan 2025',
    description: 'Graduated with a degree in Computer Engineering, focusing on computer systems and software engineering. Final GPA: 3.84/4.00.',
    icon: '/assets/brawijaya-logo.png', // Ganti dengan path ke logo Anda
  },
  {
    institution: 'Bangkit Academy 2024 by Google, GoTo, & Traveloka',
    degree: 'Machine Learning Cohort',
    date: 'Feb 2024 - Jul 2024',
    description: 'Completed an intensive program focused on machine learning, including TensorFlow, data analysis, and model deployment, culminating in a capstone project.',
    icon: '/assets/bangkit-logo.png', // Ganti dengan path ke logo Anda
  },
];

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => {
  return (
    <div className="flex items-start gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg border border-stone-200 dark:border-gray-700">
      <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden border border-stone-200 dark:border-gray-600">
        <img src={item.icon} alt={`${item.institution} logo`} className="w-12 h-12 object-contain" />
      </div>
      <div>
        <p className="text-sm text-stone-500 dark:text-stone-500">{item.date}</p>
        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mt-1">{item.institution}</h3>
        <h4 className="text-md font-semibold text-stone-700 dark:text-stone-300">{item.degree}</h4>
        <p className="mt-2 text-stone-600 dark:text-stone-400">{item.description}</p>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-12">
          My <span className="text-amber-600 dark:text-amber-500">Education</span>
        </h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((item, index) => (
          <EducationCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Education;