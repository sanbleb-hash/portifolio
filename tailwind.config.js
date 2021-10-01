module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				hero: 'url(https://cdn.pixabay.com/photo/2015/01/09/02/45/laptop-593673_960_720.jpg)',
				contact:
					'url(https://cdn.pixabay.com/photo/2017/09/25/17/38/chart-2785979_960_720.jpg)',
			},
			fontFamily: {
				ephisis: ['Ephesis', 'cursive'],
				genumu: ['Gemunu Libre', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};