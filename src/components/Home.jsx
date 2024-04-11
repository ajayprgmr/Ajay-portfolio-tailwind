import hero from '../assets/hero.jpeg'
import { socials } from '../data'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div className='min-h-screen grid grid-rows-2 bg-custom '>
      {/* Hero Image */}
      <div className='object-contain'>
        <img
          src={hero}
          alt='hero'
          className='h-mobile-img w-screen object-fit'
        />
      </div>

      {/* Content */}
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col items-center space-y-4'>
          <h1 className='text-7xl font-extrabold tracking-wider'>I'm Ajay</h1>
          <h6 className='text-3xl tracking-wider font-semibold'>
            Front-End Developer
          </h6>
          {/* <p className='text-xl'>Turning Ideas Into Interactive Reality</p> */}
          <div id='typewriter' className='text-blue-500 text-xl font-semibold'>
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

        <div className='flex justify-center gap-4 pb-5  '>
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
