import React from 'react'
import NftItemCard from './NftItemCard'

const AddNfts = ({closeModal}:any) => {
  return (
    <>
        <div id='addNftsModal' onClick={closeModal} className='fixed top-0 w-full h-screen bg-sky-900 bg-opacity-70 flex items-center justify-between z-10'>
        <div className='bg-primary w-3/4 mx-auto rounded-xl text-center p-6'>
            <h1 className='text-2xl'>Add Nfts</h1>
            <div>
              <NftItemCard />
            </div>
        </div>
    </div>
    </>
  )
}

export default AddNfts