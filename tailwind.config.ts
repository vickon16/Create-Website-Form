import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at right bottom, #050505 , #043039)',
      },
      fontSize: {
        clamp2Xs: "clamp(0.65rem, 0.85vw, 0.8rem)",
        clampXs: "clamp(0.75rem, 0.9vw, 0.85rem)",
        clampSm: "clamp(0.9rem, 0.95vw, 0.95rem)",
        clampMd: "clamp(1rem, 1.2vw, 1.2rem)",
        clampBase: "clamp(1.2rem, 1.5vw, 1.5rem)",
        clampLg: "clamp(1.4rem, 2vw, 2rem)",
        clampXl: "clamp(1.55rem, 2.5vw, 2.5rem)",
        clamp2Xl: "clamp(1.8rem, 3vw, 3rem)",
        clamp3Xl: "clamp(2rem, 3.5vw, 3.5rem)",
        clampHero: "clamp(5rem, 7.5vw, 8.5rem)",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config