import React from 'react'
import Loans from '../../../components/Instant/marketplace/Loans'
import SingleCollection from '../../../components/Instant/SingleCollection'

const loans = () => {
  return (
    <div className='lg:ml-64 lg:pl-3'>
      <SingleCollection />
      <Loans />
    </div>
  )
}

export default loans