import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      backgroundColors: {
        'initial-primary':'#60C1C6',
     
      },
      theme: {
        extend: {
          backgroundColor: {
            'custom-initial': '#60C1C6',
            'custom-hover': '#247B80',
            'custom-focus': ' #E4DAFF',
            'custom-active': '#14142B',
          },
        },
      },
     
    },
  },
  variants: {},
  plugins: [],
}
export default config
