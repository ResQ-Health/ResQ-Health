import { useState } from 'react'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import HowItWorks from '../components/HowItWorks'
import UsersCard from '../components/UsersCard'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
const testimonials = [
    {
        name: "Simon Yellowe",
        description: "ResQ saved me hours of stress. I found a center close to home and booked in minutes",
        image: "./user.png"
    },
    {
        name: "Hannah Maduabuchi",
        description: "It's like having a personal health assistant. I felt supported every step of the way.",
        image: "./user.png"
    },
    {
        name: "Priscilla Oyeleke",
        description: "Booking a periodic X-ray for my daughter used to be a nightmare. With ResQ, the wait was nearly eliminated and I felt supported every step of the way.",
        image: "./user.png"
    },
    {
        name: "David Kim",
        description: "ResQ understands our needs. It's reassuring to see a platform built on empathy , with real-time information and genuine care.",
        image: "./user.png"
    },
    {
        name: "Lisa Patel",
        description: "ResQ made getting my last CT scan so easy. I didn't have to wait all day!",
        image: "./user.png"
    },
    {
        name: "James Wilson",
        description: "No long talks ,It's like having a trusted healthcare friend.",
        image: "./user.png"
    }
];

const articles = [
    {
        image: "./card12.png",
        category: "Insight",
        date: "Feb 14, 2025",
        title: "The Importance of Regular Health Checkups",
        description: "Lorem ipsum dolor sit amet consectetur. Sed eu rutrum nulla amet. Bibendum id elementum consequat lacus ...",
        author: "Dr. John Doe",
        authorImage: "./user.png"
    },
    {
        image: "./card12.png",
        category: "Health Tips",
        date: "Feb 13, 2025",
        title: "Understanding Your Medical Test Results",
        description: "Learn how to interpret your medical test results and what they mean for your health journey...",
        author: "Dr. Sarah Smith",
        authorImage: "./user.png"
    },
    {
        image: "./card12.png",
        category: "Research",
        date: "Feb 12, 2025",
        title: "Latest Advances in Medical Imaging",
        description: "Discover the newest technologies in medical imaging and how they're improving diagnosis...",
        author: "Dr. Michael Chen",
        authorImage: "./user.png"
    },
    {
        image: "./card12.png",
        category: "Wellness",
        date: "Feb 11, 2025",
        title: "Preventive Healthcare Guide",
        description: "A comprehensive guide to preventive healthcare and why it's crucial for long-term health...",
        author: "Dr. Emily Rodriguez",
        authorImage: "./user.png"
    },
    {
        image: "./card12.png",
        category: "Technology",
        date: "Feb 10, 2025",
        title: "Digital Health Revolution",
        description: "How technology is transforming healthcare delivery and patient experience...",
        author: "Dr. David Kim",
        authorImage: "./user.png"
    },
    {
        image: "./card12.png",
        category: "Nutrition",
        date: "Feb 9, 2025",
        title: "Nutrition and Diagnostic Tests",
        description: "Understanding how your diet affects your medical test results and what to eat before tests...",
        author: "Dr. Lisa Patel",
        authorImage: "./user.png"
    }
];

const Home = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className='w-full overflow-x-hidden'>
            <Hero />
            <Partners />
            <div className='w-full px-[24px] md:px-[64px]'>
                <Card1 description2='' items={[]} title="Reduce wait time with ResQ" description="We understand that timely diagnosis is crucial for effective treatment. ResQ connects you with healthcare facilities offering same-day or next-day appointments for various diagnostic services:" image="./card1a.png" />
                <div className='flex  md:flex-row flex-col justify-center gap-[24px] items-center mt-[32px]' >
                    <Card2 title="Book the Right Test Quickly" description1="" description2="Book Your Test Now" list={["Personalized recommendations on your tests and providers", "Step by step guidance from booking to  confirmation."]} image="./cardb2.png" />
                    <Card2 title="Trusted by Your Community, Across the country" description1="Our extensive network includes over 1,500+ verified facilities and medical professionals nationwide." description2="" list={["Wide geographical coverage ensures there's always a facility nearby.", "All providers are vetted to ensure high-quality care standards."]} image="./cardb1.png" />
                </div>
                <div className='mt-[32px]'>
                    <Card1 title="Support Beyond Diagnosis" description2="Talk to your Resq Guide" description="At Resq, we believe in providing ongoing support beyond your initial consultation." items={[`Schedule follow-up appointments based on specialist recommendations`, `Step by step guidance from booking to  confirmation.`, `Dedicated patient support team available via phone/email/chat.`, `24/7 concierge for questions and guidance`]} image="./card11.png" />
                </div>
            </div>
            <HowItWorks />
            <div className='w-full bg-[#F7F8FA] pt-[96px] pb-[114px] px-[24px] md:px-[64px]'>
                <h1 className='text-[32px] text-center text-[#06202E] font-[600] mb-12'>Hear from Users who have experienced ResQ's quality healthcare services</h1>
                <div className='mt-[72px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                    {testimonials.map((testimonial, index) => (
                        <UsersCard
                            key={index}
                            name={testimonial.name}
                            description={testimonial.description}
                            image={testimonial.image}
                        />
                    ))}
                </div>
            </div>

            <div className='w-full pt-[80px] px-[24px] md:px-[64px]'>
                <h1 className=' md:text-[32px] text-[32px] text-center text-[#06202E] font-[600] mb-[8px]'>Read top articles from health experts</h1>
                <p className='md:text-[24px] text-[18px] text-center text-[#06202E] font-[400]'>Health articles that keep you informed about good health practices and achieve your goals.</p>

                <div className='mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {articles.slice(0, showAll ? articles.length : 3).map((article, index) => (
                        <div key={index} className='flex flex-col text-[#586A73] bg-[#F6F8FA]
                         min-h-[428px] gap-[16px]'>
                            <img src={article.image} className='w-full rounded-t-[8px] h-[216px] object-cover' alt={article.title} />
                            <div className='pl-[16px]'>
                                <div className=''>
                                    <ul>
                                        <li className='flex items-center gap-[8px]'>
                                            {article.category}
                                            <div className='text-[#06202E]'>
                                                <div className='size-[4px] rounded-full bg-[#586A73]'></div>
                                            </div>
                                            {article.date}
                                        </li>
                                    </ul>
                                </div>
                                <h3 className=' md:text-[24px] text-[20px] text-[#06202E] font-[600]'>{article.title}</h3>
                                <p>{article.description}</p>
                                <div className='flex items-center mt-[8px] text-[14px] font-[500] gap-[8px]'>
                                    <img className='size-[32px]' src={article.authorImage} alt={article.author} />
                                    <p>By {article.author}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center mt-8'>
                    {!showAll && articles.length > 3 && (
                        <button
                            onClick={() => setShowAll(true)}
                            className='px-8 py-3 bg-[#06202E] text-white rounded-lg hover:bg-[#1a3a4e] transition-colors duration-300'
                        >
                            See All Articles
                        </button>
                    )}
                    {showAll && (
                        <button
                            onClick={() => setShowAll(false)}
                            className='px-8 py-3 bg-[#06202E] text-white rounded-lg hover:bg-[#1a3a4e] transition-colors duration-300'
                        >
                            See Less
                        </button>
                    )}
                </div>
            </div>
            <FAQ />
            <Footer />
        </div>
    )
}

export default Home