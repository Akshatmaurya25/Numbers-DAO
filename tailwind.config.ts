	import type { Config } from "tailwindcss";
	import animate from "tailwindcss-animate";

	export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
		colors: {
			background: "var(--background)",
			foreground: "var(--foreground)",
			whi: "#F9FAFD",
			gre:"#B3B1B0",
			gre2:"#6A6A6A",
			pri: '#591DDD',
				sec1: '#9226C9',
				bg: '#0B0121',
				sec2: '#E71BAC',
				border: 'hsl(var(--border))',
				sec3: "#0B0121",
				text: "#ececec",
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
		},
		animation: {
			'slide-left-infinite': 'slide-left 8s linear infinite',
			marquee: "marquee 40s linear infinite",
			scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			
		},
		keyframes: {
			'slide-left': {
				'0%': { transform: 'translateX(0)' },
				'100%': { transform: 'translateX(-100%)' },
			},
			marquee: {
				"0%": { transform: "translateX(0%)" },
				"100%": { transform: "translateX(-100%)" }
			},
			scroll: {
				"0%": { transform: "translate(0)" },
				"100%": { transform: "translate(calc(-50% - 0.5rem))" }
			}
		},
		borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
	},

	plugins: [animate],
	} satisfies Config;
