import React from 'react'
import ListingLoans from '../../components/loans/ListingLoans'
import LoansHeader from '../../components/loans/LoansHeader'

const listings = () => {
  return (
    <div className='lg:ml-72'>
      {/* <ListingLoans /> */}
      <LoansHeader/>
      <ListingLoans />
    </div>
  )
}

export default listings