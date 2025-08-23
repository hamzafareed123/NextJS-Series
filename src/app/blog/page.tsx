import Link from "next/link"
import { Metadata } from "next"

export const metaData : Metadata={
  title:{
    absolute:"Blog",
  }
} 

function Blog() {

  
  return (
   <div className="mt-10 text-center ">
      <h1 className="text-3xl">Blog</h1>
       <Link href='/blog/blog1' className="text-2xl mt-5 border ">First Blog</Link>
       <Link href='/blog/blog2' className="text-2xl mt-5 border ">Second Blog</Link>
        <Link href='/' className="text-2xl mt-5 ml-5 border ">Home</Link>
    </div>
  )
}

export default Blog