import getData from '@/utils/getData'
import Link from 'next/link'
import Image from 'next/image'
import gridStyles from '../../styles/grid.module.scss'
import typeStyles from '../../styles/type.module.scss'
import { mazius } from '../../fonts'

export default async function Projects() {
  const projects = await getData()
  
  return (
    <section id='film-tv'>
      <h3 className={mazius.className}>Film & TV</h3>
      <div className={gridStyles.projectsGrid}>
        {projects.map((item, index) =>
          <Link href={`/${item.url}`} className={gridStyles.projectWrapper} key={index}>
            <Image 
              src={`https:${item.thumbnail.url}`}
              width={item.thumbnail.width}
              height={item.thumbnail.height}
              className={gridStyles.thumbnail}
              alt={item.projectTitle}
            />
            <p className={typeStyles.label}>{item.projectTitle}</p>
          </Link>
        )}
      </div>
    </section>
  )
}