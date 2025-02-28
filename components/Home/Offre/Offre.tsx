import React from 'react'

const Offre = () => {
  return (
    <div className="relative w-full md:h-[110vh] sm:h-screen">
      <div className="absolute inset-0 flex flex-col">
        {/* Top Container */}
        <div className="w-full h-[30vh]">
          <div className="flex justify-between items-center w-[100%] h-[30vh] bg-[url('/images/bg2.jpg')] bg-cover bg-center mx-auto">
            <div className='flex items-center justify-between h-full w-[90%] mx-auto'>
              <div className='ml-8'>
                <h1 className="text-white text-xl md:text-3xl lg:text-4xl mb-4 font-bold leading-[1.75rem] md:leading-[2.5rem] tracking-tighter sm:tracking-normal">
                  Transformez votre vision en <br />réalité !
                </h1>
              </div>
              <div className="flex items-center space-x-4 mr-8">
                <a href="#_" className="rounded-md px-6 py-4 m-2 overflow-hidden relative group cursor-pointer font-bold text-lg md:text-xl text-black bg-[#E6E6E6]">
                  <span className="absolute w-96 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-96 group-hover:-translate-y-48 ease"></span>
                  <span className="relative text-black transition duration-300 group-hover:text-white ease">Découvrir nos offres</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Container */}
        <div className="w-full h-[80vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-b from-[#251374] to-[#4624DA] h-full">
            <div className="w-[90%] md:w-[80%] mx-auto justify-start grid grid-cols-1 p-6">
              {/* Content for first column */}
              <h1 className='text-white text-2xl md:text-4xl lg:text-5xl mt-6 mb-1 font-bold leading-[2rem] md:leading-[3rem] tracking-tighter sm:tracking-normal'>
              Découvrez nos <br />forfaits dès <br />aujourd'hui
                </h1>
                <p className='text-white text-base md:text-xl mt-3 mb-1 tracking-tighter sm:tracking-normal'>
                Choisissez le plan qui vous convient le mieux pour <br />
                propulser votre entreprise vers le succès !
                </p>
                <h3 className='text-white text-base md:text-xl lg:text-2xl mt-1 mb-4 tracking-tighter sm:tracking-normal font-bold'>
                POUR RESERVER VOTRE ABONNEMENT 
                <br />
                MENSUEL MERCI DE NOUS CONTACTER
                <br />
                PAR MAIL 
                <br className='mb-3'/>
                tacautac.business@gmail.com
                </h3>
            </div>
            {/* Content for second column */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-8 mt-8">
                {/* Left pricing card - Standard */}
                <div className="flex flex-col bg-[#485AFF] p-6 rounded-lg items-center text-center">
                  <h3 className="text-white text-xl font-bold mt-3 mb-3">Website <br /> Pack</h3>
                  <div className="mt-3 mb-2">
                    <span className="text-white text-4xl font-bold">14€</span>
                    <span className="text-white">/mois</span>
                  </div>
                  <ul className="text-white space-y-2 text-sm mt-2 mb-8">
                    <li>CHATGPT</li>
                    <li>MIDJOUTNEY</li>
                    <li>DEEPMIND</li>
                  </ul>
                  <div className="mt-8">
                  <a href="#_" className="inline-flex items-center px-6 py-3 text-[#485AFF] bg-white rounded-md hover:bg-gray-200 hover:text-gray-600">
                      SELECTIONNER
                  </a>
                  </div>
                </div>
                {/* Right pricing card - Premium */}
                <div className="flex flex-col bg-[#FFFFFF] p-6 rounded-lg items-center text-center">
                  <h3 className="text-black text-xl font-bold mt-3 mb-3">CMS <br /> Pack</h3>
                  <div className="mt-3 mb-2">
                    <span className="text-black text-4xl font-bold">300€</span> <br />
                    <span className="text-black">/2 ans</span>
                  </div>
                  <div className="mt-2 mb-8">
                    <span className="text-black">Achat en toutes <br /> propriété Display</span>
                  </div>
                  <div className="mt-8">
                  <a href="#_" className="inline-flex items-center px-6 py-3 text-white bg-[#485AFF] rounded-md hover:bg-[#485AFF] hover:text-gray-400">
                      SELECTIONNER
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offre