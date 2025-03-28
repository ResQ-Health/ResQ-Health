import React from 'react'

interface CardProps {
    number: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ number, title, description }) => {
    return (
        <div className="flex flex-col w-auto md:w-[310px] md:rounded-none rounded-[6px] items-start gap-[2px] p-[13px] bg-white  shadow-[-1px_2px_1px_rgba(0,0,1,0.1)] md:shadow-[-1px_0_1px_rgba(0,0,0,0.1)]">
            <div className="full flex items-center justify-center">
                <span className="text-[#06202E] text-[16px] font-[600]">{number}</span>
            </div>
            <h3 className="text-[20px] font-semibold text-[#06202E]">{title}</h3>
            <p className="text-[16px] leading-[24px] text-[#4B5563]">{description}</p>
        </div>
    )
}

export default Card