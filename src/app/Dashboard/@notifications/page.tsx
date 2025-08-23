import React from 'react'
import Card from '@/components/card'
import Link from 'next/link'

function Notifcations() {
  return (
    <>
    <h1 className='text-center text-3xl mt-10'>Notificaton Dahboard</h1>
    <Link href='/Dashboard/archived' className='mt-20 text-xl text-blue-500 text-center'>Archived Notification</Link>
    </>
  )
}

export default Notifcations