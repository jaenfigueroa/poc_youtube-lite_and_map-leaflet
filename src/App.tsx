import './App.css'
import { LiteYoutubeEmbed } from 'react-lite-yt-embed'

function App() {
  return (
    <div className='container'>
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

export default App
