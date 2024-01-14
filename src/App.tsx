import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer'
import Hero from './components/layout/Hero'
import { cn } from './lib/utils'

function App() {
  const { pathname } = useLocation()

  return (
    <>
      <Header />
      <Hero />
      <main
        className={cn(
          'max-w-[1440px] flex flex-col grow mx-auto items-center gap-[120px] md:gap-[96px] lg:gap-[168px] px-6 md:px-10 lg:px-[165px] py-[120px] md:py-[127px] lg:py-[168px]',
          { 'bg-primaryGray': pathname.includes('/checkout') }
        )}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
