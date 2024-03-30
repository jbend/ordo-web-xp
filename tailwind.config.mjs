/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		darkMode: ["class", '[data-theme="dark"]'],
		extend: {
			colors: {
				"base": "rgb(var(--color-base) / <alpha-value>)",
				"text": "rgb(var(--color-text) / <alpha-value>)",
			},
		},
	},
	plugins: [],
}

