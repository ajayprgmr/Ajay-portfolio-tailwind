import hero from '../assets/hero.jpeg'
import { socials } from '../data'
import './Navbar.css'

const Home = () => {
  return (
    <div className='min-h-screen grid grid-row-2'>
      {/* Hero Image */}
      <div className='flex-grow'>
        <img src={hero} alt='hero' />
      </div>
      {/* Content */}
      <div className='bg-blue-100  flex flex-col justify-start items-center '>
        <div className='flex flex-col items-center space-y-2'>
          <h1 className='text-5xl font-extrabold tracking-wider'>I'm Ajay</h1>
          <h6 className='text-2xl tracking-wider'>Front-End Developer</h6>
          <p className='tracking-wider'>
            Turning Ideas Into Interactive Reality
          </p>
        </div>
        <div className='flex justify-center space-x-4 py-20'>
          {socials.map((social) => {
            const { id, url, icon } = social
            return (
              <a
                key={id}
                href={url}
                className={`text-blue-400 text-2xl ${
                  id === 1
                    ? 'hover:text-blue-600'
                    : id === 2
                    ? 'hover:text-blue-400'
                    : id === 3
                    ? 'hover:text-blue-600'
                    : id === 4
                    ? 'hover:text-fuchsia-700'
                    : 'text-blue-400'
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
