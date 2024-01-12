import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer'
import Hero from './components/layout/Hero'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className='max-w-[1440px] flex flex-col grow mx-auto items-center gap-[120px] md:gap-[96px] lg:gap-[168px] px-6 md:px-10 lg:px-[165px] py-[120px] md:py-[127px] lg:py-[168px]'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
