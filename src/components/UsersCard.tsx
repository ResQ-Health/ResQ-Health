import React from 'react'

interface UsersCardProps {
    name: string;
    description: string;
    image: string;
}

const UsersCard: React.FC<UsersCardProps> = ({ name, description, image }) => {
    return (
        <div className="flex flex-col bg-[#FBFBFB] py-[36.24px] px-[28px] rounded-[16px] border-[#E9E9E9] border  max-w-[421px] ">
            <div className=" rounded-full mb-[75px] flex justify-between items-center overflow-hidden ">
                <img src={`./quote.png`} alt={name} className=" w-[68px]  md:w-[96.0px] h-[44px] md:h-[69px] " />
                <img src={image} alt={name} className="size-[42px] md:size-[84px] " />
            </div>
            <p className="text-[16px] md:text-[16px] leading-[22px] md:leading-[24px] font-[400] md:font-[500] text-[#06202E]] mb-2">{description}</p>
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#06202E]">{name}</h3>
        </div>
    )
}

export default UsersCard