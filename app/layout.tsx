import { Toaster } from 'sonner';
import '../styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position='top-center' />
      </body>
    </html>
  )
}
