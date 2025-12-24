import React from 'react'
import Image from 'next/image'

const TransactionCard = ({ transaction, index, length }: any) => {
  const { name, amount, avatar, category, date, recurring } = transaction

  const options: any = { weekday: undefined, year: 'numeric', month: 'short', day: 'numeric' };

  const formatCurrency = (amount: number, currency = 'USD', locale = 'en-US') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  const currency = formatCurrency(amount)

  const trueDate = new Date(date)
  return (
    <tr className={` p-200 flex items-center justify-between border-t border-t-grey-100 ${index !== length - 1 && 'border-b border-b-grey-100'}`}>
      <td className='flex-1 inline-flex items-center gap-200'>
        <div className='relative w-500 h-500 overflow-hidden rounded-full'>
          <Image src={avatar} alt='' width={40} height={40} />
        </div>
        <p className='text-4-bold text-grey-900'>{name}</p>

      </td>
      <td className='flex-1 text-5 text-grey-500'>{category}</td>
      <td className='flex-1 text-5 text-grey-500'>{trueDate.toLocaleDateString("en-GB", options)}</td>

      <td className='text-5 text-grey-500'>{currency}</td>
    </tr>
  )
}

export default TransactionCard
