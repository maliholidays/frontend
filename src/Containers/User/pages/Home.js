import React from 'react'
import Banner from '../components/Home/Banner/Banner'
import About from '../components/Home/About/About'
import Newsletter from '../components/Home/Newsletter/Newsletter'
import Search from '../components/Home/Search/Search'
import Testimonials from '../components/Home/Testimonials/Testimonials'

function Home() {
  return (
    <div className="Home">
        <Banner/>
        <About/>
        <Search/>
        <Testimonials/>
        <Newsletter/>
    </div>
  )
}

export default Home