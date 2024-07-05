import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-10">
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Have questions, feedback, or just want to say hello? Feel free to reach out!
        </p>
        <ul className="mt-4 font-semibold text-white">
          <li>Email: <a href="mailto:contact@example.com" className="text-blue-500"> mohitkunwar443@gmail.com</a></li>
          <li>linkedin: <span className="text-blue-500"> linkedin.com/in/mohit-kunwar-92b8b0267</span></li>
    
        </ul>
      </div>
    </div>
    </>
  )
}

export default Contact