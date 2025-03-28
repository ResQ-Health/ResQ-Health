const Partners = () => {
    const logos = [
        { src: '/mari.png', alt: 'marigold' },
        { src: '/erom.png', alt: 'Erom' },
        { src: '/reliance.png', alt: 'Reliance HMO' },
        { src: '/foremost.png', alt: 'foremost' },
        { src: '/mari.png', alt: 'marigold' },
        { src: '/erom.png', alt: 'Erom' },
        { src: '/reliance.png', alt: 'Reliance HMO' },
        { src: '/foremost.png', alt: 'foremost' },
    ];

    return (
        <div className='md:p-[64px] py-[56px] lg:p-[64px] w-full'>
            <div className='px-4 sm:px-8 rounded-[16px] border-[1px] border-[#E1E3E6] :bg-[#F6F8FA] lg:px-[85px] py-[20px] w-full'>
                <div className='px-4 sm:px-8 w-full overflow-hidden'>
                    <div className='scroll-container'>
                        <div className='scroll-content'>
                            {[...logos, ...logos].map((logo, i) => (
                                <div className='logo' key={`logo-${i}`}>
                                    <img className='w-auto h-6 object-contain' src={logo.src} alt={logo.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <style>{`
                        .scroll-container {
                            display: flex;
                            align-items: center;
                        }

                        .scroll-content {
                            display: flex;
                            width: max-content;
                            animation: scroll 20s linear infinite;
                        }

                        .logo {
                            flex-shrink: 0;
                            margin-right: 20px;
                        }

                        @keyframes scroll {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                    `}</style>
                </div>
            </div>
        </div>
    )
}

export default Partners