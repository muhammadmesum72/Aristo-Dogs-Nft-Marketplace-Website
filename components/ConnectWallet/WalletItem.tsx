import Image from 'next/image'
import React from 'react'

const WalletItem = ({name, icon}:any) => {
  return (
    <div className='border-2 border-primary hover:bg-primary transition duration-150 ease-in-out rounded-xl mt-3 cursor-pointer inline-flex items-center w-full overflow-hidden p-3'>
      <Image src={icon} alt='wallet' className='w-12 rounded-lg' />
        <h1 className='p-3'>{name}</h1>
    </div>
  )
}

export default WalletItem