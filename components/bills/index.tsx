import React from 'react'
import HomepageCardTitle from '../ui/homepage-card-title'
import BillsCard, { BillsCardProps } from './billsCard'

const billsArr: BillsCardProps[] = [
  {
    title: 'Paid Bills',
    amount: 190.00,
    color: 'green'
  },
  {
    title: 'Total Upcoming',
    amount: 194.98,
    color: 'yellow'
  },
  {
    title: 'Due Soon',
    amount: 59.98,
    color: 'cyan'
  },
]

const Bills = () => {
  return (
    <section className='bg-white rounded-xl p-400 flex flex-col gap-400'>
      <HomepageCardTitle title='Recurring Bills' label='See Details' href='/bills' />

      <div className='flex flex-col gap-150'>
        {billsArr.map(({ title, amount, color }, index) => (
          <BillsCard key={index} title={title} amount={amount} color={color} />
        ))}
      </div>
    </section>
  )
}

export default Bills
