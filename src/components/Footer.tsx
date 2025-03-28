interface FooterLink {
    title: string;
    links: string[];
}

const footerLinks: FooterLink[] = [
    {
        title: "Services",
        links: [
            "CT Scan",
            "MRI Scan",
            "X-Ray",
            "Blood Tests",
            "Ultrasound",
            "ECG"
        ]
    },
    {
        title: "About Us",
        links: [
            "Our Story",
            "Our Mission",
            "Our Team",
            "Careers",
            "Press",
            "Blog"
        ]
    },
    {
        title: "Support",
        links: [
            "Contact Us",
            "Help Center",
            "FAQs",
            "Terms of Service",
            "Privacy Policy",
            "Patient Rights"
        ]
    },
    {
        title: "Resources",
        links: [
            "Health Tips",
            "Test Guide",
            "Insurance Info",
            "Patient Stories",
            "Medical Articles",
            "Health News"
        ]
    }
];

const Footer = () => {
    return (
        <div className='w-full bg-[#06202E] text-white py-[64px] px-[24px] md:px-[64px]'>
            <div className='w-full bg-[#06202E] text-white py-[64px] px-[24px] md:px-[64px]'>
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
                                        <li key={linkIndex} className='text-[14px] text-[#E6E9EA] hover:text-white cursor-pointer transition-colors duration-300'>
                                            {link}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className='border-t border-[#E1E3E6] pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0'>
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