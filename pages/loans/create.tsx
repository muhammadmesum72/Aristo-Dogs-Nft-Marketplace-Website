import React from 'react'
import CreateLoanListing from '../../components/loans/LoanListing'
import LoansHeader from '../../components/loans/LoansHeader'

const create = () => {
  return (
    <div className='lg:ml-72'>
      <LoansHeader />
        <CreateLoanListing />
    </div>
  )
}

export default create