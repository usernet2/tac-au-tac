"use client"
import React, { useEffect, useState } from 'react'
import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
  openNav: () => void;
};

const Nav = ({openNav}: Props) => {
  const[Navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100){
        setNavbg(true);
      }else{
        setNavbg(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`transition-all ${Navbg? "bg-blue-950 shadow-md":"fixed"} duration-200 h-[12vh] z-[100] fixed w-full ${Navbg ? 'bg-blue-950' : 'bg-blue-950'}`}>
      <div className='flex justify-between items-center h-full w-[90%] xl:w-[80%] mx-auto'>
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 rounded-full bg-blue-800 flax items-center justify-center flex-col'>
          </div>
          <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>
            Tac au Tac
          </h1>
        </div>
        {/* Navlinks */}
        <div className='hidden lg:flex items-center space-x-10'>
          {Navlinks.map((link) => {
            return (
              <Link key={link.id} href={link.url} className='text-white hover:text-rose-500 font-semibold transition-all duration-200'>
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          {/* inscrire button */}
          <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white">S'inscrire</span>
          </a>
          {/*burger menu*/}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </div>
  )
}


export default Nav