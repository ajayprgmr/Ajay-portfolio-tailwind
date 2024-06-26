import SectionTitle from './SectionTitle'
import contactMe from '../assets/contact-us.jpg'

import { useState } from 'react'
import axios from 'axios' // For making HTTP requests

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Send form data to your backend or a third-party service
      await axios.post('/api/contact', formData)

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      })

      // Optionally display a success message to the user
      alert('Your message has been sent successfully!')
    } catch (error) {
      // Handle error if submission fails
      console.error('Error:', error)
      alert('Oops! Something went wrong. Please try again later.')
    }
  }

  return (
    <div className='pt-20 align-element' id='contact'>
      <SectionTitle text='Contact Me' />
      <div className='mt-10  bg-white shadow-md rounded px-8 py-6 lg:grid grid-cols-2 lg:gap-10'>
        <div className='object-contain  max-lg:hidden '>
          <img src={contactMe} alt='Contact Me image' />
          <img src={contactMe} alt='Contact Me image' />
          <img className='w-full h-20' src={contactMe} alt='Contact Me image' />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-4 '>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Your Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Your Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 h-40 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline'
              id='message'
              placeholder='Your Message....'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 min-w-[100%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
