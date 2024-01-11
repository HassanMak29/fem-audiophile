import { Link } from 'react-router-dom'

interface NavLinkProps {
  to: string
  label: string
}

export default function NavLink({ to, label }: NavLinkProps) {
  return (
    <li className='uppercase text-white text-[13px] tracking-[2px] leading-[25px] font-bold hover:text-primaryPeach transition'>
      <Link to={to}>{label}</Link>
    </li>
  )
}
