import localFont from 'next/font/local'

export const generalSans = localFont({
  src: '../public/fonts/GeneralSans-Variable.woff2',
  display: 'swap',
})

export const cormorantGaramond = localFont({ 
  src: '../public/fonts/CormorantGaramond-Regular.ttf',
  fallback: 'serif' 
})