import React from 'react'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Featuredsection from '../components/Featuredsection'
import Banner from '../components/Banner'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Featuredsection/>
      <Banner/>
      <Testimonials/>
      <Newsletter/>

     
    </div>
  )
}

export default Home