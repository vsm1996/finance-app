import React from 'react'

interface CardProps {
  variation?: 'light' | 'dark';
  classNames?: string;
  category: string;
  amount: string;
}

const containerVariations = {
  light: 'bg-white',
  dark: 'bg-grey-900'
}

const categoryVariations = {
  light: 'text-grey-500',
  dark: 'text-white'
}

const amountVariations = {
  light: 'bg-white text-grey-900',
  dark: 'text-white'
}

const Card = ({ variation = 'light', classNames, category, amount }: CardProps) => {
  return (
    <div className={`
      p-300
      rounded-xl
      flex-1
      ${containerVariations[variation]}
      ${classNames} 
    `}>
      <p className={`${categoryVariations[variation]} text-4 mb-150`}>{category}</p>
      <p className={`${amountVariations[variation]} text-1`}>{`$${amount}`}</p>
    </div>
  )
}

export default Card
