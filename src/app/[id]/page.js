import getData from '@/utils/getData'
import Link from 'next/link'
import styles from './page.module.scss'
import gridStyles from '../../styles/grid.module.scss'
import typeStyles from '../../styles/type.module.scss'
import { mazius } from '../../fonts'

function getProject(projects, id) {
  return projects.find(item => item.url === id);
}

export async function generateMetadata({ params }) {
  const projects = await getData()
  const project = getProject(projects, params.id)
 
  return {
    title: `Chiara Hollender • ${project.subtitle}`,
    openGraph: {
      title: `Chiara Hollender • ${project.subtitle}`,
      description: `${project.fullTitle}`,
      images: [
        {
          url: `https:${project.thumbnail.url}`,
          width: `${project.thumbnail.width}`,
          height: `${project.thumbnail.height}`,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: `https:${project.thumbnail.url}`,
          width: `${project.thumbnail.width}`,
          height: `${project.thumbnail.height}`,
        },
      ]
    },
  }
}

export default async function Project({ params }) {  
  const projects = await getData()
  const project = getProject(projects, params.id)

  return (
    <main className={styles.main}>

      <section>
        <div className={`embed-container ${styles.projectEmbed}`}>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${project.youtubeVideoId}?controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className={styles.projectDescription}>
          <div>
            <h2>{project.fullTitle}</h2>
            <h4>{project.subtitle}</h4>
          </div>
          <div className={typeStyles.body}>
            {project.description}
          </div>
          <div className={styles.credits}>
            <p className={typeStyles.label}>Credits</p>
            <span className={`${typeStyles.body} ${typeStyles.list}`}>{project.credits}</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className={mazius.className}>Additional Projects</h3>
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
                <p className={typeStyles.label}>{item.projectTitle}</p>
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