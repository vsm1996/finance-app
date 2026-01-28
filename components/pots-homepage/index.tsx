import Link from 'next/link'
import React from 'react'

import RightCaretIcon from '@/public/assets/images/icon-caret-right.svg'
import PotsIcon from '@/public/assets/images/icon-pot.svg'
import PotsCard, { PotsCardProps } from './potsCard'
import HomepageCardTitle from '../ui/homepage-card-title'

const potsArr: PotsCardProps[] = [
  {
    color: 'green',
    label: 'Savings',
    amount: '159'
  },
  {
    color: 'cyan',
    label: 'Gift',
    amount: '40'
  },
  {
    color: 'navy',
    label: 'Concert Ticket',
    amount: '110'
  },
  {
    color: 'yellow',
    label: 'New Laptop',
    amount: '10'
  },
]

const PotsHomePage = () => {
  return (
    <section className='bg-white rounded-xl p-400 flex flex-col gap-250 h-full'>
      <HomepageCardTitle title='Pots' label='See Details' href='/pots' />

      <div className='flex flex-col lg:flex-row gap-250 h-full'>
        <div className='flex-1 flex items-center gap-250 bg-beige-100 pl-4 py-5 rounded-xl self-stretch'>
          <span className=''>
            <PotsIcon />
          </span>
          <div>
            <p className='text-4 text-grey-500 mb-3'> Total Saved </p>
            <p className='text-1 text-grey-900'> $850 </p>
          </div>
        </div>

        <div className='flex-1 grid grid-cols-2 gap-200 h-full'>
          {potsArr.map(({ color, label, amount }) => <PotsCard key={label} color={color} label={label} amount={amount} />)}
        </div>
      </div>

    </section>
  )
}

export default PotsHomePage
