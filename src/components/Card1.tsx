import React from 'react'

interface Card1Props {
    title: string;
    description: string;
    items: string[];
    description2: string;
    image: string;
}

const Card1: React.FC<Card1Props> = ({ title, description, description2, items, image }) => {
    return (
        <div className="flex md:flex-row mx-auto max-w-[1312px] flex-col border-[2px] border-[#E1E3E6] bg-[#F6F8FA] rounded-[6px] px-[24px] md:px-[64px] items-center justify-between gap-[155px] py-12">
            <div className="flex-1 max-w-[552px]">
                <h2 className="text-[32px] md:text-[40px] font-[500] text-[#06202E] mb-6">{title}</h2>
                <p className="text-[20px] leading-[32px] mb-[16px] text-[#4B5563]">{description}</p>
                {items.length > 0 && <ul className="list-disc pl-5 space-y-3 flex flex-col gap-[16px]">
                    {items.map((item, index) => (
                        <li key={index} className="text-[20px] text-[#4B5563]">
                            {item}
                        </li>
                    ))}
                </ul>}
                <p className="text-[20px] mt-[24px] leading-[24px] text-[#4B5563]">{description2}</p>
            </div>
            <div className="flex-1 flex justify-end">
                <img src={image} alt={title} className="w-full max-w-[552px] h-auto object-contain" />
            </div>
        </div>
    )
}

export default Card1 