module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "766px" },
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    colors: {
      'blue': {
        200: '#007CFB',
        300: '#0431B8',
        400: '#22356f',
        500: '#000E39'
      },
      'medium-blue': '#0431B8',
      'blue-as': '#22356f',
      'dark-blue': '#000E39',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#fff'
    },
    fontFamily: {
      sans: ['Poppins', 'Rubik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    backgroundImage: {
      'welcome-image': "url('/images/empresa-de-limpeza-de-sofa.jpeg')",
      'assignments-image': "url('/images/bg-section-05.jpg')",
      'pattern': "url('/images/bg-contact-form.png')",
    }
  },
  plugins: [],
}
