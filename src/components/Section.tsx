import React from 'react'

interface ISection {
    children: React.ReactNode
    className?: string
}

const Section = ({children, className}:ISection) => {
    return (
        <div className={`max-w-[1280px] w-full h-full m-auto ${className}`}>{children}</div>
    )
}

export default Section