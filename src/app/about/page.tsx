import React from 'react'
import Link from "next/link"

function About() {
  return (
   <div className="mt-10 text-center ">
      <h1 className="text-3xl">About Us</h1>
      <Link href='/' className="text-2xl mt-5 border ">Home</Link>
        <Link href='/contact' className="text-2xl mt-5 ml-5 border">Contact</Link>
    </div>
  )
}

export default About