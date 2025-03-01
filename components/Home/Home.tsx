import React from 'react'
import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('./Hero/Hero'))
const About = dynamic(() => import('./About/About'))
const Feature = dynamic(() => import('./Feature/Feature'))
const Temoignages = dynamic(() => import('./Temoignages/Temoignages'))
const Offre = dynamic(() => import('./Offre/Offre'))

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Feature />
      <Temoignages />
      <Offre />
    </div>
  )
}
export default Home;
