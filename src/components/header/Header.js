'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './header.module.scss'
import typeStyles from '../../styles/type.module.scss'

export default function Header() {

  const pathname = usePathname()

  return (
    <header className={`${styles.header} ${pathname !== '/' ? styles.project : ''}`}>
      <div className={styles.headerWrapper}>
        <div className={styles.leftWrapper}>
          <Link href='/'>
            <h1>Chiara Hollender</h1>
          </Link>
          <h2>Director & Producer</h2>
        </div>
        <div className={`${styles.navLinks} ${typeStyles.header}`}>
          <Link href='/#film-tv' scroll>Film & TV</Link>
          <Link href='/#about' scroll>About</Link>
        </div>
      </div>
    </header>
  )
}