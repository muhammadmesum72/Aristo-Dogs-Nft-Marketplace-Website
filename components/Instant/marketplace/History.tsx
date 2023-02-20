import Image from "next/image";
import React from "react";
import Nft from '../../../data/Nfts/Nft (4).jpg'
import CronosSvg from "../../../data/CronoSvg.svg"


const History = () => {
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
                      <th scope="col" className="py-2 px-3 bg-blue-400 text-black">
                        NFT
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        Listing
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        {" "}
                        Creator Fee{" "}
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        Charity%
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        Time
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        Solscan
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                        Mint
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white odd:bg-blue-900 even:bg-blue-800">
                      <td className="p-3 min-w-56">
                        <div className="flex gap-2">
                          <div className="flex -space-x-2">
                            <Image  src={Nft} alt='nft/' className="inline-block rounded-lg h-9 w-9 max-w-none" />
                          </div>
                          <div className="flex flex-col text-white">
                            <div>Okay Bear #461</div>
                            <div className="cursor-pointer text-orange-400">
                              Okay Bears
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="cursor-pointer text-green-400">
                          3zbG...P4m8
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">0% </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">0% </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">1 day ago</td>
                      <td className="px-6 py-4 font-medium font-mono text-gray-900 dark:text-white whitespace-nowrap">
                        <div className="flex flex-row items-center">
                          <div className="flex flex-row items-center text-sm">
                            <div className="rounded-full bg-blue-200 h-6 w-6 p-1 mr-2 flex flex-col items-center justify-center">
                            <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6" />

                            </div>
                            <div className="font-mono text-white font-bold">64.7</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        <div className="cursor-pointer text-green-400"> View </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        <div className="cursor-pointer text-green-400">
                          96Sx...nySn
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

export default History;
