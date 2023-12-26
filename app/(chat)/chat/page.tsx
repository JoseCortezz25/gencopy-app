import Link from "next/link"


const ChatPage = () => {
  return (
    <>
      <main className="flex flex-row h-screen bg-gray-100 dark:bg-gray-900">
        <aside className="w-[20%] h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <h1 className="text-2xl font-bold dark:text-gray-100">Chat Interface</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Interact with AI</p>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
            <nav className="mt-6 space-y-1">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-4 h-4 mr-3"
                >
                  <path d="M13 4h3a2 2 0 0 1 2 2v14"></path>
                  <path d="M2 20h3"></path>
                  <path d="M13 20h9"></path>
                  <path d="M10 12v.01"></path>
                  <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"></path>
                </svg>
                <span>Open Chats</span>
              </a>
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
        <section className="w-[80%] h-screen flex-1 p-6 overflow-y-auto">
          <h2 className="text-xl font-bold dark:text-gray-100">AI Chat</h2>
          <div className="mt-4 space-y-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="p-6 flex items-center space-x-3">
                <span
                  className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10"
                ></span>
                <div className="text-gray-500 dark:text-gray-400">
                  <p>Hello, how can I assist you today?</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="p-6 flex items-center justify-end space-x-3">
                <div className="text-gray-500 dark:text-gray-400">
                  <p>I need help with my assignment.</p>
                </div>
                <span
                  className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10"
                ></span>
              </div>
            </div>
            <div className="space-y-2">
              <input
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                placeholder="Type your message here..."
              />
              <button className="bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                Send Message
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ChatPage