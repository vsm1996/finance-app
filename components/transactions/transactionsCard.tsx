import Image from "next/image"
import { TransactionItem } from "."

interface CardProps extends TransactionItem {
  index: number;
  length: number;
  numPos: boolean;
}

const TransactionsCard = ({ index, length, avatar, name, date, amount, numPos, }: CardProps) => {

  const standardizedAmmount = numPos ? amount : amount * -1
  const indicator = numPos ? '+' : '-'

  return (
    <div className={`flex items-center justify-between ${index !== length - 1 && 'border-b-1 border-grey-100 pb-250'}`}>
      <div className='flex items-center gap-200'>
        <div className='overflow-hidden relative rounded-full w-400 h-400'>
          <Image src={avatar} alt={`${name} avatar`} fill />
        </div>
        <p className='text-4-bold text-grey-900'> {name} </p>
      </div>
      <div className='flex flex-col items-end gap-100'>
        <p className={`${numPos ? 'text-green' : 'text-grey-900'} text-4-bold`}> {indicator}${standardizedAmmount.toFixed(2)} </p>
        <p className='text-5 text-grey-500'> {(new Date(date)).toDateString()} </p>
      </div>
    </div>
  )
}

export default TransactionsCard
