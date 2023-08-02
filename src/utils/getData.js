import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function formatResponse(response) {
  // Map over the items to format them
  const newArray = response.items.map(item => {
    // Find the related image in the includes.Asset array
    const relatedImage = response.includes.Asset.find(asset => 
      asset.sys.id === item.fields.thumbnail?.sys.id
    );
      

    return {
      projectTitle: item.fields.projectTitle,
      url: item.fields.url,
      thumbnail: {
        url: relatedImage.fields.file.url,
        width: relatedImage.fields.file.details.image.width,
        height: relatedImage.fields.file.details.image.height
      },
      fullTitle: item.fields.fullTitle,
      subtitle: item.fields.subtitle,
      youtubeVideoId: item.fields.youtubeVideoId,
      description: documentToReactComponents(item.fields.description),
      credits: documentToReactComponents(item.fields.credits),
      projectDate: item.fields.projectDate,
    };
  });

  return newArray;
}

export default async function getData() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?order=-fields.projectDate&content_type=project&access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`, 
    { next: { revalidate: 3600 } }
  )
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const resJson = await res.json()

  return formatResponse(resJson)
}