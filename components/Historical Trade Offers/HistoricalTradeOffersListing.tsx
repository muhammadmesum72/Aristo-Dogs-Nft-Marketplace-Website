import React from 'react'
import HistoricalTradeSingleOffer from './HistoricalTradeSingleOffer'

const HistoricalTradeOffersListing = () => {
  return (
    <>
         <div>
      <div className="w-full rounded-lg bg-sky-900 my-6">
        <div className="w-full">
          <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg scrollbar scrollbar-thumb-teal-700 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-800">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 tracking-wider bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    colSpan={2}
                    scope="col"
                    className="py-3 px-3 bg-yawwwtwo-blue-600"
                  >
                    What I Receive
                  </th>
                  <th
                    colSpan={4}
                    scope="col"
                    className="px-6 py-3 bg-yawwwtwo-blue-500"
                  >
                    What I Offer
                  </th>
                </tr>
              </thead>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-2 px-3 bg-yawwwtwo-blue-600">
                    NFT(s)
                  </th>
                  <th scope="col" className="px-6 py-3 bg-yawwwtwo-blue-600">
                    SOL
                  </th>
                  <th scope="col" className="px-6 py-3 bg-yawwwtwo-blue-500">
                    NFT(s)
                  </th>
                  <th scope="col" className="px-6 py-3 bg-yawwwtwo-blue-500">
                    SOL
                  </th>
                  <th scope="col" className="px-6 py-3 bg-yawwwtwo-blue-500">
                    Offer From
                  </th>
                  <th scope="col" className="px-6 py-3 bg-yawwwtwo-blue-500">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <HistoricalTradeSingleOffer />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HistoricalTradeOffersListing