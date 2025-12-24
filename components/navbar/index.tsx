'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'

import LogoSmall from '@/public/assets/images/logo-small.svg'
import LogoLarge from '@/public/assets/images/logo-large.svg'

import OverviewIcon from '@/public/assets/images/icon-nav-overview.svg'
import TransactionsIcon from '@/public/assets/images/icon-nav-transactions.svg'
import BudgetsIcon from '@/public/assets/images/icon-nav-budgets.svg'
import PotsIcon from '@/public/assets/images/icon-nav-pots.svg'
import BillsIcon from '@/public/assets/images/icon-nav-recurring-bills.svg'

import MinimizeIcon from '@/public/assets/images/icon-minimize-menu.svg'
import { NavLink } from '@/utlis/types'

const navLinks: NavLink[] = [
  {
    label: 'Overview',
    href: '/',
    icon: <OverviewIcon />
  },
  {
    label: 'Transactions',
    href: '/transactions',
    icon: <TransactionsIcon />
  },
  {
    label: 'Budgets',
    href: '/budgets',
    icon: <BudgetsIcon />
  },
  {
    label: 'Pots',
    href: '/pots',
    icon: <PotsIcon />
  },
  {
    label: 'Recurring bills',
    href: '/bills',
    icon: <BillsIcon />
  },
]

export const DesktopNavbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <nav className={`${isOpen ? 'min-w-[300px]' : 'min-w-[88px]'} hidden md:flex transition-all ease-in-out duration-300  bg-grey-900 flex-col gap-300 text-3 text-grey-300`}>
      <div className='px-8 py-8 flex items-center'>
        {isOpen ? <LogoLarge /> : <LogoSmall />}
      </div>

      <ul className='w-full flex flex-col gap-100'>
        {navLinks.map((link) => (
          <li key={link.label} className='group'>
            <Link className=' flex items-center gap-200 px-8 py-4 transition-all ease-in-out duration-300 group-hover:bg-beige-100 group-hover:text-grey-900 group-hover:border-l-4 group-hover:border-green' href={link.href}>
              {link.icon}
              {isOpen && (
                <span className={`transition-all ease-in-out duration-300`}>
                  {link.label}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <div className='px-8 py-8'>
        <button className='flex items-center gap-200' onClick={() => setOpen(current => !current)}>
          <span className={`transition-all ease-in-out duration-300 ${isOpen ? '' : 'rotate-180'}`}>
            <MinimizeIcon />
          </span>
          {isOpen && 'Minimize Menu'}
        </button>
      </div>
    </nav>
  )
}

