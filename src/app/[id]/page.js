import getData from '@/utils/getData'
import Link from 'next/link'
import styles from './page.module.scss'
import gridStyles from '../../styles/grid.module.scss'
import { mazius } from '../../fonts'

function getProject(projects, id) {
  return projects.find(item => item.url === id);
}

export async function generateMetadata({ params }) {
  const projects = await getData()
  const project = getProject(projects, params.id)
 
  return {
    title: `Chiara Hollender | ${project.fullTitle}`
  }
}

export default async function Project({ params }) {  
  const projects = await getData()
  const project = getProject(projects, params.id)

  return (
    <main className={styles.main}>
      <div className='embed-container'>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${project.youtubeVideoId}?controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <section className={styles.projectDescription}>
        <h3>{project.fullTitle}</h3>
        <h4>{project.subtitle}</h4>
        <span>{project.description}</span>
        <span>
          <p className='subtitle'>Credits</p>
          {project.credits}
        </span>
      </section>
      <section>
        <h2 className={mazius.className}>Additional Projects</h2>
        <div className={gridStyles.projectsGrid}>
          {projects
            .filter(item => item.url !== params.id)
            .map((item, index) =>
              <Link href={`/${item.url}`} className={gridStyles.projectWrapper} key={index}>
                <img 
                  src={`https:${item.thumbnail.url}`}
                  className={gridStyles.thumbnail}
                  alt={item.projectTitle}
                />
                <p className={gridStyles.title}>{item.projectTitle}</p>
              </Link>
            )}
        </div>
      </section>
      <section>
        <Link href="/">← Home page</Link>
      </section>
    </main>
  )
}