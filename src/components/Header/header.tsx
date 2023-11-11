import React from 'react'
import Section from '../Section'

const Header = () => {
    return (
        <div className="header-height text-lg text-white bg-[rgba(var(--g-lite-color),0.1)] sticky top-0">
            <Section>
                <div className="flex flex-wrap w-full h-full justify-between items-center">
                    <span> Logo </span>
                    
                    <div className="flex flex-wrap gap-10 text-base">
                        <a href={'#'}>Home</a>
                        <a href={'#about'}>About</a>
                        <a href={'#work'}>Work</a>
                        <a href={'#'}>Experience</a>
                        <a href={'#contact'}>Contact</a>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Header