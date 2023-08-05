'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './header.module.scss'

export default function Header() {

  const pathname = usePathname()

  return (
    <header className={`${styles.header} ${pathname === '/' ? styles.home : ''}`}>
      <div className={styles.headerWrapper}>
        <div className={styles.leftWrapper}>
          <Link href='/'>
            <h1>Chiara Hollender</h1>
          </Link>
          <p>Director & Producer</p>
        </div>
        <div className={styles.navLinks}>
          <Link href='/#film-tv' scroll>Film & TV</Link>
          <Link href='/#about' scroll>About</Link>
        </div>
      </div>
    </header>
  )
}