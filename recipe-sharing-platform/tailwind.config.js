// tailwind.config.js
module.exports = {
    content: [
      './index.html', // This is the correct way to include index.html
      './src/**/*.{js,jsx,ts,tsx}', // Ensure this includes all your React component files
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  