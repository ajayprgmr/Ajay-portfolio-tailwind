import { useState } from 'react'
import { experience } from '../data'
import SectionTitle from './SectionTitle'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
const About = () => {
  const [activeJobId, setActiveJobId] = useState('1')
  console.log(activeJobId)
  return (
    <section className=' py-20 align-element ' id='about'>
      <SectionTitle text='About Me' />

      <div className='flex flex-col lg:grid lg:grid-cols-2'>
        <div>
          <div>
            <h3 className=' border-b-2 border-gray-400  text-2xl pt-4 inline-block font-bold '>
              Education
            </h3>
          </div>
          <div className='flex justify-start gap-4 pt-5 '>
            <div className='flex-col '>
              <div className='w-10  flex flex-col justify-start items-center'>
                <div className='bg-blue-400 w-10 h-10 rounded-full flex justify-center items-center'>
                  <span className='font-semibold'>4</span>
                </div>
                <div className='h-16 bg-black w-px'></div>
              </div>
              <div className='w-10   flex flex-col justify-start items-center'>
                <div className='bg-blue-400 w-10 h-10 rounded-full flex justify-center items-center'>
                  <span className='font-semibold'>3</span>
                </div>
                <div className='h-16 bg-black w-px'></div>
              </div>
              <div className='w-10   flex flex-col justify-start items-center'>
                <div className='bg-blue-400 w-10 h-10 rounded-full flex justify-center items-center'>
                  <span className='font-semibold'>2</span>
                </div>
                <div className='h-16 bg-black w-px'></div>
              </div>
              <div className='w-10   flex flex-col justify-start items-center'>
                <div className='bg-blue-400 w-10 h-10 rounded-full flex justify-center items-center'>
                  <span className='font-semibold'>1</span>
                </div>
              </div>
            </div>

            {/* right side education info div */}
            <div className='flex flex-col '>
              {/* Btech / Gate */}
              <div className='w-80 h-fit  flex flex-col justify-start'>
                <div className='flex-col justify-start -mt-1'>
                  <h3 className='font-semibold text-lg '>
                    Bachelor of Technology [ 2023 ]
                  </h3>
                  <h5 className='text-base '>
                    Aliah University, Kolkata, West Bengal
                  </h5>
                  <h6 className='text-sm '>
                    <span className='font-semibold'>Branch:</span> Computer
                    Science and Engineering
                  </h6>
                  <p className='text-sm'>
                    <span className='font-semibold'>CGPA:</span> 7.89
                  </p>
                </div>
              </div>
              {/* JEE Preparation */}
              <div className='w-80 h-fit mt-4 flex flex-col justify-start'>
                <div className='flex-col justify-start -mt-1'>
                  <h3 className='font-semibold text-lg '>
                    IIT-JEE / WBJEE / UPSEE [ 2019 ]
                  </h3>
                  <h5 className='text-base '>
                    <span className='font-semibold'>JEE:</span> Scored in top 20
                    percentile
                  </h5>
                  <h5 className='text-base '>
                    <span className='font-semibold'>WBJEE:</span> 3.5 RANK
                  </h5>
                </div>
              </div>
              {/* Higher Secondary */}
              <div className='w-80 h-fit mt-8  flex flex-col justify-start'>
                <div className='flex-col justify-start -mt-1'>
                  <h3 className='font-semibold text-lg '>
                    Higher Secondary [ 2017 ]
                  </h3>
                  <h5 className='text-base '>
                    PNMI College, Fazilnagar KSN U.P
                  </h5>
                  <p className='text-sm'>
                    <span className='font-semibold '>Score:</span> 72.4%
                  </p>
                </div>
              </div>
              {/*  Secondary */}
              <div className='w-80 h-fit mt-9  flex flex-col justify-start'>
                <div className='flex-col justify-start -mt-1'>
                  <h3 className='font-semibold text-lg '>Secondary [ 2015 ]</h3>
                  <h5 className='text-base '>SND IC CLG Tamkuhiraj KSN U.P</h5>
                  <p className='text-sm'>
                    <span className='font-semibold '>Score:</span> 78.89%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*experience div */}
        <div className='pt-5 lg:pt-0 '>
          <div>
            <h3 className=' border-b-2 border-gray-400  text-2xl pt-4 inline-block font-bold '>
              Experience
            </h3>
          </div>
          <div className='pt-5 flex gap-10'>
            {/* left div experience navigation bar */}
            <div className='min-w-28 flex flex-col justify-start gap-3 '>
              {experience.map((item) => {
                const { id, company } = item
                return (
                  <h4
                    key={id}
                    onClick={() => setActiveJobId(id)}
                    className={`${
                      activeJobId === id ? 'border-l-4  border-blue-500' : ''
                    } pl-5 flex justify-end items-center text-lg cursor-pointer `}
                  >
                    {company}
                  </h4>
                )
              })}
            </div>
            {/* right div of experience */}
            <div>
              {experience
                .filter((item) => item.id === activeJobId)
                .map((filteredItem) => (
                  <div key={filteredItem.id}>
                    {/* Render job title and information */}
                    <h4 className='text-lg font-semibold'>
                      {filteredItem.jobTitle}
                    </h4>
                    <h6 className='mt-2 px-2 bg-gray-300 inline-block rounded '>
                      {filteredItem.company}
                    </h6>

                    <div className=''>
                      {filteredItem.jobInfo.map((line) => {
                        return (
                          <p
                            key={line.id}
                            className='pt-2 flex justify-start items-center text-sm capitalize'
                          >
                            <MdKeyboardDoubleArrowRight className='mr-2 text-xl text-blue-500' />
                            {line.jobLine}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
