import React from 'react'

const Header = () => {
  return (
    <div className='font-serif bg-blue-300 flex justify-between px-10 py-4 text-indigo-950'>
      <a href="#" className='text-2xl font-bold'>ShopFlow</a>
      <ul className='flex gap-8'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  )
}

export default Header
