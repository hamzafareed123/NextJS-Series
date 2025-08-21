import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-10 text-center ">
      <h1 className="text-3xl">Wellcome Home</h1>
      <div className="flex gap-5 justify-center mt-10">
      <Link href='/about'  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ">About</Link>
       <Link href='/contact'  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Contact</Link>
        <Link href='/blog' className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Blog</Link>
        <Link href='/products'  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Products</Link>
        </div>
    </div>
  );
}
