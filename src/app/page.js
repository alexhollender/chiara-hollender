import styles from './page.module.scss'
import VideoBg from '@/components/videoBg/VideoBg'
import Projects from '@/components/projects/Projects'
import About from '@/components/about/About'

export default function Home() {
  return (
    <>
    <section id='intro' className={styles.intro}>
      <VideoBg />
    </section>
    <main className={styles.main}>
      <Projects />
      <About />
    </main>
    </>
  )
}
