import React from 'react'

interface Card2Props {
    title: string;
    description1: string;
    description2: string;
    list: string[];
    image: string;
}

const Card2: React.FC<Card2Props> = ({ title, description1, description2, list, image }) => {

    const handleWhatsAppClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const phoneNumber = "+2347068393906";
        const message = "Hi, I want to book a test with ResQ. Can you help me with the next steps?";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className={`flex w-full px-[24px]  items-center flex-col border-[2px] border-[#E1E3E6] bg-[#F6F8FA] rounded-[6px] py-[48px]  justify-between gap-[12px] ${description1 == '' ?
            "" : ''
            } `}>
            <div className="flex-1 max-w-[552px]">
                <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-[500] text-[#06202E] mb-[16px]">{title}</h2>
                <p className="text-[16px] leading-[24px] text-[#4B5563] mb-4">{description1}</p>
                <ul className="list-disc pl-5 mb-[18px] gap-[16px] flex flex-col space-y-[16px]">
                    {list.map((item, index) => (
                        <li key={index} className="text-[16px] mb-0 pb-0 leading-[24px] md:leading-[32px] text-[#4B5563]">
                            {item}
                        </li>
                    ))}
                </ul>

                {description2 && <a href="#" onClick={handleWhatsAppClick} className="text-[16px] text-underline underline-offset-4 underline mb-[80px] mt-[32px] leading-[24px] text-[#4B5563] ">{description2}</a>}
            </div>
            <div className={`flex-1 flex  justify-end ${description1 == '' ?
                "mt-[94px] " : ''
                } `}>
                <img src={image} alt={title} className="w-full max-w-[477px] h-auto object-contain" />
            </div>
        </div>
    )
}

export default Card2