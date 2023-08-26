
import Footer from '@/components/Footer/Footer'
// import Header from '@/components/Header/Header'
import Headercep from '@/components/Headercep/Headercep'
import Searchcep from '@/components/Searchcep/searchcep'
import React from 'react'

const  cep  = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Headercep/>
    <div className="flex justify-center items-center h-full bg-[rgb(27,27,27)]">
      <Searchcep />
    </div>
      <Footer/>
  </div>
  )
}

export default cep