'use client'

import { useRouter } from 'next/navigation'

function OrderPlace() {
    const router = useRouter();

    const handleClikc=()=>{
        alert('order Place');
        router.push('/');
    }
  return (
    <div className='mt-8 text-2xl text-center'>
        <h1>Order placement</h1>
        <button onClick={handleClikc} className='p-2 bg-amber-500'>order place</button>
    </div>
  )
}

export default  OrderPlace