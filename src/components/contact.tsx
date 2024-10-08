import React from 'react'
import Section from './Section'
import { EarthCanvas } from './Canvas'
import emailjs from "emailjs-com"

const Contact = () => {

    const submitForm = (e: any) => {
        e.preventDefault();

        emailjs.sendForm(process.env.EmailJSService ?? 'service_enjbg5e', process.env.YOUR_TEMPLATE_ID ?? 'template_t7noeld', e.target, process.env.YOUR_USER_ID ?? 'qur657WDg94RW46dw')
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        // <section id="contact" className="fit-height snap-center relative flex flex-wrap items-center">
        <section id="contact" className="fit-height relative flex flex-wrap items-center py-10">
            <Section>
                <div className="py-10 pt-20">
                    <p className='text-gray-100 mb-2 heading-text'>Contact</p>
                    <h2 className="text-4xl text-white font-bold uppercase heading-text half-underline">Get a Quote</h2>
                </div>
                <div className="grid grid-cols-2">
                    <form onSubmit={submitForm}>
                        <input type="text" name="from_name" className="w-full py-4 px-4 rounded-2xl bg-black text-white border border-[#595959] outline-[rgb(var(--black-color))] my-2 placeholder-[rgba(199,199,199,1)]" placeholder="Name" id="from_name" />
                        <input type="email" name="from_email" className="w-full py-4 px-4 rounded-2xl bg-black text-white border border-[#595959] outline-[rgb(var(--black-color))] my-2 placeholder-[rgba(199,199,199,1)]" placeholder="Email" id="from_email" />
                        <input type="text" name="subject" className="w-full py-4 px-4 rounded-2xl bg-black text-white border border-[#595959] outline-[rgb(var(--black-color))] my-2 placeholder-[rgba(199,199,199,1)]" placeholder="Subject" id="subject" />
                        <textarea name="message" className="w-full py-4 px-4 rounded-2xl bg-black text-white border border-[#595959] outline-[rgb(var(--black-color))] my-2 placeholder-[rgba(199,199,199,1)]" id="" cols={30} rows={8} placeholder="Write your message ..."></textarea>

                        <button type="submit" className="px-8 py-2 text-lg font-normal text-white shadow-lg border border-[#595959] bg-[rgb(255,255,255,0.1)] hover:bg-[rgba(255,255,255,1)] hover:text-black transition-all duration-300 rounded-xl">Submit</button>
                    </form>
                    <div>
                        {/* World Round */}
                        <EarthCanvas />
                    </div>
                </div>

                {/* Scroll Down arrow button */}
                <span className="absolute bottom-[30%] right-[1rem] translate-y-1/2 text-white flex items-center rotate-90 cursor-pointer select-none"
                    onMouseEnter={() => {
                        if(!document.querySelector("#scroll-top-arrow-svg")?.classList.contains('-translate-x-1'))
                        {
                            document.querySelector("#scroll-top-arrow-svg")?.classList.add("-translate-x-1")
                        }
                    }}

                    onMouseLeave={() => {
                        if(document.querySelector("#scroll-top-arrow-svg")?.classList.contains('-translate-x-1'))
                        {
                            document.querySelector("#scroll-top-arrow-svg")?.classList.remove("-translate-x-1")
                        }
                    }}

                    onClick={() => {
                        document.querySelector('#main-container')?.scrollTo(0, 0)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-all duration-300" id='scroll-top-arrow-svg'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span className="font-medium uppercase text-sm ml-2" style={{letterSpacing: "3px"}}>Scroll To Top</span>
                </span>
            </Section>
        </section>
    )
}

export default Contact