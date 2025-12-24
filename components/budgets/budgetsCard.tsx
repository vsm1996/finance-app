import React from 'react'

interface BudgetsCardProp {
  category: string;
  maximum: number;
  theme: string;
}

const BudgetsCard = ({ category, maximum, theme }: BudgetsCardProp) => {
  return (
    <div className='w-full h-full flex items-center gap-200'>
      <span className={`min-w-1 w-1 max-w-1 h-full bg-[${theme}] rounded-lg`}></span>
      <div>
        <p className='text-5 text-grey-500 mb-50'>{category}</p>
        <p className='text-4-bold text-grey-900'>${maximum.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default BudgetsCard
