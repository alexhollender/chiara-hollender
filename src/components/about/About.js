import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './about.module.scss'
import { mazius } from '../../fonts'

function formatResponse(response) {
  const aboutPage = response.items.find(item => item.fields.aboutPage !== undefined);
  const imageId = aboutPage.fields.aboutImage.sys.id;
  const imageObject = response.includes.Asset.find(asset => 
    asset.sys.id === imageId
  );

  return {
    aboutText: documentToReactComponents(aboutPage.fields.aboutText),
    image: {
      url: imageObject.fields.file.url,
      width: imageObject.fields.file.details.image.width,
      height: imageObject.fields.file.details.image.height 
    },
    pressScreeningsText: documentToReactComponents(aboutPage.fields.pressScreeningsText)
  }
}

async function getData() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}//environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`, 
    { next: { revalidate: 3600 } }
  )
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const resJson = await res.json()

  return formatResponse(resJson)
}

export default async function About() {
  const aboutPage = await getData()

  return (
    <section id='about' className={styles.about}>
      <h2 className={mazius.className}>About</h2>
      <section className={styles.aboutText}>
        {aboutPage.aboutText}
      </section>
      <section>
        <img src={aboutPage.image.url} className={styles.aboutImage} alt='Chiara Hollender in Oregon, USA' />
      </section>
      <section className={styles.press}>
        <p className={`subtitle ${styles.pressHeading}`}>Press & Screenings</p>
        <span className={styles.pressScreenings}>{aboutPage.pressScreeningsText}</span>
      </section>
    </section>
  )
}
