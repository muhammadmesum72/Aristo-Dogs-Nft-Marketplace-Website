import React from 'react'
import AllCollections from '../../components/Instant/AllCollections'



const instant = () => {
  
  return (
    <>
    
    <div className='lg:ml-72 p-3 '>
        <div className='text-center p-3'>
          <h1 className='lg:text-3xl text-2xl font-bold mb-3'>The Cronos NFT OTC Marketplace</h1>
          <p className='lg:text-xl text-sm'>Your NFTs, Your Choice! YOU, the owner of the NFT get to choose the creator and platform fees! video </p>
        </div>
        <div>
          <AllCollections  />
        </div>
      </div>
    </>
  )
}

export default instant