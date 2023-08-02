import '../styles/global.scss'
import Header from '@/components/header/Header'
import { generalSans } from '../fonts'

export const metadata = {
  title: 'Chiara Hollender',
  description: 'Film director and producer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={generalSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
