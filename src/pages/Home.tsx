import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import HowItWorks from '../components/HowItWorks'
import UsersCard from '../components/UsersCard'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

// Interface for Medium articles
interface MediumArticle {
    title: string;
    description: string;
    pubDate: string;
    link: string;
    author: string;
    thumbnail: string;
    categories: string[];
}

const testimonials = [
    {
        name: "Simon Yellowe",
        description: "ResQ saved me hours of stress. I found a center close to home and booked in minutes",
        image: "./user4.jpg"
    },
    {
        name: "Lisa Patel",
        description: "It's like having a personal health assistant. I felt supported every step of the way.",
        image: "./user2.jpg"
    },
    {
        name: "Hannah Maduabuchi",
        description: "ResQ made getting my last CT scan so easy. I didn't have to wait all day!",
        image: "./user3.jpg"
    },
    // {
    //     name: "David Kim",
    //     description: "ResQ understands our needs. It's reassuring to see a platform built on empathy , with real-time information and genuine care.",
    //     image: "./user.png"
    // },
    // {
    //     name: "Lisa Patel",
    //     description: "ResQ made getting my last CT scan so easy. I didn't have to wait all day!",
    //     image: "./user.png"
    // },
    // {
    //     name: "James Wilson",
    //     description: "No long talks ,It's like having a trusted healthcare friend.",
    //     image: "./user.png"
    // }
];

// Fallback articles in case the API fails
const fallbackArticles = [
    {
        title: "The Importance of Regular Health Checkups",
        description: "Lorem ipsum dolor sit amet consectetur. Sed eu rutrum nulla amet. Bibendum id elementum consequat lacus ...",
        pubDate: "Feb 14, 2025",
        link: "https://medium.com/@medresqhealthcare",
        author: "Dr. John Doe",
        thumbnail: "/card12.png",
        categories: ["Insight"]
    },
    {
        title: "Understanding Your Medical Test Results",
        description: "Learn how to interpret your medical test results and what they mean for your health journey...",
        pubDate: "Feb 13, 2025",
        link: "https://medium.com/@medresqhealthcare",
        author: "Dr. Sarah Smith",
        thumbnail: "/card12.png",
        categories: ["Health Tips"]
    },
    {
        title: "Latest Advances in Medical Imaging",
        description: "Discover the newest technologies in medical imaging and how they're improving diagnosis...",
        pubDate: "Feb 12, 2025",
        link: "https://medium.com/@medresqhealthcare",
        author: "Dr. Michael Chen",
        thumbnail: "/card12.png",
        categories: ["Research"]
    }
];

