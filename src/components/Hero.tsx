import LocationSearch from './LocationSearch'

const Hero = () => {
    const items = ['Find', 'Book', 'Scan', 'Resolve']

    return (
        <div className='w-full relative flex justify-center'>
            <div className="relative w-full h-[514px] flex-col justify-center py-[71px]">
                <img
                    src="/hero.jpeg"
                    alt="hero background"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-[-1]"
                />
                <div className="absolute inset-0 bg-[#00000033] z-[-1]"></div>
                <div className="max-w-full px-4">
                    <h1 className='font-plus-jakarta font-semibold text-[32px] md:text-[40px] leading-[48px] md:leading-[64px] text-center text-[#FFFFFF]'>
                        Your Diagnostic Journey <br /> Begins with One Search
                    </h1>
                </div>

                <div className='mt-[8px] text-[#FFFFFF]'>
                    <ul className='flex flex-wrap justify-center z-10 relative items-center gap-[16px]'>
                        {items.map((item, index) => (
                            <li key={index} className='flex items-center gap-[8px]'>
                                {item}
                                {index < items.length - 1 && (
                                    <div className="w-[4.375px] bg-[#FFFFFF] rounded-full h-[4.375px] relative"></div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col md:flex-row rounded-[16px] md:rounded-full mt-[16px] bg-[#fff] w-[90%] md:w-[800px] mx-auto items-stretch md:items-center gap-4 md:gap-[23px] p-4 md:px-6 shadow-lg'>
                    <div className='flex w-full md:w-auto items-center gap-[8px] border-b md:border-b-0 pb-4 md:pb-0'>
                        <div className='flex items-center justify-center w-[40px] h-[40px] bg-[#F6F8FA] rounded-full'>
                            <img src="./medical.png" className='size-[24px]' alt="search" />
                        </div>
                        <input
                            placeholder='Book your scan now'
                            className='h-[40px] rounded-[8px] w-full md:w-[336px] text-[#000000] pl-[12px] focus:outline-none bg-transparent'
                            type="text"
                        />
                    </div>
                    <div className='hidden md:block w-[1px] h-[32px] bg-[#E1E3E6]'></div>
                    <div className='w-full md:w-auto pt-2 md:pt-0'>
                        <LocationSearch />
                    </div>
                </div>

                <div className='flex text-[#FFFFFF] text-center text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] justify-center items-center mt-[26px] flex-col w-full gap-[16px] mx-auto px-4'>
                    <h1>Get same-day appointments at 2,500+ verified imaging facilities and <br className='hidden md:block' /> instant access to board-certified specialists <br className='hidden md:block' />
                        Consult with Experts
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Hero