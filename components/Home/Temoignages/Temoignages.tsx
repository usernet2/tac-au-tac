import React from 'react'

const Temoignages = () => {
  return (
    <div className="relative w-full md:h-[55vh] sm:h-screen bg-[#070A28]">
           <div className="absolute inset-0 flex justify-start flex-col">
           <div className="w-[90%] md:w-[90%] mx-auto">
            <div className="mt-10">
                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl mb-4 font-bold leading-[2rem] md:leading-[3rem] tracking-tighter sm:tracking-normal">
                    Temoignages
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#53389E] rounded-lg" >
                <div className="bg-[#180959] p-6 rounded-lg flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="text-white/80 font-['Inter'] text-[24px] font-medium leading-[36px] tracking-[0%]">"Mon sites marche parfaitement bien"</p>
                    </div>
                    <div className="flex items-center space-x-3 mt-8">
                        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-white font-medium">Jean Dupont</span>
                    </div>
                </div>
                <div className="bg-[#180959] p-6 rounded-lg flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="text-white/80 font-['Inter'] text-[24px] font-medium leading-[36px] tracking-[0%]">"Les fonctionalités prédéfinit facilite mon travail "</p>
                    </div>
                    <div className="flex items-center space-x-3 mt-8">
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-white font-medium">Marie Martin</span>
                    </div>
                </div>
                <div className="bg-[#180959] p-6 rounded-lg flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="text-white/80 font-['Inter'] text-[24px] font-medium leading-[36px] tracking-[0%]">"Je gère mieux mon entreprise "</p>
                    </div>
                    <div className="flex items-center space-x-3 mt-8">
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-white font-medium">Pierre Dubois</span>
                    </div>
                </div>
            </div>
           </div>
           </div>
    </div>
  )
}

export default Temoignages