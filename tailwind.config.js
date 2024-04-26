/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
            colors: {
                primary: {
                    50: "0945AC"
                },
            },
    },
  },
  plugins: [
        require('flowbite/plugin')({
      charts: true,
  }),
  ]
}

