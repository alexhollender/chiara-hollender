import localFont from 'next/font/local'

export const generalSans = localFont({
  src: '../public/fonts/GeneralSans-Variable.woff2',
  display: 'swap',
})

export const mazius = localFont({ 
  src: '../public/fonts/Mazius-Regular.woff2',
  fallback: 'serif' 
})