
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Searchcep from '@/components/Searchcep/searchcep'
import React from 'react'

const  cep  = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header/>
    <div className="flex justify-center items-center h-full">
      <Searchcep />
    </div>
      <Footer/>
  </div>
  )
}

export default cep