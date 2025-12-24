'use client'

import { ChangeEvent, useState } from 'react'

import Data from '@/utlis/data.json'
import TransactionCard from './transactionCard'

let transactions = Data.transactions

const TableSection = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [sortOption, setSortOption] = useState<string>('')
  const [categoryOption, setCategoryOption] = useState<string>('')
  const [filteredTransactions, setFilteredTransactions] = useState(transactions)


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let term = e.target.value
    let newTranscations = transactions.filter((transaction) => transaction.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
    setSearchTerm(term)
    setFilteredTransactions(newTranscations)
  }

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value)
    reduceSort()
  }

  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategoryOption(e.target.value)

    switch (e.target.value) {
      case 'all':
        setFilteredTransactions(transactions)
        break;
      case 'entertainment':
        let entertainment = filteredTransactions.filter(transaction => transaction.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredTransactions(entertainment)
        break;
      case 'bills':
        let bills = filteredTransactions.filter(transaction => transaction.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredTransactions(bills)
        break;
      case 'groceries':
        let groceries = filteredTransactions.filter(transaction => transaction.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredTransactions(groceries)
        break;
      case 'dining out':
        let diningOut = filteredTransactions.filter(transaction => transaction.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredTransactions(diningOut)
        break;
      case 'transportation':
        let transportation = filteredTransactions.filter(transaction => transaction.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredTransactions(transportation)
        break;
      case 'education':
        let education = filteredTransactions.filter(transaction => transaction.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredTransactions(education)
        break;
      case 'personal care':
        let personalCare = filteredTransactions.filter(transaction => transaction.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredTransactions(personalCare)
        break;
      case 'lifestyle':
        let lifestyle = filteredTransactions.filter(transaction => transaction.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredTransactions(lifestyle)
        break;
      case 'shopping':
        let shopping = filteredTransactions.filter(transaction => transaction.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredTransactions(shopping)
        break;
      case 'general':
        let general = filteredTransactions.filter(transaction => transaction.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredTransactions(general)
        break;
      default:
        let def = searchTerm ? transactions.filter((transaction) => transaction.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) : transactions
        setFilteredTransactions(def)
        break;
    }
  }

  const reduceSort = () => {
    switch (sortOption) {
      case 'latest':
        let latest = filteredTransactions.sort((a, b) => a.date.localeCompare(b.date))
        setFilteredTransactions(latest)
        break;
      case 'oldest':
        let oldest = filteredTransactions.sort((a, b) => b.date.localeCompare(a.date))
        setFilteredTransactions(oldest)
        break;
      case 'a-z':
        let aToz = filteredTransactions.sort((a, b) => b.name.toLocaleLowerCase().localeCompare(a.name.toLocaleLowerCase()))
        setFilteredTransactions(aToz)
        break;
      case 'z-a':
        let zToa = filteredTransactions.sort((a, b) => a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()))
        setFilteredTransactions(zToa)
        break;
      case 'highest':
        let highest = filteredTransactions.sort((a, b) => a.amount - b.amount)
        setFilteredTransactions(highest)
        break;
      case 'lowest':
        let lowest = filteredTransactions.sort((a, b) => b.amount - a.amount)
        setFilteredTransactions(lowest)
        break;
      default:
        let def = searchTerm ? transactions.filter((transaction) => transaction.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) : transactions
        setFilteredTransactions(def)
        break;
    }
  }

  return (
    <section className='bg-white rounded-xl p-400'>
      <div className='flex items-center justify-between'>
        <div className='border border-beige-500 px-250 py-150 rounded-lg'>
          <input id="search input" className='outline-0 border-0 text-beige-500' value={searchTerm} placeholder='Search transaction' onChange={(e) => handleSearch(e)} />
        </div>
        <div className='flex items-center gap-250'>
          <label htmlFor='sort-select' className='text-4 text-grey-500'>Sort by</label>
          <select id='sort-select' value={sortOption} onChange={handleSort} className='text-4 text-grey-900 border border-beige-100 p-150 rounded-md'>
            <option value=''></option>
            <option value='latest'>Latest</option>
            <option value='oldest'>Oldest</option>
            <option value='a-z'>A to Z</option>
            <option value='z-a'>Z to A</option>
            <option value='highest'>Highest</option>
            <option value='lowest'>Lowest</option>
          </select>
        </div>
        <div className='flex items-center gap-250'>
          <label htmlFor='cat-select' className='text-4 text-grey-500'>Category</label>
          <select id='cat-select' value={categoryOption} onChange={handleCategory} className='text-4 text-grey-900 border border-beige-100 p-150 rounded-md'>
            <option value='all'>All Transactions</option>
            <option value='entertainment'>Entertainment</option>
            <option value='bills'>Bills</option>
            <option value='groceries'>Groceries</option>
            <option value='dining out'>Dining Out</option>
            <option value='transportation'>Transportation</option>
            <option value='personal care'>Personal Care</option>
            <option value='education'>Education</option>
            <option value='lifestyle'>Lifestyle</option>
            <option value='shopping'>Shopping</option>
            <option value='general'>General</option>
          </select>
        </div>
      </div>
      <table className='w-full mt-400'>
        <thead>
          <tr className='flex items-center justify-between mb-400 px-200'>
            <th className='shrink-1 text-5 text-grey-500'>Recipient / Sender</th>
            <th className='shrink-1 text-5 text-grey-500'>
              Category
            </th>
            <th className='shrink-1 text-5 text-grey-500'>
              Transaction Date
            </th>
            <th className='shrink-1 text-5 text-grey-500'>
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <TransactionCard key={index} transaction={transaction} index={index} length={transactions.length} />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TableSection
