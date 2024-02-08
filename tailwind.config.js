/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        c1: "#104D6F",
        c2: "#E69C24",
        c3: "#FFECCC",
        c4: "#8B7357",
        sh1: "#3C6E93",
        sh2: "#6292B8",
        sh3: "#88B6DE",
        sh4: "#AEDDFF"
      },
      fontSize: {
        sm: "14px",
        md: "20px",
        mdl: "32px",
        lg: "44px",
        xl: "56px"
      }
    },
  },
  plugins: [],
}
