import hero from '../assets/hero.jpeg'
import { socials } from '../data'
import Typewriter from 'typewriter-effect'
import { FaChevronDown } from 'react-icons/fa'

const Home = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a')
    // Set the href attribute to the file URL you want to download
    link.href =
      'https://drive.google.com/file/d/1Tg4zDuHai4YboRVorJ5_hP3oSka_rjI2/view?usp=sharing'
    // Set the download attribute to specify the filename
    link.download = 'Ajay-Kushwaha-Resume.pdf'
    // Trigger the click event on the link element
    link.click()
  }
  return (
    <div className='grid grid-cols-1 bg-custom mt-20 min-h-full' id='home'>
      {/* Hero Image */}
      <div className='max-md:hidden md:flex'>
        <img
          src={hero}
          alt='hero'
          className=' h-mobile-img w-screen object-contain mt-10  opacity-20  lg:h-screen lg:object-contain'
        />
        <img
          src={hero}
          alt='hero'
          className=' h-mobile-img w-screen object-contain mt-10 opacity-75  lg:h-screen lg:object-contain lg:opacity-60'
        />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-20  md:flex md:flex-col md:justify-between md:min-h-full md:mt-[-230px] lg:max-h-screen lg:flex lg:flex-col lg:justify-between lg:mt-[-600px]'>
        <div className='flex flex-col items-start space-y-6  md:-mt-40 lg:flex lg:justify-start  '>
          <div className='pl-5 mt-10 md:z-[10]  '>
            <h1 className='text-5xl pb-4 font-bold flex justify-start md:text-6xl lg:pl-20'>
              Hello📜
            </h1>
            <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl lg:font-semibold lg:pl-20'>
              I'm Ajay Kushwaha
            </h1>
          </div>
          <h6 className=' flex justify-center min-w-full text-3xl tracking-wider font-semibold md:z-30 md:text-4xl lg:text-4xl '>
            Front-End Developer
          </h6>
          <div
            id='typewriter'
            className='text-blue-800 text-xl font-semibold flex justify-center min-w-full md:text-2xl md:z-30 lg:text-3xl  lg:tracking-widest lg:z-30'
          >
            <Typewriter
              options={{
                strings: [
                  'Turning Ideas Into Interactive Reality',
                  ' Embracing Curiosity',
                  'Learning Today, Leading Tomorrow',
                  'Mastering Complexity',
                  'Problem Solving',
                ],
                autoStart: true,
                loop: true,
                pauseFor: 1700,
                delay: 50,
                deleteSpeed: 25,
                cursor: '|',
              }}
            />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center md:mt-20 md:flex md:flex-col md:items-center  lg:flex lg:flex-col gap-2 lg:items-center lg:text-xl lg:z-50 '>
          <FaChevronDown className='text-2xl animate-bounce duration-custom md:-mt-20' />
          <h2 className='text-s inline p-2 bg-blue-400 rounded-full text-black font-semibold hover:cursor-pointer hover:bg-blue-600 '>
            <a href='#about'>Know More</a>
          </h2>
        </div>

        <div className=' absolute top-24 right-2 transition ease-in-out  md:flex md:justify-end md:pr-10 md:mt-1 lg:justify-end items-center lg:pr-10 '>
          <button
            className='text-sm text-black italic p-2 font-semibold  ml-40 bg-blue-400 rounded hover:bg-blue-600 '
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>
        <div className='flex justify-center gap-4   pb-40 md:mb-48 lg:invisible '>
          {socials.map((social) => {
            const { id, url, icon } = social
            return (
              <a
                key={id}
                href={url}
                className={`text-3xl ${
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
