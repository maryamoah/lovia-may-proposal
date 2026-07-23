import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { espresso:'#1b120e', ink:'#050403', ivory:'#f5efe4', gold:'#b9985b', rose:'#7e1f1f' }, fontFamily: { serif:['var(--font-serif)'], sans:['var(--font-sans)'] }, boxShadow:{glow:'0 0 80px rgba(185,152,91,.18)'} } }, plugins: [] };
export default config;
