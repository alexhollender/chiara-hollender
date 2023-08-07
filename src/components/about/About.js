import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './about.module.scss'
import typeStyles from '../../styles/type.module.scss'
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
      <h3 className={mazius.className}>About</h3>
      <section className={typeStyles.body}>
        {aboutPage.aboutText}
      </section>
      <section className={styles.social}>
        <a href="mailto:chiarahollender@gmail.com">Email</a>
        <a href="https://www.instagram.com/chiarahollender">Instagram</a>
        <a href="https://www.youtube.com/channel/UCbqfM3kdemyhr8lW5maTg9Q">YouTube</a>
        <a href="https://www.imdb.com/name/nm10792648/">IMDb</a>
      </section>
      <section>
        <img src={aboutPage.image.url} className={styles.aboutImage} alt='Chiara Hollender in Oregon, USA' />
      </section>
      <section className={styles.press}>
        <p className={`${styles.pressHeading} ${typeStyles.label}`}>Press & Screenings</p>
        <span className={styles.pressScreenings}>{aboutPage.pressScreeningsText}</span>
      </section>
    </section>
  )
}
