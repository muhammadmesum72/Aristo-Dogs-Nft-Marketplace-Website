import Image from "next/image";
import React from "react";
import CronosSvg from "../../../data/CronoSvg.svg"

const LoansPools = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row relative w-full px-6">
        <div className="w-full">
          <div className="flex flex-row justify-center p-2">
            <div className="w-full">
              <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg scrollbar scrollbar-thumb-teal-700 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-800">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 bg-blue-500">
                        {" "}
                        Loan Amount{" "}
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500">
                        Interest
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500">
                        Period
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500">
                        QTY
                      </th>
                      <th scope="col" className="px-6 py-3 bg-blue-500">
                        Expires
                      </th>
                      {/* <th scope="col" className="px-6 py-3 bg-blue-500"></th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-orange-400 odd:bg-blue-900 even:bg-blue-500 dark:hover:bg-blue-500">
                      <td className="px-6 py-4 font-medium font-mono text-gray-900 dark:text-white whitespace-nowrap">
                        <div className="flex flex-row items-center">
                          <div className="flex flex-row items-center text-sm">
                            <div className="rounded-full bg-blue-200 h-6 w-6 p-1 mr-2 flex flex-col items-center justify-center">
                            <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6" />

                            </div>
                            <div className="font-mono font-semibold  text-white">40.2</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-row items-center align-middle">
                          <div className="flex flex-row items-center text-sm font-medium font-mono text-white">
                            <div className="rounded-full bg-blue-200 h-6 w-6 p-1 mr-2 flex flex-col items-center justify-center">
                            <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6" />
                            </div>
                            <div className="font-mono font-semibold">1.89</div>
                          </div>
                          <span className="ml-1 mt-0.5 text-orange-400">(4.7%)</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-orange-400">21 days</td>
                      <td className="px-6 py-3 text-orange-400">1</td>
                      <td className="px-6 py-4 text-orange-400">
                        <div>
                          <span>2d : </span>
                          <span>13h : </span>
                          <span>54m</span>
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
    </>
  );
};

export default LoansPools;
