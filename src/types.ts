// Fix: Import React to resolve "Cannot find namespace 'React'" error.
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  description: string[];
  type: 'work' | 'organization';
}

export interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  description: string;
  icon: string; // Changed from ReactNode to string to allow image paths
}