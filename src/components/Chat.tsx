import { useState } from 'react'

interface Message {
    text: string;
    isUser: boolean;
    timestamp: Date;
}

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const newMessage: Message = {
            text: inputMessage,
            isUser: true,
            timestamp: new Date()
        };

        setMessages([...messages, newMessage]);
        setInputMessage('');

        // Simulate bot response
        setTimeout(() => {
            const botResponse: Message = {
                text: "Thank you for your message. Our team will get back to you shortly.",
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen ? (
                <div className="bg-white rounded-lg shadow-lg w-[350px] h-[500px] flex flex-col">
                    {/* Chat Header */}
                    <div className="bg-[#06202E] text-white p-4 rounded-t-lg flex justify-between items-center">
                        <h3 className="font-semibold">Chat with ResQ</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-200"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-lg p-3 ${message.isUser
                                            ? 'bg-[#06202E] text-white'
                                            : 'bg-gray-100 text-[#06202E]'
                                        }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-4 border-t">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-[#06202E]"
                            />
                            <button
                                type="submit"
                                className="bg-[#06202E] text-white px-4 py-2 rounded-lg hover:bg-[#1a3a4e] transition-colors"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-[#06202E] text-white p-4 rounded-full shadow-lg hover:bg-[#1a3a4e] transition-colors"
                >
                    <img src="/chat.png" alt="Chat" className="size-[24px]" />
                </button>
            )}
        </div>
    );
};

export default Chat; 