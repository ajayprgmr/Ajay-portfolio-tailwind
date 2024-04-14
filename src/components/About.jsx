import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className=' py-20 align-element ' id='about'>
      <SectionTitle text='About Me' />
      <h3 className=' border-b-2 border-gray-400  text-2xl pt-2 inline-block font-bold '>
        Education
      </h3>
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
                <span className='font-semibold'>Branch:</span> Computer Science
                and Engineering
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
              <h5 className='text-base '>PNMI College, Fazilnagar KSN U.P</h5>
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
                <span className='font-semibold '>Score:</span> 72.4%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
