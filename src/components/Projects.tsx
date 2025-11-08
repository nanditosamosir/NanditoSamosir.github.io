import React from 'react';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './Icons';

/*
  =============================================
  UBAH PROYEK ANDA DI SINI
  =============================================
  1. Buat folder bernama `assets` di direktori utama proyek Anda.
  2. Tempatkan gambar mini proyek Anda di dalam folder `assets`.
  3. Edit array `projects` di bawah ini. Ganti `image` dengan path ke gambar Anda (misalnya, `image: './assets/nama-gambar-proyek.jpg'`).
*/
const projects: Project[] = [
  {
    title: 'Drowsiness Detection Model',
    description: 'Developed an EfficientNetV2-based deep learning model with CBAM and SE attention modules to detect drowsiness with 96% accuracy.',
    tags: ['Python', 'Deep Learning', 'Computer Vision'],
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/nanditosamosir/Drowsiness_Detection_Model_EfficientNetV2.git',
  },
  {
    title: 'Fungi.info - Bangkit Capstone',
    description: 'Built and validated a CNN model for fungus species classification with 91% accuracy, integrated into an Android app for outdoor safety.',
    tags: ['Machine Learning', 'CNN', 'Android'],
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/Fungi-info-Bangkit-Capstone/model.git',
  },
  {
    title: 'Automatic Pet Feeder',
    description: 'Engineered an Arduino-based automated feeding system using C++ for firmware and designed PCB schematics for reliable operation.',
    tags: ['Embedded Systems', 'Arduino', 'C++'],
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/nanditosamosir/Embedded-System-Project',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-stone-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">{project.title}</h3>
        <p className="text-stone-600 dark:text-stone-400 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4 pt-2">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
            <GithubIcon className="w-6 h-6" />
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live preview" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-12">
          Featured <span className="text-amber-600 dark:text-amber-500">Projects</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;