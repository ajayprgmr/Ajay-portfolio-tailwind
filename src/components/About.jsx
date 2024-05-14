import { experience, education } from '../assets/about'
import SectionTitle from './SectionTitle'
import { MdOutlineDone } from 'react-icons/md'

const About = () => {
  return (
    <section className='py-20 align-element' id='about'>
      <SectionTitle text='About Me' />

      <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-40'>
        <div className='flex flex-col justify-start items-start gap-4'>
          <div>
            <h3 className='border-b-2 border-blue-400 text-2xl pt-4 inline-block font-bold'>
              Education
            </h3>
          </div>
          <ol className='relative border-l-2  border-blue-700 dark:border-blue-700'>
            {education.map((item) => {
              const { id, degree, year, institution, branch, details, cgpa } =
                item
              return (
                <li
                  className='mb-5 ms-5 flex flex-col  justify-start '
                  key={id}
                >
                  <div className='absolute w-5 h-5 bg-blue-200 rounded-full left-[-10px]  border border-white dark:border-blue-900 dark:bg-blue-400 flex justify-center items-center'>
                    <MdOutlineDone />
                  </div>
                  <time className='text-sm font-normal leading-none'>
                    {year}
                  </time>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {degree}
                  </h3>
                  <h4 className='text-sm font-medium text-gray-900'>
                    {institution}
                  </h4>
                  <p className=' text-base font-normal text-gray-500'>
                    {branch}
                  </p>
                  <p className=' text-base font-normal text-gray-500'>
                    {cgpa && <span> Score: {cgpa}</span>}
                  </p>

                  {Array.isArray(details) &&
                    details.map((subitem) => {
                      const { id: subId, exam, score, rank } = subitem
                      return (
                        <div key={subId} className=''>
                          <p className='text-base font-normal text-gray-500'>
                            {`${exam}: ${score || rank}`}
                          </p>
                        </div>
                      )
                    })}
                </li>
              )
            })}
          </ol>
        </div>
        {/* Experience Section */}
        {/* Add your experience rendering code here */}
        <div className='flex flex-col justify-start items-start gap-4'>
          <div>
            <h3 className='border-b-2 border-blue-400 text-2xl pt-4 inline-block font-bold'>
              Experience
            </h3>
          </div>
          <ol className='relative border-l-2  border-blue-700 dark:border-blue-700'>
            {experience.map((job) => {
              const { id, company, jobTitle, from, to, jobInfo } = job
              return (
                <li className='mb-5 ms-5 flex flex-col justify-start' key={id}>
                  <div className='absolute w-5 h-5 bg-blue-200 rounded-full left-[-10px]  border border-white dark:border-blue-900 dark:bg-blue-400 flex justify-center items-center'>
                    <MdOutlineDone />
                  </div>
                  <h1 className='text-xl font-bold pb-2  '>{company}</h1>
                  <h3 className='font-semibold pb-1'>{jobTitle}</h3>
                  <time className='inline text-sm font-semibold text-gray-600'>{`${from} - ${to}`}</time>
                  <ul>
                    {jobInfo.map((info) => (
                      <div key={info.id} className='pl-4'>
                        <li className='list-disc text-xs  flex-auto '>
                          {info.jobLine}
                        </li>
                      </div>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default About
