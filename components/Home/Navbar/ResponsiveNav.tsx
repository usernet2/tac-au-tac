"use client"
import React from 'react'
import Nav from './Nav'
import MobilNav from './MobilNav'
import { useState } from 'react'

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);

    const openNavHandler = () => {
        setShowNav(true);
    }

    const closeNavHandler = () => {
        setShowNav(false);
    }
  return (
    <div>
        <Nav openNav={openNavHandler} />
        <MobilNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav