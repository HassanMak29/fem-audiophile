import { Link } from 'react-router-dom'
import Logo from '../icons/Logo'
import NavLink from './Header/NavLink'
import FacebookIcon from '../icons/FacebookIcon'
import TwitterIcon from '../icons/TwitterIcon'
import InstagramIcon from '../icons/InstagramIcon'

export default function Footer() {
  return (
    <footer className='max-w-[1440px] bg-primaryBlack h-[654px] md:h-[400px] lg:h-[395px] px-[24px] md:px-[39px] lg:px-[165px] pt-12 md:pt-[60px] lg:pt-[75px] flex flex-col max-md:items-center relative'>
      <div className='absolute border-t-[4px] border-primaryPeach top-0 w-[101px]' />
      <div className='flex justify-between items-center md:items-start mb-12 md:mb-8 lg:mb-[36px] max-lg:flex-col md:gap-8 gap-12'>
        <Link to='/'>
          <Logo />
        </Link>
        <nav className=''>
          <ul className='flex gap-4 md:gap-[34px] max-md:flex-col max-md:items-center'>
            <NavLink to='/' label='home' />
            <NavLink to='category/headphones' label='headphones' />
            <NavLink to='category/speakers' label='speakers' />
            <NavLink to='category/earphones' label='earphones' />
          </ul>
        </nav>
      </div>
      <div className='flex justify-between items-center mb-12 md:mb-20 lg:mb-14 max-md:text-center'>
        <p className='text-white opacity-50 max-w-[327px] md:max-w-[690px] lg:max-w-[540px] leading-[25px]'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className='flex items-center gap-4 self-end max-lg:hidden'>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className='flex items-center justify-between max-md:flex-col max-md:gap-12'>
        <p className='text-white opacity-50 font-bold leading-[25px]'>
          Copyright 2021. All Rights Reserved
        </p>
        <div className='flex items-center gap-4 md:self-end lg:hidden'>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </footer>
  )
}
