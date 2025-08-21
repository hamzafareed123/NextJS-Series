import Link from "next/link"
import { Metadata } from "next"

type Props = {
  params: {
    productID: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Product ${params.productID}`,
  }
}

function ProductDetail({ params }: Props) {
  return (
    <div className="mt-10 text-center ">
      <h1 className="text-3xl">Product Detail {params.productID}</h1>
      <Link href="/" className="text-2xl mt-5 ml-5 border">
        Home
      </Link>
    </div>
  )
}

export default ProductDetail
