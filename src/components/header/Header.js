'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './header.module.scss'

export default function Header() {

  const pathname = usePathname()

  return (
    <header className={`${styles.header} ${pathname === '/' ? styles.home : ''}`}>
      <div className={styles.headerWrapper}>
        <div>
          <Link href='/'>
            <h1>Chiara Hollender</h1>
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href='/#film-tv' scroll>Film & TV</Link>
          <Link href='/#about' scroll>About</Link>
        </div>
      </div>
    </header>
  )
}