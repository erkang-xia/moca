import React, { useState } from 'react';
import axios from "../../api/axios"
import {POST_CHAT} from "../../constants/api";

const Chatbox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        // Add user message to chat
        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        try {
            // Send user message to backend and get response
            const response = await axios.post(POST_CHAT, { message: input });
            console.log(response.data.data)
            console.log(response)
            // Add bot response to chat
            const botMessage = { sender: 'bot', text: response.data.data };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }

        // Clear input
        setInput('');
    };

    return (
        <div className="chatbox-container flex flex-col h-screen p-4 bg-gray-100">
            <div className="messages flex-grow overflow-y-auto bg-white p-4 shadow-md rounded-lg">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message my-2 p-2 rounded-lg ${
                            message.sender === 'user' ? 'bg-blue-200 self-end' : 'bg-gray-300 self-start'
                        }`}
                    >
                        {console.log(message)}
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
    );
};

export default Chatbox;
