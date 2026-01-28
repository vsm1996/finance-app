import React, { useCallback } from 'react'
import Image from 'next/image';
import HomepageCardTitle from '../ui/homepage-card-title'

import Data from '@/utlis/data.json'
import TransactionsCard from './transactionsCard';

export interface TransactionItem {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
}

const transactionsList: TransactionItem[] = Data.transactions.slice(0, 5)

const Transactions = () => {
  const isPositive = useCallback((num: number) => {
    return num > 0
  }, [])


  return (
    <section className='bg-white rounded-xl p-400 flex flex-col gap-400 h-full'>
      <HomepageCardTitle title='Transactions' label='View All' href='/transactions' />
      {transactionsList.length > 0 && transactionsList.map((transaction, index) => {
        const { avatar, name, date, amount, category, recurring } = transaction

        const numPos = isPositive(amount)

        return (
          <TransactionsCard
            key={`${index}${amount}`}
            index={index}
            length={transactionsList.length}
            avatar={avatar}
            name={name}
            date={date}
            numPos={numPos}
            category={category}
            amount={amount}
            recurring={recurring}
          />
        )
      }
      )}
    </section>
  )
}

export default Transactions
