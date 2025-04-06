interface FooterLink {
    text: string;
    url?: string;
    isEmail?: boolean;
    isPhone?: boolean;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        title: "Services",
        links: [
            { text: "CT Scan" },
            { text: "MRI Scan" },
            { text: "X-Ray" },
            { text: "Blood Tests" },
            { text: "Ultrasound" },
            { text: "ECG" }
        ]
    },
    {
        title: "About Us",
        links: [
            { text: "Our Story" },
            { text: "Our Mission" },
            { text: "Our Team" },
            { text: "Careers" },
            { text: "Press" },
            { text: "Blog" }
        ]
    },
    {
        title: "Support",
        links: [
            { text: "Contact Us" },
            { text: "Help Center" },
            { text: "FAQs" },
            { text: "Terms of Service" },
            { text: "Privacy Policy" },
            { text: "Patient Rights" }
        ]
    },
    {
        title: "Contact",
        links: [
            {
                text: "Hello@resqhealthcare.com",
                url: "mailto:Hello@resqhealthcare.com",
                isEmail: true
            },
            {
                text: "+2347072779831",
                url: "tel:+2347072779831",
                isPhone: true
            }
        ]
    }
];

// 

const Footer = () => {
    return (
        <div className='w-full bg-[#06202E] text-white py-[64px] px-[24px] md:px-[64px]'>
            <div className='w-full bg-[#06202E] text-white  '>
                <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-[221px]'>
                    <div className='flex flex-col gap-4'>
                        <img src="./logo2.png" alt="ResQ Logo" className='w-[120px]' />
                        <p className='text-[14px] text-[#E6E9EA] max-w-[300px]'>Your trusted partner in healthcare, making medical services accessible and efficient.</p>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-[56px]'>
                        {footerLinks.map((section, index) => (
                            <div key={index} className='flex flex-col gap-4'>
                                <h1 className='text-[18px] font-semibold'>{section.title}</h1>
                                <ul className='flex flex-col gap-2'>
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            {link.url ? (
                                                <a
                                                    href={link.url}
                                                    className={`text-[14px] text-[#E6E9EA] hover:text-white cursor-pointer transition-colors duration-300 ${link.isPhone ? 'flex items-center gap-2' : ''
                                                        }`}
                                                >
                                                    {link.isPhone && <span className="inline-block w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path></svg></span>}
                                                    {link.text}
                                                </a>
                                            ) : (
                                                <span className='text-[14px] text-[#E6E9EA] hover:text-white cursor-pointer transition-colors duration-300'>
                                                    {link.text}
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='border-t border-[#1A2B3A] pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0'>
                <ul className='flex flex-wrap justify-center md:justify-start gap-4 md:gap-6'>
                    <li className='text-[14px] text-[#E6E9EA] hover:text-white cursor-pointer transition-colors duration-300'>Privacy Policy</li>
                    <li className='text-[14px] text-[#E6E9EA] hover:text-white cursor-pointer transition-colors duration-300'>Terms of Service</li>
                    <li className='text-[14px] text-[#E6E9EA] hover:text-white cursor-pointer transition-colors duration-300'>Cookie Policy</li>
                </ul>
                <p className='text-[14px] text-[#E6E9EA]'>© 2025 ResQ. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer