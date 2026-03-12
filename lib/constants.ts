export const categories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Tools',
] as const;

export const techs: {
  name: string;
  key: string;
  color: string;
  cat: Category;
}[] = [
  // Frontend
  { name: 'JavaScript', key: 'js', color: '#f7df1e', cat: 'Frontend' },
  { name: 'TypeScript', key: 'ts', color: '#3178c6', cat: 'Frontend' },
  { name: 'React', key: 'react', color: '#61dafb', cat: 'Frontend' },
  { name: 'Next.js', key: 'nextjs', color: '#ffffff', cat: 'Frontend' },
  { name: 'Vite', key: 'vite', color: '#646cff', cat: 'Frontend' },
  // Backend
  { name: 'Node.js', key: 'nodejs', color: '#68a063', cat: 'Backend' },
  { name: 'Express', key: 'express', color: '#cccccc', cat: 'Backend' },
  { name: 'GraphQL', key: 'graphql', color: '#e10098', cat: 'Backend' },
  { name: 'PHP', key: 'php', color: '#777bb4', cat: 'Backend' },
  { name: 'Laravel', key: 'laravel', color: '#ff2d20', cat: 'Backend' },
  // Database
  { name: 'MongoDB', key: 'mongodb', color: '#47a248', cat: 'Database' },
  { name: 'PostgreSQL', key: 'postgres', color: '#336791', cat: 'Database' },
  { name: 'MySQL', key: 'mysql', color: '#4479a1', cat: 'Database' },
  { name: 'Redis', key: 'redis', color: '#dc382d', cat: 'Database' },
  { name: 'Prisma', key: 'prisma', color: '#5a67d8', cat: 'Database' },
  // Tools
  { name: 'Docker', key: 'docker', color: '#2496ed', cat: 'Tools' },
  { name: 'Git', key: 'git', color: '#f05032', cat: 'Tools' },
  { name: 'Jest', key: 'jest', color: '#c21325', cat: 'Tools' },
  { name: 'Webpack', key: 'webpack', color: '#8dd6f9', cat: 'Tools' },
  { name: 'GitHub', key: 'github', color: '#ffffff', cat: 'Tools' },
];

export const socialLinks = [
  { name: 'github', url: 'https://github.com/Yusfuu' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/youssef-hajjari' },
  { name: 'medium', url: 'https://medium.com/@yusfuu' },
  { name: 'twitter', url: 'https://twitter.com/Yosufuu' },
];

export const stack = [
  { name: 'Next.js', url: 'https://nextjs.org' },
  { name: 'Framer Motion', url: 'https://www.framer.com/motion/' },
  { name: 'Lenis', url: 'https://lenis.darkroom.engineering/' },
];

export type Category = (typeof categories)[number];
