import hero from '../assets/hero.jpeg'
import { socials } from '../data'
import Typewriter from 'typewriter-effect'
import { FaChevronDown } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='min-h-screen grid grid-rows-2 bg-custom md:grid md:grid-cols-2 md:min-h-screen fit'>
      {/* Hero Image */}
      <div className='md:object-contain mt-10 '>
        <img
          src={hero}
          alt='hero'
          className='h-mobile-img object-fit w-screen object-fit md:h-full'
        />
      </div>

      {/* Content */}
      <div className='flex flex-col justify-between items-center md:min-h-screen md:mt-20 md:justify-between    '>
        <div className='flex flex-col items-center space-y-4 md:pt-20 md:space-y-6'>
          <h1 className='text-7xl font-extrabold tracking-wider md:text-8xl md:font-semibold'>
            I'm Ajay
          </h1>
          <h6 className='text-3xl tracking-wider font-semibold md:text-4xl '>
            Front-End Developer
          </h6>
          {/* <p className='text-xl'>Turning Ideas Into Interactive Reality</p> */}
          <div
            id='typewriter'
            className='text-blue-500 text-xl font-semibold md:text-2xl md:pb-20 md:tracking-widest'
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

        <div className=' invisible md:visible md:-mt-40    md:flex md:flex-col gap-1 md:items-center'>
          <FaChevronDown className='text-5xl transiton animate-bounce duration-custom  ' />
          <h2 className='text-xl p-3 bg-blue-400 rounded-full text-black font-semibold hover:cursor-pointer hover:bg-blue-600   '>
            <a href='#about'>Know More</a>
          </h2>
        </div>
        <div className='min-w-full flex justify-center pb-4 md:justify-end items-center md:pr-4'>
          <button className='text-xl text-black italic  p-2  bg-blue-400 rounded-full hover:bg-blue-600'>
            Download Resume
          </button>
        </div>
        <div className='flex justify-center gap-4 pb-5 md:invisible md:h-0 m'>
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
                }`}
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
