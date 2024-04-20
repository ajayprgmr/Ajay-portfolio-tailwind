import Navbar from './components/navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/contact'

const App = () => {
  return (
    <section className='max-w-screen'>
      <Navbar />

      {/* Assigning different colors to components */}
      <div className='bg-red-100'>
        <Home />
      </div>
      <div className='bg-white'>
        <Skills />
      </div>
      <div className=''>
        <About />
      </div>
      <div className='bg-slate-100	'>
        <Projects />
      </div>
      <div className='white'>
        <Contact />
      </div>
    </section>
  )
}

export default App
