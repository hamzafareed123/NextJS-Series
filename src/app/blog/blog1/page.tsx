import Link from "next/link"

function Blog1() {
  return (
   <div className="mt-10 text-center ">
      <h1 className="text-3xl">Blog 1</h1>
       <Link href='/blog' className="text-2xl mt-5 border ">Blog</Link>
       <Link href='/blog/blog2' className="text-2xl mt-5 border ">Second Blog</Link>
        <Link href='/' className="text-2xl mt-5 ml-5 border ">Home</Link>
    </div>
  )
}

export default Blog1