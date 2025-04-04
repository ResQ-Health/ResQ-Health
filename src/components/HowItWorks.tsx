import Card from './how it works/card'

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Tell us what you need",
            description: "Share your symptoms or the test you're looking for, and we'll guide you."
        },
        {
            number: "02",
            title: "Get personalized recommendation",
            description: "Your personal concierge suggests the right test and the best centers for you."
        },
        {
            number: "03",
            title: "Book your appointments",
            description: "Choose a time that works for you and book in just a few clicks."
        },
        {
            number: "04",
            title: "Receive ongoing support",
            description: "Get reminders, updates, and answers to your questions anytime."
        }
    ];

    return (
        <div className="w-full px-4 md:px-[64px] py-12">
            <h1 className='text-[32px] text-center text-[#06202E] font-[600] mb-12'>How it Works</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                {steps.map((step) => (
                    <Card
                        key={step.number}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default HowItWorks