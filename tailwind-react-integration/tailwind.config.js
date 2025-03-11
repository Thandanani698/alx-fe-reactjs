module.exports = {
  // Specify the paths to all of your template files
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path as needed
  ],
  
  darkMode: 'media', // or 'class' based on your preference
  // You can also use 'false' if you don't want dark mode support

  variants: {
    extend: {
      // Customize which variants you want to enable for various utilities
      backgroundColor: ['active', 'group-hover'],
      textColor: ['group-hover'],
      // Add more variants as necessary
    },
  },

  // Other Tailwind configuration options
  theme: {
    extend: {
      // Custom theme configurations
    },
  },

  plugins: [],
}
