import './App.css'
import Mapa from './component/Mapa'
import Youtube from './component/Youtube'

function App() {
  return (
    <div className='app'>
      <div className='container-yt-embed'>
        <Youtube />
      </div>
      <div className='container-map'>
        <Mapa />
      </div>
    </div>
  )
}

export default App
