import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-10 text-center ">
      <h1 className="text-3xl">Wellcome Home</h1>
      <Link href='/about' className="text-2xl mt-20 border  ">About</Link>
       <Link href='/contact' className="text-2xl mt-5 border  ml-5">Contact</Link>
        <Link href='/blog' className="text-2xl mt-5 border  ml-5">Blog</Link>
        <Link href='/products/123' className="text-2xl mt-5 border  ml-5">Products</Link>
    </div>
  );
}
