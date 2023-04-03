import './globals.css'
import Navbar from './components/Navbar';
import MyProfilePic from './components/MyProfilePic';
import Footer from './components/Footer';

export const metadata = {
  title: "Luys Blog",
  description: 'Created by Luys Fernnando',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800 flex flex-col flex-grow min-h-screen mx-auto'>
        <Navbar/>
        <MyProfilePic/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
