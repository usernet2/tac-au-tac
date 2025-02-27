import React from 'react'
import { serviceL, serviceR } from '../../../constant/constant'

const Feature = () => {
  return (
    <div className="relative w-full md:h-[110vh] sm:h-screen bg-gradient-to-b from-[#4624DA] to-[#251374]">
        <div className="absolute inset-0 flex justify-start flex-col">
            <div className="w-[90%] md:w-[90%] mx-auto">
                <div className="mt-10">
                    <h1 className='text-white text-2xl md:text-4xl lg:text-5xl mb-4 font-bold leading-[2rem] md:leading-[3rem] tracking-tighter sm:tracking-normal'>
                        Fonctionnalités  
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6">
                        <div className="flex flex-col items-start">
                            <ul className="text-white/80 space-y-3">
                                {serviceL.map((service) => (
                                    <li key={service.id} className="flex items-center">
                                        {service.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-col items-start">
                            <ul className="text-white/80 space-y-3">
                                {serviceR.map((service) => (
                                    <li key={service.id} className="flex items-center">
                                        {service.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature