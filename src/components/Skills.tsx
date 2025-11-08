import React from 'react';
import type { Skill } from '../types';
import { PythonIcon, TensorFlowIcon, DataAnalysisIcon, CppIcon, JavascriptIcon, ReactIcon, NextjsIcon, LaravelIcon, TailwindIcon, TableauIcon } from './Icons';

/*
  =============================================
  UBAH DAFTAR SKILL ANDA DI SINI
  =============================================
  - Untuk mengubah ikon, buka file `components/Icons.tsx`.
  - Anda dapat menambahkan, menghapus, atau mengedit skill dalam array `skills` di bawah ini.
  - Pastikan setiap skill memiliki `name` dan `icon` yang sesuai.
*/
const skills: Skill[] = [
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'Machine Learning', icon: <TensorFlowIcon /> },
  { name: 'Data Analysis', icon: <DataAnalysisIcon /> },
  { name: 'C++', icon: <CppIcon /> },
  { name: 'JavaScript', icon: <JavascriptIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Next.js', icon: <NextjsIcon /> },
  { name: 'Laravel', icon: <LaravelIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'Tableau', icon: <TableauIcon /> },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-stone-200 dark:border-gray-700 flex flex-col items-center justify-center space-y-3 transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(245,158,11,0.4)] dark:hover:shadow-[0_8px_30px_rgba(251,191,36,0.3)]">
      <div className="w-12 h-12 flex items-center justify-center">{skill.icon}</div>
      <p className="text-md font-medium text-stone-700 dark:text-stone-300 text-center">{skill.name}</p>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 rounded-lg transition-colors duration-500">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-12">
          Technical <span className="text-amber-600 dark:text-amber-500">Skills</span>
        </h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;