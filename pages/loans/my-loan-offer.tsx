import Image from "next/image";
import Link from "next/link";
import React from "react";
import nft from '../../data/Nfts/Nft (2).jpg'

const myLoanOffer = () => {
  return (
    <div className="lg:ml-64 flex flex-col relative">
      <div className="flex flex-col justify-between">
        <div className="flex w-full justify-center grow">
          <div className="container mx-auto py-5 px-2">
            <div className="flex flex-col">
              <div className="flex flex-col items-center mt-2">
                <div className="font-bold text-2xl mb-4">Sent Loan Offers</div>
                <div className="flex flex-row w-full items-center justify-center md:justify-end md:items-end md:-mt-12 pb-2 mr-4">
                  <Link href="/loans/create">
                    <button className="bg-secondary px-5 py-3 rounded-full text-black text-sm transition hover:bg-hardSecondary font-bold">
                      <span className="pl-2">Create a Loan Listing</span>
                    </button>
                  </Link>
                </div>
                {/* Table of send offers */}
                <div className="w-full p-9">
                  <div className="w-full">
                    <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg scrollbar scrollbar-thumb-teal-700 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-800">
                      <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
                          <tr className="py-2 px-3 bg-white">
                            <th scope="col" className="px-6 py-3">
                              NFT
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Funding Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Period
                            </th>
                            <th scope="col" className="px-6 py-3">
                              LTF%
                            </th>
                            <th scope="col" className="px-6 py-3">
                              APY%
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Maturity Repayment
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Loan Status
                            </th>
                            <th scope="col" className="px-6 py-3"></th>
                          </tr>
                        </thead>
                        {/* <tbody>
                          <tr className="bg-blue-700">
                            <td colSpan={9}>
                              <div className="flex w-full flex-col items-center justify-center my-4">
                                <span className="text-center">
                                  {" "}
                                  No offers found.
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody> */}
                        <tbody className="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                          <tr className="py-2 px-3 ">
                            <td scope="col" className="px-6 py-3">
                              <Image src={nft} alt='nft' className="inline-block rounded-lg h-9 w-9 max-w-none" />
                            </td>
                            <td scope="col" className="px-6 py-3">
                              120 CRO
                            </td>
                            <td scope="col" className="px-6 py-3">
                              7 Days
                            </td>
                            <td scope="col" className="px-6 py-3">
                              100%
                            </td>
                            <td scope="col" className="px-6 py-3">
                              9%
                            </td>
                            <td scope="col" className="px-6 py-3">
                              ---
                            </td>
                            <td scope="col" className="px-6 py-3">
                              Active
                            </td>
                            <td scope="col" className="px-6 py-3"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myLoanOffer;
