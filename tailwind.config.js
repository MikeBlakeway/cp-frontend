module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				Alliance: '#C0C0C0',
				Alba: '#0015ff',
				Con: '#0087DC',
				DUP: '#000080',
				Green: '#78b82a',
				Ind: '#C0C0C0',
				Lab: '#DC241f',
				LD: '#f8a428',
				PC: '#3f8428',
				SNP: '#fcf28f',
				SF: '#99CC00',
				SDLP: '#CCFFCC',
				Spk: '#CCFFCC',
			},
		},
	},
	plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
}
