import { useEffect, useRef, useState } from 'react'
import { links, socials } from '../data'
import { FaBars, FaWindowClose } from 'react-icons/fa'
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const navHeight = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  useEffect(() => {
    if (showLinks) {
      navHeight.current.classList.toggle('h-60')
      navHeight.current.classList.remove('h-20')
    } else {
      navHeight.current.classList.toggle('h-20')
      navHeight.current.classList.remove('h-60')
    }
  }, [showLinks])

  return (
    <nav
      ref={navHeight}
      className=' h-20 md:h-20 lg:h-20  block  shadow-lg fixed min-w-full bg-blue-300 md:flex md:flex-col md:items-start justify-between  lg:grid lg:grid-cols-3 lg:items-center '
    >
      <div className='h-20 lg:h-20 flex justify-between items-center px-5 md:flex md:flex-col md:justify-start md:pt-1  lg:flex lg:justify-center lg:items-center'>
        <h2 className='text-2xl md:text-3xl  lg:text-4xl  tracking-wider pb-2 font-semibold '>
          <span className='font-semibold lowercase'>ajay</span>
          <span className='text-blue-600 '>_prgmr</span>
        </h2>
        {/* Hamburger menu */}
        <button className='lg:hidden md:hidden' onClick={toggleLinks}>
          {showLinks ? (
            <FaWindowClose className='text-4xl hover:rotate-90 ease-in-out duration-300 text-black bg-transparent ' />
          ) : (
            <FaBars className='text-4xl text-black  bg-transparent' />
          )}
        </button>
      </div>

      {/* Navigation links */}
      <div className=''>
        <ul
          className={`${
            showLinks
              ? 'lg:flex  md:flex md:pl-20'
              : 'invisible md:visible  md:flex md:justify-end md:items-center  lg:visible lg:flex lg:justify-center lg:items-center'
          } `}
        >
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  className='capitalize text-black block hover:pl-7 pl-5 hover:font-semibold hover:bg-blue-600 text-xl md:text-xl  lg:text-2xl lg:hover:bg-transparent lg:hover:text-blue-600 '
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Social icons */}
      <div className='invisible  lg:visible lg:flex lg:justify-center lg:items-center lg:gap-4'>
        {socials.map((social) => {
          const { id, url, icon } = social
          return (
            <a
              key={id}
              href={url}
              className={` text-blue-400 text-4xl ${
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
              } lg:lg:text-black`}
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
