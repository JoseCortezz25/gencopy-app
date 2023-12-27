"use client";

import Message, { MessageProps, UserType } from "@/components/Message"
import { messagesMock } from "__mocks__/messages"
import { cn } from "app/utils/utils";
import Link from "next/link"
import { useState } from "react";
import { toast } from 'sonner';

const ChatPage = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onGetResponseByAI = async () => {
    setLoading(true);
    const response = await fetch('/api/generate', {
      method: 'POST',
      body: JSON.stringify({ message: currentMessage }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await response.json();
    console.log('res', res);

    setMessages((prevMessages) => [...prevMessages, { user: UserType.BOT, message: res.text }]);
    setLoading(false);
  };

  const onSendMessage = () => {
    if (!currentMessage) {
      setError(true);
      toast.error('Please enter a message', {
        className: 'error-toast',
      })
      return;
    }
    setMessages([...messages, { user: UserType.USER, message: currentMessage }]);
    setError(false);
    setCurrentMessage("");
    onGetResponseByAI();
  };

  const onClearChat = () => {
    setMessages([]);
  };

  return (
    <main className="flex flex-row bg-gray-100 dark:bg-gray-900 h-screen overflow-hidden">
      <aside className="w-[20%] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ">
        <div className="p-6">
          <h1 className="text-2xl font-bold dark:text-gray-100">GenCopy.ai</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Interact with AI</p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700">
          <nav className="mt-6 space-y-1">
            {/* <a
              className="flex items-center px-6 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              href="#"
              rel="ugc"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-3"
              >
                <path d="M13 4h3a2 2 0 0 1 2 2v14"></path>
                <path d="M2 20h3"></path>
                <path d="M13 20h9"></path>
                <path d="M10 12v.01"></path>
                <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"></path>
              </svg>
              <span>Open Chats</span>
            </a> */}
            <a
              className="flex items-center px-6 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              href="#"
              rel="ugc"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-3"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </aside>
      <section className="w-[80%] flex flex-col p-6 justify-between">
        <div>
          <h2 className="text-xl font-bold dark:text-gray-100 mb-3">AI Chat</h2>
          <div className="h-[75vh] max-h-[75vh] overflow-y-scroll rounded-md space-y-2">
            {messages.map(({ user, message }, index) => (
              <Message key={index} user={user} message={message} />
            ))}
          </div>
        </div>

        <div className="w-full mt-[30px] flex items-center space-x-2">
          <input
            className={cn(`flex h-10 rounded-md border border-input bg-background px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full`, error && 'border-2 border-red-500', currentMessage && 'border-input')}
            placeholder="Type your message here..."
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button
            className="w-[50px] bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            onClick={onSendMessage}
          >
            <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="transparent">
              <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {/* Send Message */}
          </button>
          <button
            className="w-[50px] bg-white text-black border-2 border-black inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            onClick={onClearChat}
          >
            <div className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 1024 1024" t="1569683368540" version="1.1" p-id="9723"><defs><style type="text/css" /></defs><path d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z" p-id="9724" /></svg>
            </div>
            {/* Clear Chat */}
          </button>
        </div>
      </section>
    </main>
  )
}

export default ChatPage