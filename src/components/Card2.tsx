import React from 'react'

interface Card2Props {
    title: string;
    description1: string;
    description2: string;
    list: string[];
    image: string;
}

const Card2: React.FC<Card2Props> = ({ title, description1, description2, list, image }) => {
    return (
        <div className="flex max-w-[644px] px-[24px] h-[932px] items-center flex-col border-[2px] border-[#E1E3E6] bg-[#F6F8FA] rounded-[6px]  justify-between gap-[110px] py-[64px]">
            <div className="flex-1 max-w-[552px]">
                <h2 className=" text-[32px] md:text-[40px] font-[500] text-[#06202E] mb-6">{title}</h2>
                <p className="text-[16px] leading-[24px] text-[#4B5563] mb-4">{description1}</p>
                <ul className="list-disc pl-5 space-y-3">
                    {list.map((item, index) => (
                        <li key={index} className="text-[16px] text-[#4B5563]">
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[16px] mt-[32px] leading-[24px] text-[#4B5563] mb-6">{description2}</p>
            </div>
            <div className="flex-1 flex  justify-end">
                <img src={image} alt={title} className="w-full max-w-[477px] h-auto object-contain" />
            </div>
        </div>
    )
}

export default Card2