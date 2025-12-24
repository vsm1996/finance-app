import React from 'react'

export interface BillsCardProps {
  color: 'green' | 'cyan' | 'yellow';
  title: string;
  amount: Number;
}

const BillsCard = ({ color = 'green', title, amount }: BillsCardProps) => {
  return (
    <div className={`bg-beige-100 px-200 py-250 border-l-4 border-${color} rounded-xl flex items-center justify-between`}>
      <p className='text-4 text-grey-500'>{title}</p>
      <p className='text-4-bold text-grey-900'> ${amount.toFixed(2)}</p>
    </div>
  )
}

export default BillsCard
