import React from 'react'
import Hero from '../Hero'
import Service from '../Service'
import Faq from '../Faq'
import Blog from '../Blog'
import Feature from '../Feature/Feature'
import ModelsPage from '../ModelsPage'
import Professionpage from '../ProessionPage/components/Professionpage'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Feature/>
      <Service />
      <Blog/>
      <Faq />
      
    </div>
  )
}

export default Homepage
