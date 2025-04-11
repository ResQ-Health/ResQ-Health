// import LocationSearch from './LocationSearch'

const Hero = () => {
    const items = ['Find', 'Scan', 'Consult', 'Resolve']

    const handleBookClick = () => {
        const phoneNumber = "+2347068393906";
        const message = "Hello, I would like to book a diagnostic scan with ResQ.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

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
                    <h1 className='font-plus-jakarta font-semibold text-[40px] md:text-[40px] lg:text-[56px] leading-[64px] md:leading-[64px] lg:leading-[80px] text-center text-[#FFFFFF]'>
                        Your Diagnostic Journey <br /> Begins with One Search
                    </h1>
                </div>

                <div className='mt-[8px] text-[#FFFFFF]'>
                    <ul className='flex flex-wrap justify-center z-10 relative items-center gap-[16px]'>
                        {items.map((item, index) => (
                            <li key={index} className='flex text-[14px] md:text-base items-center gap-[8px]'>
                                {item}
                                {index < items.length - 1 && (
                                    <div className="w-[4.375px] bg-[#FFFFFF] rounded-full h-[4.375px] relative"></div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex justify-center mt-[16px] mb-[26px]'>
                    <button
                        onClick={handleBookClick}
                        className='bg-[#8f179c] border border-[#dadada] text-[#FFFFFF] px-[16px] py-[8px] rounded-[8px] hover:bg-[#5c2e61] transition-colors flex items-center gap-2 text-[14px] md:text-[16px]'
                    >
                        {/* <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg> */}
                        Book Your Scan
                    </button>
                </div>

                {/* <div className='flex flex-col md:flex-row rounded-[16px] md:rounded-full mt-[16px] bg-[#fff] w-[90%] md:w-[800px] mx-auto items-stretch md:items-center gap-4 md:gap-[23px] p-4 md:px-6 shadow-lg'>
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
                </div> */}

                <div className='flex text-[#FFFFFF] text-center text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] justify-center items-center mt-[26px] flex-col w-full gap-[16px] mx-auto px-4'>
                    {/* <h1 className='text-center leading-[24px]'>Get same-day appointments at 2,500+ verified imaging facilities and
                        <br />
                        instant access to board-certified specialists
                        <br />
                        <br />
                        Consult with Experts
                    </h1> */}
                </div>

                {/* <img src="/chat.png" alt="hero" className='absolute bottom-[-30px] right-0 size-[56px]' width={1000} height={1000} /> */}
            </div>
        </div>
    )
}

export default Hero