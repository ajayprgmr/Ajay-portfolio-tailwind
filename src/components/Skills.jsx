import { skills } from '../data'
import SectionTitle from './SectionTitle'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <section className=' pt-20 align-element min-h-full ' id='skills'>
      <SectionTitle text='tech-stack' />
      <div className='py-16 grid gap-8 md:grid-2 lg:grid-cols-3'>
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />
        })}
      </div>
    </section>
  )
}

export default Skills
