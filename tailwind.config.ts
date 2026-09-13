import type {Config} from 'tailwindcss'
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./data/**/*.{ts,tsx}'],theme:{extend:{fontFamily:{sans:['var(--font-inter)'],display:['var(--font-space)'],mono:['var(--font-mono)']},colors:{paper:'#F7F5F0',ink:'#111111',navy:'#1B3A6B',line:'#D8D5CD'}}},plugins:[]} satisfies Config
