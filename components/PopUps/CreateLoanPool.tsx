import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import CronosSvg from "../../data/CronoSvg.svg"
import Image from 'next/image';



const CreateLoanPool = () => {
  return (
    <div>
         <div className="flex flex-row items-center w-full shadow-xl">
            <div className="justify-self-start flex-1"></div>
            <div className="font-bold justify-self-center lg:text-2xl">
              Create Loan Pool
            </div>
            <div className="justify-self-end flex-1 flex justify-end">
              <AiFillCloseCircle
                className="text-red-600 lg:text-2xl cursor-pointer"
                // onClick={closeModal}
              />
            </div>
          </div>
<div className="h-96 overflow-y-scroll">

          <div className="flex items-center mx-auto w-full flex-col flex-wrap max-w-3xl justify-center gap-2 pb-2 px-0 md:px-2 lg:px-4 mb-1">
            <div className="flex flex-col items-center text-center">
              <span className="text-orange-600 text-lg">
                {" "}
                Choose Collection{" "}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col w-full justify-center items-center relative">
              <div className="w-full max-w-md">
                <input
                  type="text"
                  className="w-full max-w-md px-4 h-9 outline-none border-gray-200 border-1 border-opacity-25 focus:ring focus:ring-primary-500 focus:ring-opacity-60 focus:border-primary-500 rounded-full bg-transparent focus:bg-transparent transition-all"
                  placeholder="Search for Collection"
                />
              </div>
            </div>
          </div>

          <div className="min-h-56">
            <div>
              <div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-orange text-lg">
                    {" "}
                    Loan Pool for <span className="font-semibold"> ... </span>
                  </span>
                  <span className="text-sm font-light">
                    {" "}
                    Specify terms per NFT. After expiration time, your loan pool
                    becomes inactive. You can always extend or withdraw it.{" "}
                  </span>
                </div>
                <div className="flex flex-col items-center mt-6">
                  {" "}
                  Terms Per Loan{" "}
                </div>

                <div className="flex flex-row flex-wrap items-center justify-center gap-x-6">
                  <div>
                    <div className="inline-block">
                      <div>
                        <div className="flex flex-row items-center">
                          <div className="text-base text-sm text-green">
                            {" "}
                            Loan Amount
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="flex w-full items-start flex-col min-w-36 max-w-36">
                        <div className="">
                          <label></label>
                        </div>
                        <div className="w-full">
                          <div className="relative">
                            <div className="flex items-center justify-between border border-gray-400 rounded-lg">
                              <input
                                className="w-full px-2 h-9 outline-none border-none focus:ring focus:ring-primary-500 focus:ring-opacity-60 focus:border-primary-500 rounded-lg bg-transparent focus:bg-transparent transition-all pl-10"
                                type="number"
                                step="0.001"
                                max="100000"
                              />
                              <div className="absolute w-10 h-9 rounded-full mr-3 flex justify-center items-center">
                        <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6" />

                              </div>
                              <div className="opacity-0 scale-0 absolute w-10 h-9 transition origin-center duration-500 right-0 rounded-full hover:text-pink cursor-pointer flex justify-center items-center"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center pl-2">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="inline-block">
                      <div>
                        <div className="flex flex-row items-center">
                          <div className="text-base text-sm text-green">
                            {" "}
                            Interest Amount{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="flex w-full items-start flex-col min-w-36 max-w-36">
                        <div className="">
                          <label></label>
                        </div>
                        <div className="w-full">
                          <div className="relative">
                            <div className="flex items-center justify-between border border-gray-400  rounded-lg">
                              <input
                                className="w-full px-2 h-9 outline-none border-none focus:ring focus:ring-primary-500 focus:ring-opacity-60 focus:border-primary-500 rounded-lg bg-transparent focus:bg-transparent transition-all pl-10"
                                type="number"
                                step="0.001"
                                max="100000"
                              />
                              <div className="absolute w-10 h-9 rounded-full mr-3 flex justify-center items-center">
                        <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6" />

                              </div>
                              <div className="opacity-0 scale-0 absolute w-10 h-9 transition origin-center duration-500 right-0 rounded-full hover:text-pink cursor-pointer flex justify-center items-center"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center pl-2">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="inline-block">
                      <div>
                        <div className="flex flex-row items-center">
                          <div className="text-base text-sm text-green">
                            {" "}
                            Days{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="flex w-full items-start flex-col min-w-36 max-w-36">
                        <div className="">
                          <label></label>
                        </div>
                        <div className="w-full">
                          <div className="relative">
                            <div className="flex items-center justify-between border border-gray-400  rounded-lg">
                            <select  className="w-full px-2 h-9 outline-none border-none focus:ring focus:ring-primary-500 focus:ring-opacity-60 focus:border-primary-500 rounded-lg bg-transparent focus:bg-transparent transition-all pl-10">
                                <option value="" className='bg-primary text-white p-4'>3 Days</option>
                                <option value="" className='bg-primary text-white p-4'>6 Days</option>
                                <option value="" className='bg-primary text-white p-4'>9 Days</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>

                <div>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 mt-4">
                      <div>
                        <div className="inline-block">
                          <div>
                            <div className="text-base text-sm text-green-400">
                              
                              {" "}
                              Min Profit{" "}
                              <span className="text-orange-400">
                                (Day 2.1){" "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="pt-0.5 pb-1 flex">
                        <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6 mr-2" />
                            <div className="font-mono font-semibold">0</div>
                            <span className="ml-1">(0%)</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="inline-block">
                          <div>
                            <div className="text-base text-sm text-green-400">
                              {" "}
                              Max Profit{" "}
                              <span className="text-orange-400">
                                (Day 2.1){" "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="pt-0.5 pb-1 flex">
                        <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6 mr-2" />

                            <div className="font-mono font-semibold">0</div>
                            <span className="ml-1">(0%)</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="inline-block">
                          <div>
                            <div className="text-base text-sm text-green-400">
                              LTF %
                              <span className="text-orange-400">
                                (Day 2.1){" "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="pt-0.5 pb-1 flex">
                            <div className="font-mono font-semibold">0</div>
                            <span className="ml-1">(0%)</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="inline-block">
                          <div>
                            <div className="text-base text-sm text-green-400">
                              APY %
                              <span className="text-orange-400">
                                0%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="pt-0.5 pb-1 flex">
                            <div className="font-mono font-semibold">0</div>
                            <span className="ml-1">(0%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-center text-xl py-3">
                      <h2>PoolTerms</h2>
                    </div>
                    <div className="flex  items-center justify-center gap-6">
                      <div className="flex flex-col">
                        <label htmlFor="1">Quantity In Pool</label>
                        <input type="text" className="px-3 w-36 py-2 rounded-lg bg-primary border-white border-1 border-opacity-60" />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="1">Pool Expiration</label>
                        <input type="text" className="px-3 w-36 py-2 rounded-lg bg-primary border-white border-1 border-opacity-60" />
                      </div>
                    </div>
                  </div>

                  <div className="flex  items-center justify-center gap-6 py-6">
                    <div>
                      <button className="rounded-full px-12 py-2 border-secondary border-1 text-secondary">Cancel</button>
                    </div>
                    <div>
                      <button className="rounded-full px-12 py-2 bg-secondary text-black font- text-secondary">Create Loan Pool</button>
                    </div>
                  </div>
                {/*  */}
              </div>
            </div>
          </div>
</div>
    </div>
  )
}

export default CreateLoanPool