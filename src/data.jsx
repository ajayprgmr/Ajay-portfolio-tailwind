import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { SiThealgorithms, SiTailwindcss } from 'react-icons/si'
import {
  FaInstagramSquare,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithubSquare,
} from 'react-icons/fa'
export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#contact', text: 'contact' },
]

export const socials = [
  {
    id: 1,
    url: 'https://www.facebook.com/profile.php?id=100005873025208',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/ajay-kushwaha-4ab438214/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.instagram.com/ajay_prgmr/',
    icon: <FaInstagramSquare />,
  },
  {
    id: 5,
    url: 'https://github.com/ajayprgmr',
    icon: <FaGithubSquare />,
  },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-blue-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-blue-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-blue-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Sql',
    icon: <AiOutlineConsoleSql className='h-16 w-16 text-blue-500' />,
    text: 'Advanced proficiency in SQL, crafting efficient and interactive database solutions with a robust focus on relational design and optimized query execution.',
  },
  {
    id: nanoid(),
    title: 'Data Structure & Algorithms',
    icon: <SiThealgorithms className='h-16 w-16 text-blue-500' />,
    text: 'Advanced proficiency in SQL, crafting efficient and interactive database solutions with a robust focus on relational design and optimized query execution.',
  },
  {
    id: nanoid(),
    title: 'TailWind',
    icon: <SiTailwindcss className='h-16 w-16 text-blue-500' />,
    text: 'Advanced proficiency in SQL, crafting efficient and interactive database solutions with a robust focus on relational design and optimized query execution.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
]
export const experience = [
  {
    id: '3',
    company: 'VyaparApp',
    jobTitle: 'Technical Support Engineer',
    jobInfo: [
      {
        jobLine: 'Inbound Tech Support | SAAS',
      },
      {
        jobLine: 'Demonstrated professionalism and effective',
      },
      {
        jobLine:
          'customer handling, Developed expertise in, Troubleshooting and issue resolution.',
      },
    ],
  },
  {
    id: '2',
    company: 'BigBasket',
    jobTitle: 'Web Development Intern',
    jobInfo: [
      {
        jobLine: 'Used React for developing websites Learn Git and GitHub, ',
      },
      {
        jobLine: 'CI/CD Build Footer, Stylish Nav-bar and login pages',
      },
    ],
  },
  {
    id: '1',
    company: 'GoAskNow ',
    jobTitle: 'TechniCal Content Writer',
    jobInfo: [
      {
        jobLine:
          'Research, write, and edit technical content for various subjects of computer science',
      },
      {
        jobLine:
          'few of those includes, Networking,Java, C++, Algorithms, Programming Problems',
      },
    ],
  },
]
