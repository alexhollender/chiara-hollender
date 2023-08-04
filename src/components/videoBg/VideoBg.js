import { headers } from 'next/headers'

export default function VideoBg() {

  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  let isMobileView = userAgent && userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  return (
    isMobileView ? 
      <div className="embed-container">
        <iframe src="https://player.vimeo.com/video/851740073?background=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="Women of the Earth | Trailer"></iframe>
      </div>
    :
      <div className="embed-container">
        <iframe src="https://player.vimeo.com/video/850579349?background=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="Women of the Earth | Trailer"></iframe>
      </div>
  )
}