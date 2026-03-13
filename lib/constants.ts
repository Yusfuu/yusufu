export const categories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Tools',
] as const;

export const OFFLINE_MSGS = [
  'shipping code...',
  'in the zone 🎯',
  'git commit -m "vibe"',
  'console.log(life)',
  'brewing coffee ☕',
  'reading the docs',
  'touching grass 🌿',
  'thinking deeply...',
  'npm i happiness',
];

export const POLL_INTERVAL = 30_000;

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
  { name: 'Vue.js', key: 'vue', color: '#42b883', cat: 'Frontend' },
  { name: 'Tailwind', key: 'tailwind', color: '#38bdf8', cat: 'Frontend' },
  { name: 'Vite', key: 'vite', color: '#646cff', cat: 'Frontend' },
  // Backend
  { name: 'Node.js', key: 'nodejs', color: '#68a063', cat: 'Backend' },
  { name: 'Express', key: 'express', color: '#cccccc', cat: 'Backend' },
  { name: 'NestJS', key: 'nestjs', color: '#e0234e', cat: 'Backend' },
  { name: 'GraphQL', key: 'graphql', color: '#e10098', cat: 'Backend' },
  { name: 'Apollo', key: 'apollo', color: '#311c87', cat: 'Backend' },
  { name: 'Laravel', key: 'laravel', color: '#ff2d20', cat: 'Backend' },
  // Database
  { name: 'PostgreSQL', key: 'postgres', color: '#336791', cat: 'Database' },
  { name: 'MongoDB', key: 'mongodb', color: '#47a248', cat: 'Database' },
  { name: 'Redis', key: 'redis', color: '#dc382d', cat: 'Database' },
  { name: 'Firebase', key: 'firebase', color: '#ffca28', cat: 'Database' },
  { name: 'Prisma', key: 'prisma', color: '#5a67d8', cat: 'Database' },
  // Tools
  { name: 'Docker', key: 'docker', color: '#2496ed', cat: 'Tools' },
  { name: 'AWS', key: 'aws', color: '#ff9900', cat: 'Tools' },
  { name: 'Terraform', key: 'terraform', color: '#f05032', cat: 'Tools' },
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

export const EASE = [0.16, 1, 0.3, 1] as const;

export type Category = (typeof categories)[number];
