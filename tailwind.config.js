module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: { 
    extend: {
      colors: {

        customOrange: 'hsl(22, 65%, 57%)',
        customDarkGray: 'hsl(0, 0%, 6%)',
        customLightGray: 'hsl(0, 0%, 95%)',
        customLighterGray: 'hsl(0, 0%, 98%)',
        customWhite: 'hsl(0, 0%, 100%)',
        customBlack: 'hsl(0, 0%, 0%)',
        customPeach: 'hsl(21, 94%, 75%)',
            
    },
   
    fontFamily: {
      primary: ['Manrope', 'sans-serif'],
    
    },
    padding: {
      'small' : '3.5rem',
      'standard': '8rem',
      'standard-dtlg': '16.5rem',
      'standard-dtsm': '10.5rem',
      'tablet': '4rem', 
      'mobile': '2rem'
    },
    height: {
      '5vh': '5vh',
      '10vh': '10vh',
      '15vh': '15vh',
      '20vh': '20vh',
      '25vh': '25vh',
      '30vh': '30vh',
      '35vh': '35vh',
      '40vh': '40vh',
      '45vh': '45vh',
      '50vh': '50vh',
      '55vh': '55vh',
      '60vh': '60vh',
      '65vh': '65vh',
      '70vh': '70vh',
      '75vh': '75vh',
      '80vh': '80vh',
      '85vh': '85vh',
      '90vh': '90vh',
      '95vh': '95vh',
      '100vh': '100vh',
      '105vh': '105vh',
      '110vh': '110vh',
      '115vh': '115vh',
      '120vh': '120vh',
      '125vh': '125vh',
      '130vh': '130vh',
      '135vh': '135vh',
      '140vh': '140vh',
      '145vh': '145vh',
      '150vh': '150vh',
      '155vh': '155vh',
      '160vh': '160vh',
      '165vh': '165vh',
      '170vh': '170vh',
      '175vh': '175vh',
      '180vh': '180vh',
      '185vh': '185vh',
      '190vh': '190vh',
      '195vh': '195vh',
      '200vh': '200vh',
    },
    gridTemplateColumns: {
      'hero': '1fr 1fr 1fr',
      'custom2col': '.3fr .7fr',
      'footer': 'repeat(4,1fr)',
      'form': '0.4fr 0.6fr',
      'formPeople': '0.35fr 1fr 0.35fr',
    },
    gridTemplateRows: {
      'footer': '.2fr .5fr .3fr'
    } 

  },
 },
  variants: {},
  plugins: [],
}
