import Link from "next/link"

function Blog2() {
  
  return (
   <div className="mt-10 text-center ">
      <h1 className="text-3xl">Blog 2</h1>
       <Link href='/blog' className="text-2xl mt-5 border ">Blog</Link>
       <Link href='./blog1' className="text-2xl mt-5 border ">First Blog</Link>
        <Link href='/' className="text-2xl mt-5 ml-5 border ">Home</Link>
    </div>
  )
}

export default Blog2