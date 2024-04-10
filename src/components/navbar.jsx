import { useState } from 'react'
import { links, socials } from '../data'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  console.log(showLinks)
  return (
    <nav className=' shadow-lg md:flex justify-around items-center bg-blue-100 fixed block w-full'>
      <div className=' flex justify-between items-center p-3'>
        {/* Title */}
        <h2 className='text-3xl tracking-wider pb-2'>
          <span className='font-semibold'>ajay</span>
          <span className='text-blue-400'>_prgmr</span>
        </h2>
        {/* Hamburger menu */}
        <button className='md:hidden' onClick={toggleLinks}>
          {showLinks ? (
            <FaWindowClose className='text-4xl hover:rotate-90 ease-in-out duration-300 text-blue-400 bg-transparent ' />
          ) : (
            <FaBars className='text-4xl  text-blue-400  bg-transparent' />
          )}
        </button>
      </div>

      {/* Navigation links */}
      <div
        className={`md:flex md:justify-center md:items-center ${
          showLinks ? 'h-full' : 'h-0'
        }   pb-2`}
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
                  className='capitalize block hover:bg-blue-200 pl-5 text-xl md:hover:bg-transparent md:hover:text-blue-400'
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Social icons */}
      <div className='invisible h-0 md:visible md:flex md:justify-center md:items-center md:gap-4'>
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
                  : 'text-blue-400'
              }
'
              }`}
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
