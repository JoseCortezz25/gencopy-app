import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
  title: 'GenCopy.ai - AI Copys Creation',
  icons: {
    icon: '/images/ai-brain.png',
  }
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="w-full h-[80vh] border-y grid place-content-center">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] mb-4">
                  Boosting your creativity with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-5">
                  Harness the power of AI to generate creative and engaging text for your advertising and marketing campaigns.
                </p>
                <div className="space-x-4">
                  <Link href="/chat">
                    <button className="bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Get Started</button>
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src="/images/principal.jpeg"
                  alt="AI Text Creation"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-3">
                  Our AI-powered Text Creation Process
                </h2>
                <p className="max-w-[80%] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Using advanced machine learning algorithms, our system generates compelling text that captures attention and drives engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
