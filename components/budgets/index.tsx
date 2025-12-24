import React from 'react'
import HomepageCardTitle from '../ui/homepage-card-title'

import Data from '@/utlis/data.json'
import BudgetsCard from './budgetsCard'

const Budgets = () => {
  const budgetsArr = Data.budgets
  const total = budgetsArr.reduce((sum, budget) => { return sum += budget.maximum }, 0)

  return (
    <section className='bg-white rounded-xl p-400 flex flex-col gap-250'>
      <HomepageCardTitle title='Budgets' label='See Details' href='/budgets' />
      <div className='flex flex-col gap-200 py-400 md:flex-row'>
        <div className={`w-[240px] h-[240px] p-400 rounded-full border-40 border-t-navy border-t-[${Math.round((budgetsArr[3].maximum / total) * 240)}px] border-l-yellow border-l-[${Math.round((budgetsArr[2].maximum / total) * 240)}px] border-r-green border-r-[${Math.round((budgetsArr[0].maximum / total) * 240)}px] border-b-cyan border-b-[${Math.round((budgetsArr[1].maximum / total) * 240)}px] flex flex-col items-center justify-center`}>
          <p className='text-1 text-grey-900'> $338</p>
          <p className='text-5 text-grey-500'>of $975 limit</p>
        </div>

        <div className='flex-0 flex flex-col gap-200'>
          {budgetsArr.map(({ theme, maximum, category }) => (
            <BudgetsCard key={category} theme={theme} maximum={maximum} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Budgets
