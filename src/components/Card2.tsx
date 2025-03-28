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
        <div className={`flex max-w-[644px] px-[24px]  items-center flex-col border-[2px] border-[#E1E3E6] bg-[#F6F8FA] rounded-[6px] py-[48px]  justify-between gap-[12px] ${description1 == '' ?
            "" : ''
            } `}>
            <div className="flex-1 max-w-[552px]">
                <h2 className=" text-[32px] md:text-[40px] font-[500] text-[#06202E] mb-[16px]">{title}</h2>
                <p className="text-[16px] leading-[24px] text-[#4B5563] mb-4">{description1}</p>
                <ul className="list-disc pl-5 mb-[18px] gap-[16px] space-y-3">
                    {list.map((item, index) => (
                        <li key={index} className="text-[16px] text-[#4B5563]">
                            {item}
                        </li>
                    ))}
                </ul>

                {description2 && <a href="#" className="text-[16px]  text-underline underline-offset-4 underline   mb-[80px]  mt-[32px] leading-[24px] text-[#4B5563] ">{description2}</a>}
            </div>
            <div className="flex-1 flex  justify-end">
                <img src={image} alt={title} className="w-full max-w-[477px] h-auto object-contain" />
            </div>
        </div>
    )
}

export default Card2