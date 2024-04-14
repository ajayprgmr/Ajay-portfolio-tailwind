import hero from '../assets/hero.jpeg'
import { socials } from '../data'
import Typewriter from 'typewriter-effect'
import { FaChevronDown } from 'react-icons/fa'

const Home = () => {
  return (
    <div
      className='  bg-custom min-h-screen  grid grid-rows-2 md:grid md:grid-rows-3 lg:max-h-screen lg:grid-cols-2 border-4 '
      id='home'
    >
      {/* Hero Image */}
      <div className='md:mt-20 md:h-tab-img lg:min-h-screen lg:-mt-1'>
        <img
          src={hero}
          alt='hero'
          className='mt-20 md:-mt-10 h-mobile-img w-screen lg:h-full '
        />
      </div>

      {/* Content */}
      <div className='flex flex-col justify-between items-center md:flex md:flex-col md:justify-between md:min-h-full lg:max-h-screen lg:flex lg:flex-col lg:justify-between lg:mt-96'>
        <div className='flex flex-col items-center space-y-6 md:-mt-40 lg:flex lg:justify-start lg:items-center'>
          <h1 className='text-5xl md:text-5xl font-extrabold tracking-wider lg:text-8xl lg:font-semibold'>
            I'm Ajay
          </h1>
          <h6 className='text-3xl tracking-wider font-semibold lg:text-4xl '>
            Front-End Developer
          </h6>
          {/* <p className='text-xl'>Turning Ideas Into Interactive Reality</p> */}
          <div
            id='typewriter'
            className='text-blue-500 text-xl font-semibold md:text-3xl lg:text-2xl  lg:tracking-widest'
          >
            <Typewriter
              options={{
                strings: [
                  'Turning Ideas Into Interactive Reality',
                  ' Embracing Curiosity',
                  'Learning Today, Leading Tomorrow',
                  'Mastering Complexity',
                ],
                autoStart: true,
                loop: true,
                pauseFor: 1700,
                delay: 50,
                deleteSpeed: 30,
                cursor: '|',
              }}
            />
          </div>
        </div>

        <div className='invisible md:visible md:mt-44 md:flex md:flex-col md:items-center  lg:flex lg:flex-col gap-1 lg:items-center '>
          <FaChevronDown className='text-5xl animate-bounce duration-custom md:-mt-20' />
          <h2 className='text-xl p-3 bg-blue-400 rounded-full text-black font-semibold hover:cursor-pointer hover:bg-blue-600'>
            <a href='#about'>Know More</a>
          </h2>
        </div>

        <div className='min-w-full -mt-40  flex justify-center  md:flex md:justify-end md:pr-10 md:mt-1 lg:justify-end items-center lg:pr-10 '>
          <button className='text-2xl text-black italic p-2 font-semibold  bg-blue-400 rounded hover:bg-blue-600 '>
            Download Resume
          </button>
        </div>
        <div className='flex justify-center gap-4 pb-5 md:mb-48 lg:invisible '>
          {socials.map((social) => {
            const { id, url, icon } = social
            return (
              <a
                key={id}
                href={url}
                className={`text-5xl ${
                  id === 1
                    ? 'hover:text-blue-600'
                    : id === 2
                    ? 'hover:text-blue-400'
                    : id === 3
                    ? 'hover:text-blue-600'
                    : id === 4
                    ? 'hover:text-fuchsia-700'
                    : id === 5
                    ? 'hover:text-black'
                    : 'text-blue-200'
                } `}
              >
                {icon}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
