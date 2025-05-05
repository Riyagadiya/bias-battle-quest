
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			screens: {
				'xs': '480px', // Added XS breakpoint for small phones
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cognilense brand colors
				cognilense: {
					black: '#000000',
					green: '#71BD45',
					yellow: '#F7D465',
					blue: '#518FF7',
					orange: '#E59B72',
					background: '#F8F8F8',
					'background-pattern': '#F0F0F0'
				}
			},
			fontFamily: {
				domine: ['Domine', 'serif'],
				worksans: ['Work Sans', 'sans-serif'],
				inter: ['Inter', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'card-flip': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(180deg)' }
				},
				vibrate: {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
					'20%, 40%, 60%, 80%': { transform: 'translateX(2px)' }
				},
				'number-count': {
					'0%': { transform: 'translateY(0)' },
					'10%': { transform: 'translateY(-10%)' },
					'28%': { transform: 'translateY(-25%)' },
					'41%': { transform: 'translateY(-50%)' },
					'58%': { transform: 'translateY(-75%)' },
					'70%': { transform: 'translateY(-90%)' },
					'80%, 100%': { transform: 'translateY(-100%)' }
				},
				'gradient-background': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'shine': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'scale-out': 'scale-out 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-out',
				'enter': 'fade-in 0.3s ease-out, scale-in 0.2s ease-out',
				'exit': 'fade-out 0.3s ease-out, scale-out 0.2s ease-out',
				'card-flip': 'card-flip 0.5s ease-out forwards',
				'vibrate': 'vibrate 0.3s linear',
				'number-count': 'number-count 1.5s ease-out forwards',
				'gradient-flow': 'gradient-background 3s ease infinite',
				'shine-effect': 'shine 2s infinite linear'
			},
			backgroundImage: {
				'wave-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544v2.83L25.456 30l-1.414 1.414L0 7.544v2.83L22.456 30l-1.414 1.414L0 12.544v2.83L19.456 30l-1.414 1.414L0 17.544v2.83L16.456 30l-1.414 1.414L0 22.544v2.83L13.456 30l-1.414 1.414L0 27.544v2.83L10.456 30l-1.414 1.414L0 32.544v2.83L7.456 30l-1.414 1.414L0 37.544v2.83L4.456 30 3.04 31.414 0 42.544v2.83L1.456 30 .04 31.414 0 47.544v2.83L.042 30 0 52.544v2.83L.042 30 0 57.544v2.83L.042 30H0v-2h58V0h2v58h-2V30h-2zM54.627 0L56 1.372v2.83L52.143 0h2.484zm5.087 0L60 .284v2.83L55.544 0h4.17zm-48.341 0L2.83 8.544l1.414 1.414L13.372 0H11.37zm2.83 0L.284 15.272l1.414 1.414L19.1 0h-5.728zM59.716 0L28 31.716l1.414 1.414L60 2.544v-2.83L34.544 30l1.414 1.414L60 7.544v-2.83L37.544 30l1.414 1.414L60 12.544v-2.83L40.544 30l1.414 1.414L60 17.544v-2.83L43.544 30l1.414 1.414L60 22.544v-2.83L46.544 30l1.414 1.414L60 27.544v-2.83L49.544 30l1.414 1.414L60 32.544v-2.83L52.544 30l1.414 1.414L60 37.544v-2.83L55.544 30l1.414 1.414L60 42.544v-2.83L58.544 30l1.414 1.414L60 47.544v-2.83L59.958 30 60 52.544v-2.83L59.958 30 60 57.544v-2.83L59.958 30H60v2H2V0h57.716z' fill='%23F0F0F0' fill-opacity='.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-linear': 'linear-gradient(90deg, #000000, #71BD45, #F7D465, #518FF7, #E59B72, #000000)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
