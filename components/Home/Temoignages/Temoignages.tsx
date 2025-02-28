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
                        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                            <img src="/avatar1.jpg" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-white font-medium">Jean Dupont</span>
                    </div>
                </div>
                <div className="bg-[#180959] p-6 rounded-lg flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="text-white/80 font-['Inter'] text-[24px] font-medium leading-[36px] tracking-[0%]">"Les fonctionalités prédéfinit facilite mon travail "</p>
                    </div>
                    <div className="flex items-center space-x-3 mt-8">
                        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                            <img src="/avatar2.jpg" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-white font-medium">Marie Martin</span>
                    </div>
                </div>
                <div className="bg-[#180959] p-6 rounded-lg flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="text-white/80 font-['Inter'] text-[24px] font-medium leading-[36px] tracking-[0%]">"Je gère mieux mon entreprise "</p>
                    </div>
                    <div className="flex items-center space-x-3 mt-8">
                        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                            <img src="/avatar3.jpg" alt="Avatar" className="w-full h-full object-cover" />
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