import Link from "next/link"

function Contact() {
  return (
    <div className="mt-10 text-center ">
      <h1 className="text-3xl">Contact Us</h1>
       <Link href='/about' className="text-2xl mt-5 border ">About</Link>
        <Link href='/' className="text-2xl mt-5 ml-5 border ">Home</Link>
    </div>
  )
}

export default Contact