const Home = () => {
    const [mediumArticles, setMediumArticles] = useState<MediumArticle[]>(fallbackArticles);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMediumArticles();
    }, []);

    const fetchMediumArticles = async () => {
        try {
            // Medium username
            const username = 'medresqhealthcare';

            // Using a CORS proxy to access Medium's RSS feed
            const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`);

            if (!response.ok) {
                throw new Error('Failed to fetch Medium articles');
            }

            const data = await response.json();

            if (data.status === 'ok') {
                // Map the RSS feed items to our MediumArticle interface
                const articles: MediumArticle[] = data.items.map((item: any) => {
                    // Extract first image from content if available
                    let thumbnail = '/card12.png'; // Default fallback image with corrected path
                    const imgRegex = /<img[^>]+src="([^">]+)"/;
                    const match = item.content.match(imgRegex);
                    if (match && match[1]) {
                        thumbnail = match[1];
                    }

                    // Strip HTML and limit description length
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = item.content;
                    const plainText = tempDiv.textContent || tempDiv.innerText || '';
                    const description = plainText.substr(0, 150) + '...';

                    // Format date
                    const date = new Date(item.pubDate);
                    const formattedDate = date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    });

                    return {
                        title: item.title,
                        description: description,
                        pubDate: formattedDate,
                        link: item.link,
                        author: item.author,
                        thumbnail: thumbnail,
                        categories: item.categories.length > 0 ? item.categories : ['Health']
                    };
                });

                setMediumArticles(articles.slice(0, 3));
            } else {
                throw new Error('RSS feed not valid');
            }
        } catch (error) {
            console.error('Error fetching Medium articles:', error);
            // Use fallback articles if fetch fails
            setMediumArticles(fallbackArticles);
        } finally {
            setLoading(false);
        }
    };

    const handleSeeAllArticles = () => {
        window.open('https://medium.com/@medresqhealthcare', '_blank');
    };

    return (
        <div className='w-full overflow-x-hidden'>
            <Hero />
            <Partners />
            <div className='w-full px-[24px] md:px-[64px]'>
                <Card1 description2='' items={[]} title="Reduce wait time with ResQ" description="We understand that timely diagnosis is crucial for effective treatment. ResQ connects you with healthcare facilities offering same-day or next-day appointments for various diagnostic services:" image="./card1a.png" />
                <div className='flex md:flex-row flex-col justify-center gap-[24px] items-center mt-[32px]' >
                    <Card2 title="Book the Right Test Quickly" description1="" description2="Book Your Test Now" list={["Personalized recommendations on your tests and providers", "Step by step guidance from booking to  confirmation."]} image="./cardb2.png" />
                    <Card2 title="Trusted by Your Community, Across the country" description1="Our extensive network includes over 1,500+ verified facilities and medical professionals nationwide." description2="" list={["Wide geographical coverage ensures there's always a facility nearby.", "All providers are vetted to ensure high-quality care standards."]} image="./cardb1.png" />
                </div>
                <div className='mt-[32px]'>
                    <Card1 title="Support Beyond Diagnosis" description2="Talk to your Resq Guide" description="At Resq, we believe in providing ongoing support beyond your initial consultation." items={[`Schedule follow-up appointments based on specialist recommendations`, `Step by step guidance from booking to  confirmation.`, `Dedicated patient support team available via phone/email/chat.`, `24/7 concierge for questions and guidance`]} image="./card11.png" />
                </div>
            </div>
            <section id="how-it-works">
                <HowItWorks />
            </section>
            <section id="testimonials" className='w-full bg-[#F7F8FA] pt-[96px] pb-[114px] px-[24px] md:px-[64px]'>
                <h1 className='text-[24px] md:text-[32px] text-center text-[#06202E] font-[600] mb-12'>Hear from Users who have experienced ResQ's quality healthcare services</h1>
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
            </section>

            <section id="articles" className='w-full pt-[80px] px-[24px] md:px-[64px]'>
                <h1 className='text-[24px] md:text-[32px] text-center text-[#06202E] font-[600] mb-[8px]'>Read top articles from health experts</h1>
                <p className='text-[16px] md:text-[24px] text-center text-[#06202E] font-[400]'>Health articles that keep you informed about good health practices and achieve your goals.</p>

                {/* Mobile view - horizontal scrolling */}
                <div className='mt-[40px] md:hidden overflow-x-auto pb-[20px] scrollbar-hide'>
                    <div className='flex space-x-4 min-w-max px-[4px]'>
                        {loading ? (
                            // Loading skeleton
                            Array(3).fill(0).map((_, index) => (
                                <div key={index} className='flex-shrink-0 w-[280px] flex flex-col bg-[#F6F8FA] min-h-fit pb-[32px] gap-[16px] animate-pulse rounded-t-[8px]'>
                                    <div className='w-full rounded-t-[8px] h-[216px] bg-gray-200'></div>
                                    <div className='pl-[16px] pr-[16px]'>
                                        <div className='flex items-center gap-[8px] mb-2'>
                                            <div className='h-4 bg-gray-200 rounded w-16'></div>
                                            <div className='size-[4px] rounded-full bg-gray-200'></div>
                                            <div className='h-4 bg-gray-200 rounded w-24'></div>
                                        </div>
                                        <div className='h-6 bg-gray-200 rounded w-3/4 mb-2'></div>
                                        <div className='h-4 bg-gray-200 rounded w-full mb-1'></div>
                                        <div className='h-4 bg-gray-200 rounded w-2/3 mb-4'></div>
                                        <div className='flex items-center gap-[8px]'>
                                            <div className='size-[32px] rounded-full bg-gray-200'></div>
                                            <div className='h-4 bg-gray-200 rounded w-24'></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            mediumArticles.map((article, index) => (
                                <a
                                    key={index}
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex-shrink-0 w-[310px] flex flex-col text-[#586A73] bg-[#F6F8FA] min-h-fit pb-[32px] gap-[18px] hover:shadow-md transition-all duration-300 rounded-t-[8px]'
                                >
                                    <img
                                        src={article.thumbnail}
                                        className='w-full rounded-t-[8px] h-[180px] object-cover'
                                        alt={article.title}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.onerror = null;
                                            target.src = '/card12.png';
                                        }}
                                    />
                                    <div className='pl-[16px] pr-[16px]'>
                                        <div className=''>
                                            <ul>
                                                <li className='flex items-center gap-[8px]'>
                                                    <span className="text-[16px] md:text-[16px]">{article.categories[0]}</span>
                                                    <div className='text-[#06202E]'>
                                                        <div className='size-[4px] rounded-full bg-[#586A73]'></div>
                                                    </div>
                                                    <span className="text-[16px] md:text-[16px]">{article.pubDate}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className='text-[18px] md:text-[24px] text-[#06202E] font-[600]'>{article.title}</h3>
                                        <p className='text-[16px] md:text-[16px] my-[8px] leading-[20px] md:leading-[24px]'>
                                            {article.description}
                                            <span className="text-[#06202E] font-medium underline ml-1">Read more</span>
                                        </p>
                                        <div className='flex items-center mt-[16px] text-[16px] font-[500] gap-[8px]'>
                                            <div className='size-[32px] bg-[#06202E] text-white rounded-full flex items-center justify-center'>
                                                {article.author.charAt(0)}
                                            </div>
                                            <p>By {article.author}</p>
                                        </div>
                                    </div>
                                </a>
                            ))
                        )}
                    </div>
                </div>

                {/* Desktop view - grid layout */}
                <div className='mt-[40px] hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {loading ? (
                        // Loading skeleton
                        Array(3).fill(0).map((_, index) => (
                            <div key={index} className='flex flex-col bg-[#F6F8FA] md:min-h-[428px] min-h-fit pb-[32px] gap-[16px] animate-pulse rounded-t-[8px]'>
                                <div className='w-full rounded-t-[8px] h-[216px] bg-gray-200'></div>
                                <div className='pl-[16px] pr-[16px]'>
                                    <div className='flex items-center gap-[8px] mb-2'>
                                        <div className='h-4 bg-gray-200 rounded w-16'></div>
                                        <div className='size-[4px] rounded-full bg-gray-200'></div>
                                        <div className='h-4 bg-gray-200 rounded w-24'></div>
                                    </div>
                                    <div className='h-6 bg-gray-200 rounded w-3/4 mb-2'></div>
                                    <div className='h-4 bg-gray-200 rounded w-full mb-1'></div>
                                    <div className='h-4 bg-gray-200 rounded w-2/3 mb-4'></div>
                                    <div className='flex items-center gap-[8px]'>
                                        <div className='size-[32px] rounded-full bg-gray-200'></div>
                                        <div className='h-4 bg-gray-200 rounded w-24'></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        mediumArticles.map((article, index) => (
                            <a
                                key={index}
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex flex-col text-[#586A73] bg-[#F6F8FA] md:min-h-[428px] min-h-fit pb-[32px] gap-[16px] hover:shadow-md transition-all duration-300 rounded-t-[8px]'
                            >
                                <img
                                    src={article.thumbnail}
                                    className='w-full rounded-t-[8px] h-[216px] object-cover'
                                    alt={article.title}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = '/card12.png';
                                    }}
                                />
                                <div className='pl-[16px] pr-[16px]'>
                                    <div className=''>
                                        <ul>
                                            <li className='flex items-center gap-[8px]'>
                                                <span className="text-[16px] md:text-[16px]">{article.categories[0]}</span>
                                                <div className='text-[#06202E]'>
                                                    <div className='size-[4px] rounded-full bg-[#586A73]'></div>
                                                </div>
                                                <span className="text-[16px] md:text-[16px]">{article.pubDate}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className='text-[18px] md:text-[24px] text-[#06202E] font-[600]'>{article.title}</h3>
                                    <p className='text-[16px] md:text-[16px] my-[8px] leading-[20px] md:leading-[24px]'>
                                        {article.description}
                                        <span className="text-[#06202E] font-medium underline ml-1">Read more</span>
                                    </p>
                                    <div className='flex items-center mt-[8px] text-[16px] font-[500] gap-[8px]'>
                                        <div className='size-[32px] bg-[#06202E] text-white rounded-full flex items-center justify-center'>
                                            {article.author.charAt(0)}
                                        </div>
                                        <p>By {article.author}</p>
                                    </div>
                                </div>
                            </a>
                        ))
                    )}
                </div>

                <div className='flex justify-center mt-8'>
                    <button
                        onClick={handleSeeAllArticles}
                        className='px-8 py-3 bg-[#06202E] text-white rounded-lg hover:bg-[#1a3a4e] transition-colors duration-300 text-[14px] md:text-[16px]'
                    >
                        See All Articles
                    </button>
                </div>
            </section>
            <section id="faq">
                <FAQ />
            </section>
            <Footer />
        </div>
    )
}

export default Home