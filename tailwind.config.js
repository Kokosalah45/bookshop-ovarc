/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main-layout': '240px calc(100% - 240px);',
        'card-layout': 'repeat(auto-fill, minmax(400px, 1fr));',
      },
      gridTemplateRows: {
        'sidebar-layout': 'auto 1fr auto',
      },
      backgroundImage: {
        'custom-gradient-1': `
  linear-gradient(0deg, #FFEBE1, #FFEBE1),
  linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 8%),
  linear-gradient(90deg, rgba(255, 205, 180, 0.2) 11.6%, rgba(221, 216, 214, 0) 26.8%),
  linear-gradient(270deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 1.2%)
`,
        'custom-gradient-2': `
  linear-gradient(0deg, #E4E1FF, #E4E1FF),
  linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 8%),
  linear-gradient(90deg, rgba(222, 180, 255, 0.2) 11.6%, rgba(221, 216, 214, 0) 26.8%),
  linear-gradient(270deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 1.2%)
`,
        'custom-gradient-3': `
  linear-gradient(0deg, #E1FFEB, #E1FFEB),
  linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 8%),
  linear-gradient(90deg, rgba(190, 255, 180, 0.2) 11.6%, rgba(221, 216, 214, 0) 26.8%),
  linear-gradient(270deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 1.2%)
`,
        'custom-gradient-4': `
  linear-gradient(0deg, #FFE1E1, #FFE1E1),
  linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 8%),
  linear-gradient(90deg, rgba(255, 205, 180, 0.2) 11.6%, rgba(221, 216, 214, 0) 26.8%),
  linear-gradient(270deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 1.2%)
`,
        'custom-gradient-5': `
  linear-gradient(0deg, #FFE1FA, #FFE1FA),
  linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 8%),
  linear-gradient(90deg, rgba(255, 180, 234, 0.2) 11.6%, rgba(221, 216, 214, 0) 26.8%),
  linear-gradient(270deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 1.2%)
`,
        'custom-gradient-6': `
  linear-gradient(0deg, #E1F8FF, #E1F8FF),
  linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 8%),
  linear-gradient(90deg, rgba(255, 205, 180, 0.2) 11.6%, rgba(221, 216, 214, 0) 26.8%),
  linear-gradient(270deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 1.2%)
`,
      },
      width: {
        sidebar: '240px',
        content: 'calc(100% - 240px)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
