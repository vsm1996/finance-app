import React from 'react'


export interface PotsCardProps {
  color: 'green' | 'cyan' | 'navy' | 'yellow';
  label: string;
  amount: string;
}

const borderColor = {
  green: 'bg-green',
  cyan: 'bg-cyan',
  navy: 'bg-navy',
  yellow: 'bg-yellow',
}

const PotsCard = ({ color, label, amount }: PotsCardProps) => {
  return (
    <div className='place-self-stretch flex items-center gap-200'>
      <span className={`min-w-1 w-1 max-w-1 h-full ${borderColor[color]} rounded-lg`}></span>
      <div className='flex flex-col gap-50 w-full'>
        <p className='text-5 text-grey-500 xl:text-nowrap'> {label} </p>
        <p className='text-4-bold text-grey-900'>{`$${amount}`}</p>
      </div>
    </div>
  )
}

export default PotsCard
