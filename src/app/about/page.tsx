import React from 'react'
import Link from "next/link"

function About() {
  return (
   <div className="mt-10 text-center ">
      <h1 className="text-3xl">About Us</h1>
      <div className='flex justify-center mt-10 gap-5'>
      <Link href='/'  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Home</Link>
        <Link href='/contact'  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Contact</Link>
        </div>
    </div>
  )
}

export default About