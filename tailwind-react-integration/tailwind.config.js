module.exports = {
    content: [
      "./index.html",        // Ensure this path is correct for your HTML
      "./src/**/*.{js,jsx,ts,tsx}",  // Include all your React files
    ],
    darkMode: 'media',  // You can change this to 'class' if you want to use dark mode manually
    theme: {
      extend: {},
    },
    variants: {
      extend: {},  // Add any variants you need (like hover, focus, etc.)
    },
    plugins: [],
  }
  