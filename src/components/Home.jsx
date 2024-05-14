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
    <div
      className=' bg-custom min-h-[60vh]  grid grid-rows-2 md:grid md:grid-rows-3 lg:max-h-screen lg:grid-cols-2 border-4 '
      id='home'
    >
      {/* Hero Image */}
      <div className='invisible md:visible md:mt-20 md:h-tab-img  lg:mt-[30px]  '>
        <img
          src={hero}
          alt='hero'
          className='mt-20 md:-mt-10 h-mobile-img w-screen lg:h-[100vh] lg:object-contain'
        />
      </div>

      {/* Content */}
      <div className='flex flex-col justify-between  mt-[-300px] pl-5   md:flex md:flex-col md:justify-between md:min-h-full lg:max-h-screen lg:flex lg:flex-col lg:justify-between lg:mt-72'>
        <div className='flex flex-col items-start space-y-6  md:-mt-40 lg:flex lg:justify-start  '>
          <div className='flex  flex-col justify-start items-start '>
            <h1 className='text-5xl pb-4 font-bold flex justify-start '>
              Hello
            </h1>
            <h1 className='text-3xl font-bold md:text-5xl   lg:text-6xl lg:font-semibold'>
              I'm Ajay Kushwaha
            </h1>
          </div>
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

        <div className='flex flex-col justify-center items-center md:mt-44 md:flex md:flex-col md:items-center  lg:flex lg:flex-col gap-1 lg:items-center '>
          <FaChevronDown className='text-5xl animate-bounce duration-custom md:-mt-20' />
          <h2 className='text-xl inline p-3 bg-blue-400 rounded-full text-black font-semibold hover:cursor-pointer hover:bg-blue-600 '>
            <a href='#about'>Know More</a>
          </h2>
        </div>

        <div className='min-w-full   flex justify-center  md:flex md:justify-end md:pr-10 md:mt-1 lg:justify-end items-center lg:pr-10 '>
          <button
            className='text-2xl text-black italic p-2 font-semibold  ml-40 bg-blue-400 rounded hover:bg-blue-600 '
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>
        <div className='flex justify-center gap-4  pb-40 md:mb-48 lg:invisible '>
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
