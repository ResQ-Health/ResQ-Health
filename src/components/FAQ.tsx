import { useState } from 'react'

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    name: string;
    items: FAQItem[];
}

const faqData: FAQCategory[] = [
    {
        name: "About Us",
        items: [
            {
                question: "What is ResQ?",
                answer: "ResQ is a healthcare platform that connects patients with diagnostic centers and medical professionals, making healthcare services more accessible and efficient."
            },
            {
                question: "How does ResQ work?",
                answer: "ResQ works by allowing users to search for medical tests, compare prices, and book appointments at nearby diagnostic centers. Our platform handles the entire process from search to confirmation."
            },
            {
                question: "Is ResQ available nationwide?",
                answer: "Yes, ResQ operates across the country with a network of over 1,500+ verified healthcare facilities and medical professionals."
            }
        ]
    },
    {
        name: "Our Services",
        items: [
            {
                question: "What types of tests can I book?",
                answer: "You can book various diagnostic tests including blood tests, imaging services (X-rays, CT scans, MRIs), and specialized medical examinations."
            },
            {
                question: "How do I book a test?",
                answer: "Simply search for the test you need, select your preferred location, choose a time slot, and complete the booking process. Our platform will guide you through each step."
            },
            {
                question: "Can I get same-day appointments?",
                answer: "Yes, many of our partner facilities offer same-day or next-day appointments, depending on availability and the type of test required."
            }
        ]
    },
    {
        name: "Support",
        items: [
            {
                question: "How can I contact customer support?",
                answer: "Our support team is available 24/7 through phone, email, and chat. You can reach us through any of these channels for assistance."
            },
            {
                question: "What if I need to reschedule?",
                answer: "You can easily reschedule your appointment through the ResQ platform or by contacting our support team. We understand that plans can change."
            },
            {
                question: "How do I get my test results?",
                answer: "Test results are typically available through your healthcare provider. Some facilities may also provide results through our secure platform."
            }
        ]
    }
];

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='w-full pt-[75px] pb-[114px] px-[24px] mx-auto md:px-[64px]'>
            <h1 className='text-[24px] md:text-[32px] text-center text-[#06202E] font-[600] mb-12'>Frequently Asked Questions</h1>

            {/* Category Toggle */}
            <div className='flex justify-center gap-4 mb-12'>
                {faqData.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveCategory(index);
                            setOpenIndex(null);
                        }}
                        className={`px-4 md:px-6 py-2 text-[14px] md:text-base font-[600] rounded-[6px] transition-all duration-300 ${activeCategory === index
                            ? 'bg-[#06202E] text-white'
                            : 'bg-[#E6E9EA] text-[#06202E] hover:bg-gray-100'
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* FAQ Items */}
            <div className='max-w-3xl mx-auto'>
                {faqData[activeCategory].items.map((item, index) => (
                    <div
                        key={index}
                        className='mb-4 bg-white rounded-lg overflow-hidden'
                    >
                        <button
                            onClick={() => toggleQuestion(index)}
                            className='w-full px-4 md:px-6 bg-[#F6F8FA] py-3 md:py-4 flex justify-between items-center text-left'
                        >
                            <span className='text-[14px] md:text-[18px] font-semibold text-[#06202E]'>{item.question}</span>
                            <svg
                                className={`w-5 h-5 md:w-6 md:h-6 bg-[#F6F8FA] transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out ${openIndex === index
                                ? 'max-h-96 opacity-100'
                                : 'max-h-0 opacity-0'
                                } overflow-hidden`}
                        >
                            <div className='px-4 md:px-6 pb-3 md:pb-4 bg-[#F6F8FA] text-[14px] md:text-base text-[#586A73]'>
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