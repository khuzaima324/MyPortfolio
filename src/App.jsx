import './index.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom'
import SmoothScroll from './components/smoothScroll'

function App() {
  return (
    <>
    <SmoothScroll clasName={'overflow-x-hidden scroll-smooth'}/>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App
