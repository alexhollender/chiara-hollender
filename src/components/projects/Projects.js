import getData from '@/utils/getData'
import gridStyles from '../../styles/grid.module.scss'
import Link from 'next/link';
import { cormorantGaramond } from '../../fonts'

export default async function Projects() {
  const projects = await getData()
  
  return (
    <section id='film-tv'>
      <h2 className={cormorantGaramond.className}>Film & TV</h2>
      <div className={gridStyles.projectsGrid}>
        {projects.map((item, index) =>
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
  )
}