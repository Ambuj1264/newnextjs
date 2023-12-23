"use client"
import Header from '@/pages/aboutus/Header'
import SimilarEvents from '@/pages/aboutus/SimilarEvents'
import WorkSample from '@/pages/aboutus/WorkSample'
import Deatils from '@/pages/aboutus/detailspage/Deatils'
import React from 'react'

const Page = () => {
  return (
    <div>
        <Header/>
        <Deatils/>
        <WorkSample/>
        <SimilarEvents/>

    </div>
  )
}

export default Page