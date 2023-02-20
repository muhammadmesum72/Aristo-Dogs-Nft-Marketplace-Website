import React from 'react'
import NftAuctionItem from './Nft Auction Item'

const NftAuction = () => {
  return (
    <div className='container mx-auto p-6'>

        <div className='text-center'>
            <h1 className='text-3xl font-bold mb-3'>NFT Auctions</h1>
            <p className='lg:w-3/4 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente velit quia blanditiis neque provident nisi!</p>
        </div>
        <div className="pt-6 grid grid-cols-2 gap-3 lg:px-9 lg:pt-6 lg:pb-6 lg:grid-cols-4">
        <NftAuctionItem />
        </div>
    </div>
  )
}

export default NftAuction