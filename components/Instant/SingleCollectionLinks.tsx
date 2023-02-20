import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const SingleCollectionLinks = () => {
    const route = useRouter()
    const pathname= route.pathname

    const saleListing = '/marketplace/[name]'
    const loans = '/marketplace/[name]/loans'
    const buyOrder = '/marketplace/[name]/buy-order'
    const loanpools = '/marketplace/[name]/loan-pools'
    const fundedLoans = '/marketplace/[name]/funded-loans'
    const history = '/marketplace/[name]/history'
    const faq = '/marketplace/[name]/faq'

    const homePath = () => {
      if(pathname === saleListing){
        return true
      }
    }

    const loansPath = () => {
      if(pathname === loans){
        return true
      }
    }

    const buyOrderPath = () => {
      if(pathname === buyOrder){
        return true
      }
    }

    const loansPoolPath = () => {
      if(pathname === loanpools){
        return true
      }
    }

    const fundedLoansPath = () => {
      if(pathname === fundedLoans){
        return true
      }
    }

    const historyPath = () => {
      if(pathname === history){
        return true
      }
    }

    const faqPath = () => {
      if(pathname === faq){
        return true
      }
    }


  return (
    <>
          <div className="flex w-full justify-start mt-2">
          <div className="w-full flex flex-row justify-center md:justify-start">
            <Link href='/marketplace/bears'>
            <div className="pt-1 py-0">
              <div className={homePath() ? "px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer border-b-2 hover:bg-blue-500 hover:bg-opacity-60" : "px-4 font-bold text-sm transition lg:px-8 py-4 h-full opacity-75 cursor-pointer hover:bg-blue-500 hover:bg-opacity-60"}>
                <span className="">Sale Listings</span>
              </div>
            </div>
            </Link>

            <Link href='/marketplace/bears/loans'>
            <div className="pt-1 py-0">
              <div className={loansPath() ? "px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer border-b-2 hover:bg-blue-500 hover:bg-opacity-60" : "px-4 font-bold text-sm transition lg:px-8 py-4 h-full opacity-75 cursor-pointer hover:bg-blue-500 hover:bg-opacity-60"}>
                <span className="">Loans</span>
              </div>
            </div>
            </Link>
            <Link href='/marketplace/bears/buy-order'>
            <div className="pt-1 py-0">
              <div className={buyOrderPath() ? "px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer border-b-2 hover:bg-blue-500 hover:bg-opacity-60" : "px-4 font-bold text-sm transition lg:px-8 py-4 h-full opacity-75 cursor-pointer hover:bg-blue-500 hover:bg-opacity-60"}>
                <span className="">Buy Orders</span>
              </div>
            </div>
            </Link>
            <Link href='/marketplace/bears/loan-pools'>
            <div className="pt-1 py-0">
              <div className={loansPoolPath() ? "px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer border-b-2 hover:bg-blue-500 hover:bg-opacity-60" : "px-4 font-bold text-sm transition lg:px-8 py-4 h-full opacity-75 cursor-pointer hover:bg-blue-500 hover:bg-opacity-60"}>
                <span className="">Loan Pools</span>
              </div>
            </div>
            </Link>

            <Link href='/marketplace/bears/funded-loans'>
            <div className="pt-1 py-0">
              <div className={fundedLoansPath() ? "px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer border-b-2 hover:bg-blue-500 hover:bg-opacity-60" : "px-4 font-bold text-sm transition lg:px-8 py-4 h-full opacity-75 cursor-pointer hover:bg-blue-500 hover:bg-opacity-60"}>
                <span className="">Funded Loans</span>
              </div>
            </div>
            </Link>
            <Link href='/marketplace/bears/history'>
            <div className="pt-1 py-0">
              <div className={historyPath() ? "px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer border-b-2 hover:bg-blue-500 hover:bg-opacity-60" : "px-4 font-bold text-sm transition lg:px-8 py-4 h-full opacity-75 cursor-pointer hover:bg-blue-500 hover:bg-opacity-60"}>
                <span className="">Sold</span>
              </div>
            </div>
            </Link>
            <Link href='/marketplace/bears/faq'>
            <div className="pt-1 py-0">
              <div className={faqPath() ? "px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer border-b-2 hover:bg-blue-500 hover:bg-opacity-60" : "px-4 font-bold text-sm transition lg:px-8 py-4 h-full opacity-75 cursor-pointer hover:bg-blue-500 hover:bg-opacity-60"}>
                <span className="">Help / FAQ</span>
              </div>
            </div>
            </Link>
          </div>
        </div>
    </>
  )
}

export default SingleCollectionLinks