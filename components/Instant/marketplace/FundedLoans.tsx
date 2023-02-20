import Image from "next/image";
import React from "react";
import Nft from '../../../data/Nfts/Nft (4).jpg'
import CronosSvg from "../../../data/CronoSvg.svg"


const FundedLoans = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row relative w-full px-6">
        <div className="w-full">
          <div className="flex flex-row justify-center px-2">
            <div className="w-full">
              <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg scrollbar scrollbar-thumb-teal-700 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-800">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 bg-blue-600 text-white min-w-56"
                      >
                        {" "}
                        NFT{" "}
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        Loan
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        {" "}
                        Loan + interest{" "}
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        Period
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        APY%
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 bg-blue-500 min-w-36 text-white"
                      >
                        {" "}
                        Funded{" "}
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        Solscan
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        Mint
                      </th>
                    </tr>
                  </thead>

                  {/* Single Funded Items */}
                  <tbody>
                    <tr className="text-white bg-white odd:bg-blue-900 even:bg-blue-500  dark:hover:bg-blue-500 cursor-pointer">
                      <td className="p-3">
                        <div className="flex felx-row gap-2">
                          <div className="flex -space-x-2">
                            <Image src={Nft} alt='nft' className="inline-block rounded-lg h-9 w-9 max-w-none" />
                          </div>
                          <div className="flex flex-col text-white" >
                            <div>Okay Bear #5378</div>
                            <div className="cursor-pointer text-orange-400">
                              Okay Bears
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="cursor-pointer text-green-400">
                          XbLE...s9WU
                        </div>
                      </td>
                      <td className="px-6 py-2">
                        <div className="flex flex-row items-center">
                          <div className="flex flex-row items-center text-sm">
                            <div className="rounded-full bg-sky-200  h-6 w-6 p-1 mr-2 flex flex-col items-center justify-center">
                            <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6" />

                            </div>
                            <div className="font-mono font-semibold">55</div>
                          </div>
                          <div className="text-orange-400 ml-2">+</div>
                          <div className="flex flex-row items-center text-sm text-orange-400">
                            <div className="font-mono font-semibold">2.5</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">21 days</td>
                      <td className="px-6 py-2">
                        <span className="font-semibold text-sm">100.13% </span>
                      </td>
                      <td className="px-6 py-2">
                        <div className="text-cyan-400">Funded</div>
                      </td>
                      <td className="px-6 py-2">1 day ago</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="cursor-pointer text-green-400"> View </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="cursor-pointer text-green-400">
                          JDx4...hszG
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundedLoans;
