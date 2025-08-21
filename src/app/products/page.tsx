import Link from 'next/link'
import React from 'react'

function ProductList() {
  return (
    <div>
        <h1><Link href='/'>Home</Link></h1>
        <h1><Link href='/products/1'>Product 1</Link></h1>
        <h1><Link href='/products/2'>Product 2</Link></h1>
        <h1><Link href='/products/3'>Product 3</Link></h1>
    </div>
  )
}

export default ProductList