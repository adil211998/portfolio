import React from 'react'
import Section from '../Section'

const About = () => {
    return (
        <section id="about" className="fit-height flex items-center snap-center">
            <Section>
                <div className="py-10 pt-20">
                    <p className='text-gray-100 mb-2 heading-text'>About</p>
                    <h2 className="text-4xl text-white font-bold uppercase heading-text half-underline">Objective</h2>
                </div>
                <div className="pb-10 h-full m-auto">
                    <p className="text-2xl text-white leading-9 my-5 italic">I am a full stack web developer and working with multiple languages in web development. I utilize my expereince in developing and maintaining applications, while enhancing technical skills and contribute to the organization growth. My goal is to provide high quality applications by contributing my experties and skills.</p>
                    <p className="text-2xl text-white leading-9 my-5 italic flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <a href='mailto:example@domain.com'>example@domain.com</a>
                    </p>
                    <p className="text-2xl text-white leading-9 my-5 italic flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <a href='tel:+92 300 1234567'>+92 300 1234567</a>
                    </p>
                </div>
            </Section>
        </section>
    )
}

export default About