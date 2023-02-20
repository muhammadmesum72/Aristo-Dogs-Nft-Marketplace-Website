import React from 'react'
import History from '../../components/loans/History'
import LoansHeader from '../../components/loans/LoansHeader'

const history = () => {
  return (
    <div className='lg:ml-72'>
        <LoansHeader />
        <History />
    </div>
  )
}

export default history