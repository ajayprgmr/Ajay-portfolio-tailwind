import { useRef, useState } from 'react'
import { links, socials } from '../data'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import ajay_prgmr from '../assets/ajay_prgmr.svg'
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const navLinksRef = useRef(null)
  const navLinksContainer = useRef(null)
  console.log(`links:${navLinksRef}`)
  console.log(`linksContainer:${navLinksContainer}`)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  const heightStyle = showLinks
    ? `${navLinksRef.current.getBoundingClientRect().height}px`
    : '0px'

  console.log(heightStyle)
  return (
    <nav className='h-20  shadow-lg fixed min-w-[100vw] bg-blue-300   md:flex md:flex-col md:items-start justify-between lg:gap-10  lg:grid lg:grid-cols-3 lg:items-center '>
      <div className='h-20 lg:h-20 flex justify-between items-center px-5 md:flex md:flex-col md:justify-start md:pt-1  lg:flex lg:justify-center lg:items-center'>
        <img
          src={ajay_prgmr}
          alt='ajay_prgmr'
          className='pb-5 ml-[-12px] w-40  md:mt-[-30px] md:w-48 lg:pt-[20px] lg:w-56   '
        />
        {/* Hamburger menu */}
        <button className='lg:hidden md:hidden' onClick={toggleLinks}>
          {showLinks ? (
            <FaWindowClose className='text-2xl hover:rotate-90 ease-in-out duration-300 text-black bg-transparent mr-5 ' />
          ) : (
            <FaBars className='text-2xl text-black  bg-transparent mr-5' />
          )}
        </button>
      </div>

      {/* Navigation links */}
      <div className={`h-${heightStyle} `} ref={navLinksContainer}>
        <ul
          ref={navLinksRef}
          className={`${
            showLinks
              ? ' md:flex  lg:flex lg:justify-center lg:items-center'
              : 'invisible md:visible  md:flex md:mt-[-30px] md:pl-2  lg:visible lg:mt-[-1px]  lg:flex lg:justify-center lg:items-center'
          } `}
        >
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  onClick={showLinks ? toggleLinks : undefined} // Conditionally add onClick event
                  className={`bg-blue-300 capitalize text-black block pl-5 hover:bg-blue-600 text-l md:text-xl md:hover:text-blue-600 md:hover:bg-transparent lg:hover:text-blue-600`}
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
