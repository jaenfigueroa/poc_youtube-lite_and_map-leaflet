import { LiteYoutubeEmbed } from 'react-lite-yt-embed'

const Youtube = () => {
  return (
    <div className='container-yt-embed'>
      <LiteYoutubeEmbed
        id='cQIlwKSAyAc'
        // defaultPlay={false}
        // isPlaylist={ true}
        // noCookie={true}
        // mute={true}
        // isMobile={true}
        // defaultPlay={true}
        mobileResolution={'hqdefault'}
        desktopResolution={'hqdefault'}
        lazyImage={true}
        imageAltText='Imagen de prueba'
        // iframeTitle='Titulo de prueba'
      />
    </div>
  )
}

export default Youtube
