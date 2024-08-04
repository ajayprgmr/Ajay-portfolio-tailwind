import useFetchProjects from './fetchProjects'
import SectionTitle from './SectionTitle'
import './projects.css'

const Project = () => {
  const { loading, projects } = useFetchProjects()

  if (loading) {
    return (
      <section className='projects'>
        <h2>Loading...</h2>
      </section>
    )
  }

  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='Web Creations' />
      <div>
        <div className='projects-center'>
          {projects.map((project) => {
            const { id, title, url, img, gitHub } = project
            return (
              <a
                key={id}
                href={url}
                target='_blank'
                rel='noreferrer'
                className='project'
              >
                <img src={img} alt={title} className='img' />
                <div className='project-info'>
                  <a href={url}>Go Live</a>
                  <a href={gitHub}>GitHub</a>
                </div>
                <h5>{title}</h5>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Project
