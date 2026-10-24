import React from 'react'

const Footer = () => {
  return (
    <div className='font-serif bg-blue-300 flex justify-between px-10 py-4 text-indigo-950'>
      <a href="#" className='text-2xl font-bold'>ShopFlow</a>
      <div className='flex gap-4'>
        <a href='#'>Instgram</a>
        <a href='#'>Facebook</a>
        <a href='#'>Email</a>
      </div>
      <p>© {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
