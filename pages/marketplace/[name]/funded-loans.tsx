import React from 'react'
import FundedLoans from '../../../components/Instant/marketplace/FundedLoans'
import SingleCollection from '../../../components/Instant/SingleCollection'


const fundedLoans = () => {
  return (
    <div className='lg:ml-64 lg:pl-3'>
      <SingleCollection />
      <FundedLoans />
    </div>
  )
}

export default fundedLoans