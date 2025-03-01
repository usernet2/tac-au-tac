import { companylink, legallink, productlink, ressourceslink, sociallink } from '@/constant/constant'
import React from 'react'

const Footer = () => {
  return (
    <div className="relative w-full md:h-[80vh] sm:h-screen bg-[#251374]">
         <div className="absolute inset-0 flex justify-start flex-col">
            <div className="w-[90%] h-[55vh] flex justify-between items-center grid grid-cols-7 mx-auto mt-16">
                <div className="h-full col-span-2">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl mb-4 leading-[2.5rem] md:leading-[3.5rem] tracking-tighter sm:tracking-normal">
                    Vos sites <br /> clés en <br /> mains avec <br /> nous !
                    </h1>
                </div>
                <div className="h-full">
                    <h2 className="text-white text-xl font-semibold mb-4">Produit</h2>
                    <ul className="space-y-3">
                        {productlink.map((link) => (
                            <li key={link.id}>
                                <a href={link.url} className="text-gray-300 hover:text-white">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-full">
                    <h2 className="text-white text-xl font-semibold mb-4">Company</h2>
                    <ul className="space-y-3">
                        {companylink.map((link) => (
                            <li key={link.id}>
                                <a href={link.url} className="text-gray-300 hover:text-white">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-full">
                    <h2 className="text-white text-xl font-semibold mb-4">Ressources</h2>
                    <ul className="space-y-3">
                        {ressourceslink.map((link) => (
                            <li key={link.id}>
                                <a href={link.url} className="text-gray-300 hover:text-white">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-full">
                    <h2 className="text-white text-xl font-semibold mb-4">Social</h2>
                    <ul className="space-y-3">
                        {sociallink.map((link) => (
                            <li key={link.id}>
                                <a href={link.url} className="text-gray-300 hover:text-white">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-full">
                    <h2 className="text-white text-xl font-semibold mb-4">Legal</h2>
                    <ul className="space-y-3">
                        {legallink.map((link) => (
                            <li key={link.id}>
                                <a href={link.url} className="text-gray-300 hover:text-white">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-full h-[20vh] bg-[#101828] flex justify-between items-center px-8 mb-6">
                <div className="text-white text-lg">
                    © 2025 Tac au Tac Busines.
                </div>
                <div className="flex space-x-6">
                    <svg className="w-6 h-6 text-white cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <svg className="w-6 h-6 text-white cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <svg className="w-6 h-6 text-white cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <svg className="w-6 h-6 text-white cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <svg className="w-6 h-6 text-white cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.5 0C7.6 0 2 5.6 2 12.5c0 5.7 3.8 10.5 9 12v-2.2c-.6.1-.7-.3-.7-.6v-1.1c0-.5-.2-1-.4-1.2-.3-.2-.5-.5-.5-.8 0-.3.3-.6.6-.6.9 0 1.6.9 1.6 2 0 .7-.2 1.3-.6 1.7-.4.5-.9.7-1.5.7s-1.1-.2-1.5-.7c-.4-.4-.6-1-.6-1.7 0-1.1.7-2 1.6-2 .3 0 .6.3.6.6 0 .3-.2.6-.5.8-.2.2-.4.7-.4 1.2v1.1c0 .3-.1.7-.7.6v2.2c5.2-1.5 9-6.3 9-12C27 5.6 21.4 0 14.5 0zm0 23c-5.8 0-10.5-4.7-10.5-10.5S8.7 2 14.5 2 25 6.7 25 12.5 20.3 23 14.5 23z"/>
                    </svg>
                    <svg className="w-6 h-6 text-white cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 0 0-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 0 1 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 0 0-3.488-5.438A9.894 9.894 0 0 1 12 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 0 1 3.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 0 1 5.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 0 1 2.087 12zm3.829 7.02c1.969-3.088 4.482-5.098 7.598-6.027a39.137 39.137 0 0 1 2.043 7.46c-3.349 1.291-6.953.666-9.641-1.433zm11.586.43a41.098 41.098 0 0 0-1.92-7.016c1.876-.265 3.94-.196 6.199.196a9.923 9.923 0 0 1-4.279 6.82z"/>
                    </svg>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Footer