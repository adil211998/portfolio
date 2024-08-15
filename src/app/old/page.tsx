"use client"

import { StarCanvas } from '@/components/Canvas'
import Header from '@/components/Header/header'
import Section from '@/components/Section'
import Contact from '@/components/contact'
import Work from '@/components/work'

export default function Old() {
    return (
        <div className="snap-y snap-mandatory scroll-smooth overflow-y-auto h-screen">
            <Header />
            
            <main className="flex fit-height flex-col items-center justify-center p-24 snap-center">
                {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                </div> */}
                {/* <div className="before:absolute before:top-[5rem] before:right-1 before:h-[300px] before:w-[300px] before:bg-[rgba(209,232,226,0.5)] before:blur-3xl"></div> */}
                <h2 className="text-7xl text-white font-bold uppercase heading-text">Hi, This is a website</h2>
                <p className="text-4xl text-gray-50 italic my-4 heading-text">You can approch us easily.</p>
                <p className="max-w-[900px] text-center my-4 text-gray-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, est officia tempora repudiandae aut ut, similique, incidunt exercitationem quasi perspiciatis laborum quaerat quam eius ipsa in ratione nulla! Nostrum, commodi?</p>
                <button className="px-8 py-2 rounded-full text-lg text-white bg-[rgb(var(--g-color))] transition-all duration-300 hover:bg-[rgba(var(--g-color),0.25)] my-4 flex items-center">Find a way 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </main>

            <section id="about" className="fit-height flex items-center snap-center">
                <Section>
                    <div className="pb-10 pt-20 max-w-[900px] h-full m-auto text-center">
                        <h2 className="text-6xl text-white font-bold uppercase mb-10 heading-text">About</h2>
                        <p className="text-2xl text-white leading-9 my-5 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit earum tempore eveniet praesentium vero! Exercitationem accusantium ipsum pariatur nesciunt, aperiam, inventore hic corporis iste architecto tempore quidem error. Facilis.</p>
                        <p className="text-2xl text-white leading-9 my-5 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel ipsam sint esse, natus voluptates officia necessitatibus quisquam quam ad? Explicabo, iste! Voluptate, doloremque! Est reiciendis laudantium officia nisi corrupti?</p>

                        <p className="text-2xl text-white leading-9 my-5 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel ipsam sint esse, natus voluptates officia necessitatibus quisquam quam ad? Explicabo, iste! Voluptate, doloremque! Est reiciendis laudantium officia nisi corrupti?</p>
                    </div>
                </Section>
            </section>

            <section id="work" className="fit-height snap-start">
                <Work />
            </section>

            <section id="contact" className="fit-height snap-center">
                <Contact />
            </section>

            <StarCanvas />
        </div>
    )
}
