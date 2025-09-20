/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#0066CC',
          700: '#0052A3',
        },
        green: {
          600: '#009966',
          700: '#007A52',
        },
      },
      fontFamily: {
        calibri: ['Calibri', 'sans-serif'],
      },
      fontSize: {
        h1: ["2.25rem", { lineHeight: "2.5rem", fontWeight: "700" }],  // 36px bold
        h2: ["1.875rem", { lineHeight: "2.25rem", fontWeight: "700" }], // 30px bold
        h3: ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],      // 24px semibold
        body: ["1rem", { lineHeight: "1.75rem", fontWeight: "400" }],   // 16px normal
        small: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }], // 14px
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-in-from-bottom': 'slideInFromBottom 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

