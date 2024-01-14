import { Link } from 'react-router-dom'
import Logo from '../../icons/Logo'
import Cart from './Cart/Cart'
import MobileNavigation from './MobileNav/MobileNavigation'
import NavLink from './NavLink'

export default function Header() {
  return (
    <header className='max-w-[1440px] flex items-center bg-primaryBlack justify-between w-screen px-6 py-[34px] md:px-10 md:py-[37px] lg:px-[165px] lg:py-[35px] relative z-20'>
      <div className='absolute border-b-[1px] border-opacity-20 border-white bottom-0 w-[calc(100%-(2*24px))] md:w-[calc(100%-(2*40px))] lg:w-[calc(100%-(2*165px))] left-1/2 -translate-x-1/2' />
      <MobileNavigation className='lg:hidden' />
      <Link to='/' className='md:max-lg:mr-auto md:max-lg:ml-[42px]'>
        <Logo />
      </Link>
      <nav className='max-lg:hidden'>
        <ul className='flex gap-[34px]'>
          <NavLink to='/' label='home' />
          <NavLink to='category/headphones' label='headphones' />
          <NavLink to='category/speakers' label='speakers' />
          <NavLink to='category/earphones' label='earphones' />
        </ul>
      </nav>
      <Cart />
    </header>
  )
}
