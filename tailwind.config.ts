import type { Config } from "tailwindcss"
import * as tailwindAnim from "tailwindcss-animate"

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		screens: {
			xs: "360px",
			"2xs": "400px",
			"3xs": "500px",
			sm: "640px",
			md: "768px",
			"2md": "900px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "1800px",
		},
		extend: {
			colors: {
				white: "var(--white)",
				"white-60": "var(--white-60)",
				"gray-color": "var(--gray-color)",
				"light-gray": "var(--light-gray)",
				"dark-gray": "var(--dark-gray)",
				black: "var(--black)",
				"black-10": "var(--black-10)",
				"black-40": "var(--black-40)",
				"black-60": "var(--black-60)",
				"accent-10": "var(--accent-10)",
				accent: "var(--accent)",
				border: "var(--border)",
			},
			fontFamily: {
				suisse: "var(--font-suisse)",
			},
		},
	},
	plugins: [tailwindAnim],
}
export default config
