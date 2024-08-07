import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'project' })
      const projects = response.items.map((item) => {
        const { title, url, image, gitHub } = item.fields
        console.log(gitHub)
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { id, title, url, img, gitHub }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData() // Call getData when the component mounts
  }, [])

  return { loading, projects } // Return loading state and fetched projects
}

export default useFetchProjects
