import Link from 'next/link'

import RightCaretIcon from '@/public/assets/images/icon-caret-right.svg'

interface HomepageCardTitleProps {
  title: string;
  label: string;
  href: string;
}

const HomepageCardTitle = ({ title, label, href }: HomepageCardTitleProps) => {
  return (
    <div className='flex justify-between'>
      <h2 className='text-2 text-grey-900'> {title} </h2>

      <Link href={href} className='flex gap-150 text-4 text-grey-500 items-center group hover:text-grey-900'>
        {label}
        <span className='transition-all duration-200 ease-out group-hover:translate-x-1'>
          <RightCaretIcon />
        </span>
      </Link>
    </div>
  )
}

export default HomepageCardTitle
