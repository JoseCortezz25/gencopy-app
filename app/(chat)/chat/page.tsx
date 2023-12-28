"use client";

import Loader from "@/components/Loader";
import Message, { MessageProps, UserType } from "@/components/Message"
import { messagesMock } from "__mocks__/messages"
import { cn } from "app/utils/utils";
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { toast } from 'sonner';
import Image from "next/image";

const ChatPage = () => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <main className="flex flex-row bg-gray-100 dark:bg-neutral-900 h-screen overflow-hidden">
      <section className="w-full max-w-[100%] md:max-w-[70%] md:container mx-auto flex flex-col p-6 justify-between">
        <div className="relative">
          <h2 className="text-xl font-bold dark:text-gray-100 mb-3">AI Chat</h2>
          <div className="h-[75vh] max-h-[75vh] overflow-y-scroll rounded-md space-y-2 scrollbar-hide" ref={messagesContainerRef}>
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full">
                <Image src="/images/ai-brain.png" alt="AI Brain" className="h-40 w-40" width={400} height={300} />
                <p className="text-gray-500 dark:text-gray-400">Start a conversation with AI</p>
              </div>
            )}
            {messages.map(({ user, message }, index) => (
              <Message
                key={index}
                user={user}
                message={message}
              />
            ))}
            {loading && <Loader />}
          </div>
        </div>

        <div className="w-full mt-[30px] flex items-center space-x-2">
          <div className={cn(`border border-white w-full bg-white flex pl-4 pr-2 py-[8px] rounded-xl dark:bg-neutral-800 dark:border-neutral-800`, error && 'border-2 border-red-500', currentMessage && ' border -input')}>
            <input
              className="w-full outline-none dark:bg-neutral-800 dark:text-neutral-100"
              placeholder="Type your message here..."
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <button
              className="w-[50px] bg-black text-white inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-1 py-2"
              onClick={onSendMessage}
            >
              <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="transparent">
                <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {/* Send Message */}
            </button>
          </div>
          <button
            className="w-[50px] bg-gray-500/10 py-[16px] px-4 text-black dark:bg-neutral-800  inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={onClearChat}
          >
            <div className="text-black dark:text-white">
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