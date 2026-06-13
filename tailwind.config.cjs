/** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: ["class"],
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./App.tsx"
      ],
      theme: {
        extend: {
          colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
              DEFAULT: '#1A1A1A', // Rich Charcoal
              foreground: '#FFFFFF'
            },
            secondary: {
              DEFAULT: '#F7F7F7', // Light Gray
              foreground: '#1A1A1A'
            },
            accent: {
              DEFAULT: '#C5A059', // Muted Gold
              foreground: '#C5A059'
            },
            muted: {
              DEFAULT: '#F3F4F6',
              foreground: '#6B7280'
            }
          },
          fontFamily: {
            sans: ["'Inter'", "sans-serif"],
            serif: ["'Lora'", "serif"],
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
          }
        }
      },
      plugins: [require("tailwindcss-animate")],
    };