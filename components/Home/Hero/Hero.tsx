import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen bg-[url('/images/bg1.jpg')] bg-cover bg-center mt-[12vh]">
        <div className="absolute inset-0 flex justify-center flex-col ">
            <div className="w-[90%] md:w-[80%] mx-auto itels-center grid grid-cols-1">
                <h1 className='text-white text-3xl md:text-5xl lg:text-6xl mt-6 mb-4 font-bold leading-[2.5rem] md:leading-[3.5rem] tracking-tighter sm:tracking-normal'>
                    BIENVENU SUR TAC AU TAC  
                    <br className='mb-4' /> 
                    BUSINESS 
                </h1>
                <p className='text-white text-2xl md:text-4xl lg:text-5xl mt-4 mb-6 tracking-tighter sm:tracking-normal'>
                    Votre partenaire idéal pour des 
                    <br className='mb-4' /> 
                    solutions web clé en main, prêtes à l'emploi
                </p>
                <div>
                    <a href="#_" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                        {/* Top glass gradient */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* Bottom gradient */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* Left gradient */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* Right gradient */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative tracking-tighter sm:tracking-normal">Acheter Maintenant</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero