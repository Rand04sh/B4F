import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Main from '../Component/Main'

const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-between '>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
