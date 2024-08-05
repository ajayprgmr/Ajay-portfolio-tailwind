import { useEffect, useRef, useState } from 'react'
import { links, socials } from '../data'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import './navbar.css'
const Navbar = () => {
  // const [isHidden, setIsHidden] = useState(false)
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
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY
  //     console.log(scrollPosition)
  //     if (scrollPosition >= 70) {
  //       setIsHidden(true)
  //     } else {
  //       setIsHidden(false)
  //     }
  //   }
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    // <nav
    //   className={`h-20 shadow-lg  min-w-[100vw] fixed top-0 bg-blue-300   md:flex md:flex-col md:items-start justify-between lg:gap-10  lg:grid lg:grid-cols-3 lg:items-center ${
    //     isHidden ? 'opacity-0' : ''
    //   }`}
    // >
    <nav className='h-20 shadow-lg  min-w-[100vw] fixed top-0 bg-blue-300 opacity-100 z-[100]   md:flex md:flex-col md:items-start justify-between lg:gap-10  lg:grid lg:grid-cols-3 lg:items-center'>
      <div className='h-20 lg:h-20 flex justify-between items-center px-5 md:flex md:flex-col md:justify-start md:pt-1  lg:flex lg:justify-center lg:items-center'>
        <h5 className='text-2xl font-bold lowercase md:text-3xl'>
          ajay_<span className='text-blue-800 '>prgmr</span>
        </h5>
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
              : 'invisible md:visible  md:flex md:pt-2  lg:visible lg:mt-[-1px]  lg:flex lg:justify-center lg:items-center'
          } `}
        >
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  onClick={showLinks ? toggleLinks : undefined} // Conditionally add onClick event
                  className={`bg-blue-300 text-[1.1rem] capitalize text-black block pl-5 hover:bg-blue-600 hover:font-bold md:text-s md:hover:text-blue-600 md:hover:bg-transparent lg:hover:text-blue-600 lg:text-xl`}
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
