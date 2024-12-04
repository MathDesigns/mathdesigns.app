import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				nav:'#001824',
				background: '#10002B',
				background_accent_blue: '#240046',
				background_accent_purple: '#3C096C',
				accent: '#7B2CBF',
				accent_blueish: '#C77DFF',
				catpuccin_base: '#1e1e2e',
				catpuccin_mauve: '#cba6f7',
				catpuccin_text: '#cdd6f4',
				catpuccin_subtext: '#bac2de',
				catpuccin_surface: '#313244'

			}
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
