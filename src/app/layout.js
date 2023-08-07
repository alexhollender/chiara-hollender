import '../styles/global.scss'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { generalSans } from '../fonts'

export const metadata = {
  title: 'Chiara Hollender • Director & Producer',
  description: "Chiara Hollender is an Iranian-American filmmaker and storyteller based in New England. Hollender's work is deeply empowered by the work of women, and the complexity of nature. She seeks to disrupt the homogenization and colonization of women's voices, and has been called to capture stories that focus on healing.",
  openGraph: {
    title: 'Chiara Hollender • Director & Producer',
    description: "Chiara Hollender is an Iranian-American filmmaker and storyteller based in New England. Hollender's work is deeply empowered by the work of women, and the complexity of nature. She seeks to disrupt the homogenization and colonization of women's voices, and has been called to capture stories that focus on healing.",
    url: 'https://chiarahollender.com',
    siteName: "Chiara Hollender's portfolio",
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={generalSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
