import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className="relative w-full md:h-[110vh] sm:h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#251374] via-[#161147] to-[#070A28]">
        <div className="absolute inset-0 flex justify-start flex-col">
            <div className="w-[90%] md:w-[90%] mx-auto">
                <div className="mt-10">
                    <h1 className='text-white text-[48px] mb-4 font-[900] leading-[58.09px] tracking-[-2%] font-inter'>
                        POURQUOI CHOISIR NOS <br />SITES ? 
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6">
                        <div className="flex flex-col items-start">
                            <div className="w-full h-96 mb-4 relative">
                                <Image src="/images/about1.jpg" alt="Responsive Design" fill className="object-cover rounded-lg" />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-2">Sites clés en main</h3>
                            <p className="text-white/80 text-left">Nos sites sont conçus pour êtres opérationnels dès leur livraison,vous permettant de vous concentrer sur votre activité.</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-col items-start">
                            <div className="w-full h-96 mb-4 relative">
                                <Image src="/images/about2.jpg" alt="High Performance" fill className="object-cover rounded-lg" />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-2">Fonctionnalitées automatiques</h3>
                            <p className="text-white/80 text-left">De la mise à jour de contenu à l'integration des réseaux sociaux, prospections des réseaux sociaux</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-col items-start">
                            <div className="w-full h-96 mb-4 relative">
                                <Image src="/images/about3.jpg" alt="Security" fill className="object-cover rounded-lg" />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-2">Support Contenu</h3>
                            <p className="text-white/80 text-left">Nous offrons un support technique et une assistance client pour vous accompagner dans l'utilisation de votre site</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About