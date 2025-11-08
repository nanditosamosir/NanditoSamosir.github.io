import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          About <span className="text-amber-600 dark:text-amber-500">Me</span>
        </h2>
        <div className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed space-y-4">
          <p>
            I am a fresh graduate of Computer Engineering who's dedicated and a results-oriented person, with strong technical abilities and effective interpersonal skills. I'm interested in the development of Embedded Systems, Data Analysis, and Machine Learning.
          </p>
          <p>
            In addition, I am also interested in Management Trainee Programs. I am passionate about applying my knowledge and skills to help organizations achieve their goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;