import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Feature from './Feature/Feature'
import Temoignages from './Temoignages/Temoignages'
import Offre from './Offre/Offre'

export const Home = () => {
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
