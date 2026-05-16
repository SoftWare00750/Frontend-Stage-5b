export interface Project {
  id: number;
  title: string;
  desc: string;
  category: 'svelte' | '3d' | 'fullstack';
  badge: string;
  emoji: string;
  gradient: string;
  tags: string[];
  demo: string;
  github: string;
}

export interface Skill {
  name: string;
  pct: number;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  desc: string;
}

export interface TerminalCommand {
  desc?: string;
  output: Array<{ type: string; text: string }> | 'clear';
}

export const PROJECTS: Project[] = [
  {
    id: 1, title: 'Cosmos UI — Design System', category: 'svelte', badge: 'Svelte',
    emoji: '🌌', gradient: 'linear-gradient(135deg,#1a1240,#2d1b69)',
    desc: 'A production-grade component library built with Svelte. 60+ accessible components, dark mode, and a token-based theming engine.',
    tags: ['SvelteKit', 'TypeScript', 'CSS vars'], demo: '#', github: '#',
  },
  {
    id: 2, title: 'Fluid — Interactive 3D Globe', category: '3d', badge: 'Three.js',
    emoji: '🌊', gradient: 'linear-gradient(135deg,#0c2340,#1a4a7a)',
    desc: 'A WebGL-powered data visualization tool featuring an interactive 3D globe with real-time data overlays and fluid particle simulations.',
    tags: ['Three.js', 'GLSL', 'Svelte'], demo: '#', github: '#',
  },
  {
    id: 3, title: 'Pulse — Analytics Dashboard', category: 'fullstack', badge: 'Full Stack',
    emoji: '📊', gradient: 'linear-gradient(135deg,#0d2010,#1a4a20)',
    desc: 'Real-time analytics platform processing 100k+ events/day. Built with SvelteKit + Node.js, featuring live charts and custom data pipelines.',
    tags: ['SvelteKit', 'Node.js', 'PostgreSQL'], demo: '#', github: '#',
  },
  {
    id: 4, title: 'Resonance — Music Visualizer', category: 'svelte', badge: 'Svelte',
    emoji: '🎵', gradient: 'linear-gradient(135deg,#2d0a2e,#6b1a6d)',
    desc: 'Web Audio API meets SVG animation. An interactive music visualizer that generates real-time visuals from audio frequency data.',
    tags: ['Web Audio API', 'SVG', 'Svelte'], demo: '#', github: '#',
  },
  {
    id: 5, title: 'Archviz — 3D Product Showcase', category: '3d', badge: '3D',
    emoji: '🏗️', gradient: 'linear-gradient(135deg,#1a0a00,#4a2a00)',
    desc: 'A cinematic 3D product configurator with real-time material swapping, camera animations, and AR-ready model export.',
    tags: ['Three.js', 'GSAP', 'WebXR'], demo: '#', github: '#',
  },
  {
    id: 6, title: 'Synthia — AI Writing Tool', category: 'fullstack', badge: 'AI',
    emoji: '🤖', gradient: 'linear-gradient(135deg,#001a2d,#003d66)',
    desc: 'An AI-powered writing assistant with a custom rich-text editor, context-aware suggestions, and a streamed generation UI.',
    tags: ['SvelteKit', 'OpenAI', 'Redis'], demo: '#', github: '#',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Svelte / SvelteKit', pct: 95 },
  { name: 'TypeScript', pct: 90 },
  { name: 'Animation / GSAP', pct: 88 },
  { name: 'Three.js / WebGL', pct: 75 },
  { name: 'UI/UX Design', pct: 82 },
  { name: 'Performance Optimization', pct: 91 },
];

export const EXPERIENCE: Experience[] = [
  {
    period: '2023 — Present', company: 'Vercel', role: 'Senior Frontend Engineer',
    desc: 'Leading the design system team, building core UI infrastructure used by 50k+ developers. Shipped the new dashboard experience and reduced bundle size by 40%.',
  },
  {
    period: '2021 — 2023', company: 'Figma', role: 'Frontend Engineer II',
    desc: 'Worked on the canvas rendering engine and plugin API. Contributed to the FigJam launch with custom real-time collaboration components using CRDTs.',
  },
  {
    period: '2019 — 2021', company: 'Shopify', role: 'Frontend Developer',
    desc: 'Built merchant-facing features for the Shopify Admin. Migrated legacy React components to modern patterns, improved accessibility scores across the platform.',
  },
  {
    period: '2018 — 2019', company: 'Freelance', role: 'Creative Developer',
    desc: 'Designed and built interactive websites for agencies and startups. Specialized in scroll-driven animations, WebGL backgrounds, and immersive landing pages.',
  },
];

export const TERMINAL_COMMANDS: Record<string, TerminalCommand> = {
  help: {
    desc: 'List all commands',
    output: [
      { type: 'info', text: 'Available commands:' },
      { type: 'success', text: '  about       — About me' },
      { type: 'success', text: '  skills      — My technical skills' },
      { type: 'success', text: '  experience  — Work history' },
      { type: 'success', text: '  projects    — Featured projects' },
      { type: 'success', text: '  contact     — Get in touch' },
      { type: 'success', text: '  theme       — Toggle dark/light mode' },
      { type: 'success', text: '  clear       — Clear terminal' },
      { type: 'success', text: '  whoami      — Who am I?' },
    ],
  },
  whoami: {
    output: [{ type: 'output', text: 'alex chen — frontend engineer & creative developer' }],
  },
  about: {
    output: [
      { type: 'output', text: 'Name:      Alex Chen' },
      { type: 'output', text: 'Location:  Lagos, Nigeria / Remote' },
      { type: 'output', text: 'Role:      Senior Frontend Engineer' },
      { type: 'output', text: 'Focus:     Svelte, Animation, 3D, Performance' },
      { type: 'output', text: 'Status:    Open to opportunities ✓' },
    ],
  },
  skills: {
    output: [
      { type: 'info', text: 'Core stack:' },
      { type: 'output', text: '  → SvelteKit, TypeScript, TailwindCSS' },
      { type: 'info', text: 'Animation:' },
      { type: 'output', text: '  → GSAP, Motion One, Svelte transitions' },
      { type: 'info', text: '3D:' },
      { type: 'output', text: '  → Three.js, GLSL shaders, WebGL' },
      { type: 'info', text: 'Backend:' },
      { type: 'output', text: '  → Node.js, PostgreSQL, Redis, Prisma' },
    ],
  },
  experience: {
    output: [
      { type: 'success', text: '2023–Present  Vercel       Senior Frontend Engineer' },
      { type: 'success', text: '2021–2023     Figma        Frontend Engineer II' },
      { type: 'success', text: '2019–2021     Shopify      Frontend Developer' },
      { type: 'success', text: '2018–2019     Freelance    Creative Developer' },
    ],
  },
  projects: {
    output: [
      { type: 'output', text: '1. Cosmos UI   — Design system, SvelteKit' },
      { type: 'output', text: '2. Fluid        — 3D globe visualization, Three.js' },
      { type: 'output', text: '3. Pulse        — Analytics dashboard, Full stack' },
      { type: 'output', text: '4. Resonance    — Music visualizer, Web Audio API' },
      { type: 'output', text: '5. Archviz      — 3D product showcase, WebXR' },
      { type: 'output', text: '6. Synthia      — AI writing tool, OpenAI' },
    ],
  },
  contact: {
    output: [
      { type: 'info', text: 'Email:   alex@alexchen.dev' },
      { type: 'info', text: 'GitHub:  github.com/alexchen' },
      { type: 'info', text: 'Twitter: @alexchendev' },
      { type: 'success', text: '→ Scroll down to send a message!' },
    ],
  },
  ls: {
    output: [{ type: 'output', text: 'about.md  projects/  skills.json  resume.pdf  contact.txt' }],
  },
  pwd: {
    output: [{ type: 'output', text: '/home/alex/portfolio' }],
  },
  clear: { output: 'clear' },
};