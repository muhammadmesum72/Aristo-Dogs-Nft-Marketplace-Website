import React from 'react'
import BuyOrders from '../../../components/Instant/marketplace/BuyOrders'
import SingleCollection from '../../../components/Instant/SingleCollection'


const buyOrder = () => {
  return (
    <div className='lg:ml-64 lg:pl-3'>
      <SingleCollection />
      <BuyOrders />
    </div>
  )
}

export default buyOrder