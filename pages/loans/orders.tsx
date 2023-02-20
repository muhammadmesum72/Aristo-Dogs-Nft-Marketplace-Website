import React from 'react'
import LoansHeader from '../../components/loans/LoansHeader'

const orders = () => {
  return (
    <div className='lg:ml-72'>
        <LoansHeader />
        <div className='text-center'>
          <h2>This collection does not have any loan pool yet.</h2>
        </div>
    </div>
  )
}

export default orders