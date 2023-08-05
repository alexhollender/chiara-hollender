import Image from 'next/image'
import styles from './footer.module.scss'
import { mazius } from '../../fonts'

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={styles.headerWrapper}>
        <p className={mazius.className}>be kind</p>
        <Image
          src="/hands.svg"
          height={36}
          width={41}
          alt='hands'
        />
        <p className={mazius.className}>sing loud</p>
      </div>
    </footer>
  )
}