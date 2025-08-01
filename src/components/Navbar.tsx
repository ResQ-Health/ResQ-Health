import { useState } from 'react'
import logo from '/logo.png'
import phone from '/call.png'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleCallClick = () => {
        window.location.href = 'tel:+2347068393906';
    }

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    }

    return (
        <div className='w-full bg-[#FFFFFF] px-4 sm:px-6 md:px-[64px] py-[14px] sticky top-0 z-50'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img src={logo} alt="logo" className='w-[102px] h-[36px]' />
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:block'>
                    {/* <ul className='flex items-center gap-[32px]'>
                        <li>
                            <button
                                onClick={() => scrollToSection('how-it-works')}
                                className='text-[#06202E] hover:text-[#1a3a4e] transition-colors'
                            >
                                How It Works
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('testimonials')}
                                className='text-[#06202E] hover:text-[#1a3a4e] transition-colors'
                            >
                                Testimonials
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('articles')}
                                className='text-[#06202E] hover:text-[#1a3a4e] transition-colors'
                            >
                                Articles
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('faq')}
                                className='text-[#06202E] hover:text-[#1a3a4e] transition-colors'
                            >
                                FAQ
                            </button>
                        </li>
                    </ul> */}
                </div>

                {/* Phone Button - Desktop */}
                <div className='hidden md:block'>
                    <button
                        onClick={handleCallClick}
                        className='flex items-center gap-[8px] bg-[#06202E] text-[#FFFFFF] px-[16px] py-[8px] rounded-[8px] hover:bg-[#1a3a4e] transition-colors'
                    >
                        Talk-to-ResQ
                        <img src={phone} alt="phone" className='w-[16px] h-[16px]' />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='text-[#06202E] p-2'
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden mt-4 pb-4'>
                    <ul className='flex flex-col gap-4'>
                        <li className='py-2'>
                            <button
                                onClick={() => scrollToSection('how-it-works')}
                                className='text-[#06202E] hover:text-[#1a3a4e] transition-colors'
                            >
                                How It Works
                            </button>
                        </li>
                        <li className='py-2'>
                            <button
                                onClick={() => scrollToSection('testimonials')}
                                className='text-[#06202E] hover:text-[#1a3a4e] transition-colors'
                            >
                                Testimonials
                            </button>
                        </li>
                        <li className='py-2'>
                            <button
                                onClick={() => scrollToSection('articles')}
                                className='text-[#06202E] hover:text-[#1a3a4e] transition-colors'
                            >
                                Articles
                            </button>
                        </li>
                        <li className='py-2'>
                            <button
                                onClick={() => scrollToSection('faq')}
                                className='text-[#06202E] hover:text-[#1a3a4e] transition-colors'
                            >
                                FAQ
                            </button>
                        </li>
                    </ul>
                    <div className='mt-4'>
                        <button
                            onClick={handleCallClick}
                            className='flex items-center gap-[8px] bg-[#06202E] text-[#FFFFFF] px-[16px] py-[8px] rounded-[8px] hover:bg-[#1a3a4e] transition-colors'
                        >
                            Talk-to-ResQ
                            <img src={phone} alt="phone" className='w-[16px] h-[16px]' />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar