import { useState } from 'react'
import { links, socials } from '../data'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import title from '../assets/title.svg'
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  console.log(showLinks)
  return (
    <nav className=' shadow-lg md:flex justify-around items-center  fixed block w-full bg-blue-300'>
      <div className=' flex justify-between items-center p-3'>
        <h2 className='text-3xl tracking-wider pb-2 font-semibold '>
          <span className='font-semibold'>ajay</span>
          <span className='text-blue-600 '>_prgmr</span>
        </h2>
        {/* Hamburger menu */}
        <button className='md:hidden' onClick={toggleLinks}>
          {showLinks ? (
            <FaWindowClose className='text-4xl hover:rotate-90 ease-in-out duration-300 text-black bg-transparent ' />
          ) : (
            <FaBars className='text-4xl text-black  bg-transparent' />
          )}
        </button>
      </div>

      {/* Navigation links */}
      <div
        className={`md:flex md:justify-center md:items-center ${
          showLinks ? 'transition-custom' : 'h-0'
        } transition-custom  pb-2`}
      >
        <ul
          className={`${
            showLinks
              ? 'md:flex '
              : 'invisible md:visible md:flex md:justify-center md:items-center md:gap-3'
          } `}
        >
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  className='capitalize text-black block hover:bg-blue-600 hover:pl-7 pl-5 hover:font-semibold text-xl md:hover:bg-transparent md:hover:text-blue-600 '
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Social icons */}
      <div className='invisible  h-0 md:visible md:flex md:justify-center md:items-center md:gap-4'>
        {socials.map((social) => {
          const { id, url, icon } = social
          return (
            <a
              key={id}
              href={url}
              className={` text-blue-400 text-2xl ${
                id === 1
                  ? 'hover:text-blue-600'
                  : id === 2
                  ? 'hover:text-blue-400'
                  : id === 3
                  ? 'hover:text-blue-600'
                  : id === 4
                  ? 'hover:text-fuchsia-700'
                  : id == 5
                  ? 'hover:text-black'
                  : 'text-blue-200'
              }
'
              } md:md:text-black`}
            >
              {icon}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
