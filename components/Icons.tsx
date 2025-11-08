import React from 'react';

/*
  =============================================
  UBAH IKON SVG ANDA DI SINI
  =============================================
  - File ini berisi semua komponen ikon yang digunakan di seluruh situs.
  - Untuk mengubah ikon, cukup ganti konten SVG di dalam tag `<svg>...</svg>` untuk komponen yang relevan.
  - Anda dapat menemukan ikon SVG gratis dari situs seperti `heroicons.com` atau `svgrepo.com`.
  - Pastikan untuk menjaga prop `className` agar styling tetap konsisten.
*/

type IconProps = {
  className?: string;
};

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const EmailIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.06-1.06z"/>
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
  </svg>
);

export const JavascriptIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" className={className}>
    <rect width="630" height="630" fill="#f7df1e"/>
    <path d="m423.2 492.2c12.1 8.9 28.1 14.8 43.1 14.8 14.3 0 24.-6.1 24.-15.5 0-10.4-9.2-14.3-25.7-20.4l-16.5-6.1c-27.5-10.1-45.2-24.5-45.2-53.7 0-28.1 22.3-48.7 52.5-48.7 21.1 0 38.3 5.8 50.2 13.4l-15.2 24.2c-9.2-6.1-20.1-9.5-31.5-9.5-12.1 0-19.8 5.6-19.8 14.3 0 9.5 7.7 13.4 23.4 19.5l16.5 6.1c31.2 11.6 49.2 26.2 49.2 55.4 0 32.2-26.2 51.5-59.3 51.5-28.9 0-49.5-9.8-63-19.5z"/>
    <path d="m289.5 490.5c8.4 6.9 18.1 11 31.2 11 14.3 0 21.9-5.6 21.9-18.4v-111.4h39.9v111.4c0 30.6-21.9 48.4-55.4 48.4-28.9 0-47.3-13.1-58.4-24.8z"/>
  </svg>
);
export const TailwindIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className={className}><path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.052.513 3.522 1.998 5.148 3.654C30.744 13.09 33.81 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.052-.513-3.522-1.998-5.148-3.654C37.256 3.11 34.19 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.052.513 3.522 1.998 5.148 3.654C17.244 29.29 20.31 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.052-.513-3.522-1.998-5.148-3.654C23.756 19.31 20.69 16.2 13.5 16.2z" clipRule="evenodd"/></svg>
);
export const ReactIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className={className}><circle r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
);
export const NextjsIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-label="Next.js logomark" viewBox="0 0 180 180" className={className}>
    <path fill="currentColor" d="M93.63 43.48h17.37v81.15c0 5.1 3.84 8.27 8.54 8.27s8.54-3.17 8.54-8.27V43.48h17.37v104.4H93.63v-23.01Z"/>
    <path fill="currentColor" d="M54.52 43.48h17.37v104.4H54.52Z"/>
  </svg>
);
export const LaravelIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.19 253.37" className={className}><path d="M248.19,164.38l-38-65.73-23.36,40.45,38,65.73h-48.47l-14.3-24.77h-50l-14.3,24.77H49.2L124.6,36.8,200,164.38ZM1,164.38,49.2,84,97.39,164.38Zm48.2-127.58,23.36,40.46L124.6,8.7,75.4,84Zm48.4,127.58L149.36,219l25.75-44.6h-51.5Zm-73-44.6,14.3,24.77h50l-39.23-67.95Zm121.2-40.45L124.6,36.8l23.36,40.45ZM49.2,84l-24,41.5,48.2,83.43L124.6,125.5Zm14.3,105.35L88.27,234.3l-14.3-24.77Zm73-150L124.6,8.7l25.75,44.6Zm-24,41.5,49.2-85.3,12,20.8-37.2,64.5Zm-25.2,43.8,39.23,67.95L124.6,125.5Z" fill="#f4645c"/></svg>
);
export const PythonIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className}><path fill="#3776ab" d="M128 .5v100h75c0-41.421-33.579-75-75-75z"/><path fill="#ffde57" d="M128 255.5V155.5H53c0 41.421 33.579 75 75 75z"/><path fill="#3776ab" d="M103 128a25 25 0 100-50 25 25 0 000 50z"/><path fill="#ffde57" d="M153 128a25 25 0 110 50 25 25 0 010-50z"/></svg>
);
export const TensorFlowIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.41 126.17" className={className}><path d="M41.71 126.17l-15.1-26.14L0 87.42l41.71 12.61v26.14z" fill="#f4b400"/><path d="M41.71 100.03l28-48.24-28-12.61.01 60.85z" fill="#db4437"/><path d="M41.71 39.18L0 26.57 26.61 0l15.1 26.57v12.61z" fill="#f4b400"/><path d="M41.71 39.18l28-12.61 26.6-26.57-26.6 26.57-28 12.61z" fill="#db4437"/><path d="M69.71 51.79l26.6-25.22-41.7-13.96-28 12.61L69.71 51.79z" fill="#4285f4"/><path d="M96.31 26.57L69.71 51.79l-28 48.24 41.71-12.61 12.89-22.33-25.2-12.6z" fill="#0f9d58"/><path d="M111.41 87.42l-41.71-23.02 26.6-27.81 15.11 10.39v40.44z" fill="#4285f4"/></svg>
);
export const DataAnalysisIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${className} text-sky-500`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V5.25A2.25 2.25 0 0 0 18 3H6A2.25 2.25 0 0 0 3.75 5.25v12.75A2.25 2.25 0 0 0 6 20.25Z" />
</svg>
);
export const CppIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 289.06" className={className}><path fill="#00599c" d="M128 0C57.31 0 0 57.31 0 128c0 53.37 32.89 98.71 78.69 116.79.47-52.65 41.7-95.21 94.25-95.21V33.87C159.26 13.84 144.97 0 128 0z"/><path fill="#008ac7" d="M128 289.06c70.69 0 128-57.31 128-128 0-53.37-32.89-98.71-78.69-116.79.47 52.65-41.7 95.21-94.25 95.21v115.71c13.68 20.03 27.97 33.87 44.94 33.87z"/><circle cx="128.5" cy="144.53" r="72.16" fill="#65a9d6"/><path fill="#fff" d="M128.5 86.69c-32.08 0-57.84 25.76-57.84 57.84s25.76 57.84 57.84 57.84 57.84-25.76 57.84-57.84-25.76-57.84-57.84-57.84zm20.8 62.47h-16.17v16.17h-9.25v-16.17H107.7v-9.25h16.17v-16.17h9.25v16.17h16.17v9.25zm53.49-3.32h-16.17v16.17h-9.25v-16.17h-16.17v-9.25h16.17v-16.17h9.25v16.17h16.17v9.25z"/></svg>
);

export const TableauIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path fill="#e15759" d="M3.5 10h-2V8.5h2v-2h-2V5h2V3.5h-2V2h2V0h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2v-2h-2v-1.5h2v-2Z"/>
    <path fill="#f28e2c" d="M7 16h2v-2H7v-1.5h2v-2H7V9h2V7H7V5h2V3H7V1h2V0H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/>
    <path fill="#4e79a7" d="M14.5 6h-2v2.5h2v2h-2v2.5h2v2h-2v1.5h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-2v2h2v1.5h-2V6Z"/>
    <path fill="#76b7b2" d="M11 6H9v2.5h2v2H9v2.5h2v2H9v1.5h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H9v2h2v1.5H9V6Z"/>
  </svg>
);

export const UniversityIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
  </svg>
);

export const CertificateIcon: React.FC<IconProps> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 100-13.5h9a9.75 9.75 0 100 13.5z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
</svg>
);