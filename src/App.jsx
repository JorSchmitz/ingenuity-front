import './App.css'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Crew from './components/Crew'
import Events from './components/Events'
import Footer from './components/Footer'
import Header from './components/Header'
import Memories from './components/Memories'

function App() {

  return (
    <main>
      <Header />
      <Banner />
      <Events />
      <Crew />

      <Memories />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
