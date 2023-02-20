import React from 'react'
import LoansPools from '../../../components/Instant/marketplace/LoansPools'
import SingleCollection from '../../../components/Instant/SingleCollection'


const loanPools = () => {
  return (
    <div className='lg:ml-64 lg:pl-3'>
      <SingleCollection />
      <LoansPools />
    </div>
  
  )
}

export default loanPools