import { nanoid } from 'nanoid'
export const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology',
    year: 2023,
    institution: 'Aliah University, Kolkata, West Bengal',
    branch: 'Computer Science and Engineering',
    details: '',
    cgpa: '7.89 cgpa',
  },
  {
    id: 2,
    degree: 'IIT-JEE / WBJEE / UPSEE',
    year: 2019,
    institution: 'Jupiter Institute, Patna',
    branch: '',
    details: [
      { id: 1, exam: 'JEE', score: 'Scored in top 20 percentile' },
      { id: 2, exam: 'WBJEE', score: '3.5 RANK' },
    ],
    cgpa: '',
  },
  {
    id: 3,
    degree: 'Higher Secondary',
    year: 2017,
    institution: 'PNMI College, Fazilnagar KSN U.P',
    branch: '',
    details: '',
    cgpa: '72.4%',
  },
  {
    id: 4,
    degree: 'Secondary',
    year: 2015,
    institution: 'SND IC CLG Tamkuhiraj KSN U.P',
    branch: '',
    details: '',
    cgpa: '78.89%',
  },
]

export const experience = [
  {
    id: '3',
    company: 'VyaparApp',
    jobTitle: 'Technical Support Engineer',
    from: 'Sep 2023',
    to: '',
    jobInfo: [
      { id: nanoid(), jobLine: 'Inbound Tech Support | SAAS' },
      {
        id: nanoid(),
        jobLine: 'Demonstrated professionalism and effective',
      },
      {
        id: nanoid(),
        jobLine:
          'customer handling, Developed expertise in, Troubleshooting and issue resolution.',
      },
    ],
  },
  {
    id: '2',
    company: 'BigBasket',
    jobTitle: 'Web Development Intern',
    from: 'Jul 2023',
    to: 'Sep 2023',
    jobInfo: [
      {
        id: nanoid(),
        jobLine: 'Used React for developing websites Learn Git and GitHub, ',
      },
      {
        id: nanoid(),
        jobLine: 'CI/CD Build Footer, Stylish Nav-bar and login pages',
      },
    ],
  },
  {
    id: '1',
    company: 'GoAskNow ',
    jobTitle: 'TechniCal Content Writer',
    from: 'Feb 2023',
    to: 'Jun 2023',
    jobInfo: [
      {
        id: nanoid(),
        jobLine:
          'Research, write, and edit technical content for various subjects of computer science',
      },
      {
        id: nanoid(),
        jobLine:
          'Few of those includes, Networking,Java, C++, Algorithms, Programming Problems',
      },
    ],
  },
]
