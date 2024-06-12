import React, { useState } from 'react';
import axios from "../../api/axios";
import { POST_CHAT } from "../../constants/api";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
const Chatbox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false); // State to toggle chatbox visibility

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post(POST_CHAT, { message: input });
            const botMessage = { sender: 'bot', text: response.data.data };
            setMessages(messages => [...messages, botMessage]); // Update messages state
        } catch (error) {
            console.error('Error sending message:', error);
        }

        setInput('');
    };

    const toggleChatbox = () => setIsOpen(!isOpen); // Toggle function

    return (
        <div>
            <button onClick={toggleChatbox} className="p-2 bg-blue-500 text-white rounded-lg fixed bottom-4 right-4">
                <ContactSupportIcon/>

            </button>

            {isOpen && (
                <div className="chatbox-container fixed bottom-12 right-4 flex flex-col w-96 max-w-full h-2/3 p-4 bg-gray-100 shadow-lg rounded-lg">
                    <div className="messages flex-grow overflow-y-auto bg-white p-4 shadow-md rounded-lg">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message my-2 p-2 rounded-lg ${
                                    message.sender === 'user' ? 'bg-blue-200 self-end' : 'bg-gray-300 self-start'
                                }`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="flex mt-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-grow p-2 border border-gray-300 rounded-lg"
                            placeholder="Type your question..."
                        />
                        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbox;
