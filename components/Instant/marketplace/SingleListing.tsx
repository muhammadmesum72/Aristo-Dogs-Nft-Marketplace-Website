import Image from "next/image";
import Link from "next/link";
import React from "react";
import CronosSvg from "../../../data/CronoSvg.svg"

import {
  AiFillCopy,
  AiFillDownSquare,
  AiOutlineDown,
  AiOutlineDownSquare,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import nft from "../../../data/Nfts/Nft (1).jpeg";

const SingleListing = () => {
  const [showAttributes, setShowAttributes] = React.useState(false);
  const clickAttrubutesBtn = () => {
    setShowAttributes((prev) => !prev);
  };
  const [showDetails, setShowDetails] = React.useState(false);
  const clickDetailssBtn = () => {
    setShowDetails((prev) => !prev);
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-col justify-center p-3 ">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-5/12 flex justify-center items-center content-center align-middle">
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col w-full items-center">
                <div className="font-bold text-2xl">y00t #899</div>
                <div className="text-xl">
                  <span className="text-orange-600">Y00ts</span>
                </div>
              </div>
              <Image src={nft} alt="nft" className="rounded-xl" />
              <div className="mt-5 w-full">
                <div>
                  <button
                    onClick={clickAttrubutesBtn}
                    className="flex items-center w-full justify-between bg-blue-500 hover:bg-blue-400 hover:bg-opacity-50 p-2 transition-colors group rounded-t-md"
                  >
                    <div className="group-hover:pl-2 transition-all">
                      <span>Attributes (5)</span>
                    </div>
                    {showAttributes ? (
                      <div className="w-3 mr-3 transition-all duration-200 rotate-180">
                        <AiOutlineDownSquare />
                      </div>
                    ) : (
                      <div className="w-3 mr-3 transition-all duration-200 rotate-0">
                        <AiOutlineDownSquare />
                      </div>
                    )}
                  </button>
                </div>
                {showAttributes ? (
                  <div className="bg-blue-800">
                    <div className="flex flex-wrap w-full p-4 bg-blue-600">
                      {/* Attrubute 1  */}
                      <div className="rounded-md text-black p-2 bg-blue-500 flex flex-col mr-2 mt-2">
                        <div className="text-blue-200 uppercase text-xs mt-1">
                          Background
                        </div>
                        <div className="opacity-80">Snow White</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="mt-5">
                <div className="flex items-center w-full space-x-5">
                  <Link href="www.solscan.com" target="_blank">
                    <button className="border-secondary text-secondary border-1 p-2 rounded-full px-6 grow">
                      View on SolScan
                    </button>
                  </Link>
                  <Link href="www.solscan.com" target="_blank">
                    <button className="border-secondary text-secondary border-1 p-2 rounded-full px-6 grow">
                      View on Explorer
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-7/12 lg:mt-0 lg:pl-6 2xl:pl-16 flex flex-col items-center lg:items-start">
            <div className="mt-5 w-full">
              
              <div className="rounded relative bg-blue-700 p-2 px-3 mt-4">
                <div className="flex flex-row justify-between">
                  <div className="font-bold text-2xl text-green-300">
                    For Sale
                  </div>
                  <div className="flex items-center justify-center px-3 py-1 rounded-full bg-cyan-900 bg-opacity-70 cursor-pointer ">
                      <FaTwitter className="text-2xl pr-2" />
                      <span className="lg:hidden">Tweet</span>
                      <span className="hidden lg:inline-block">
                        Share on Twitter
                      </span>
                    </div>
                </div>
                <div className="py-3">
                  <hr className="border-blue-500" />
                </div>

                <div>
                  <div>
                    <div className="flex flex-row gap-3">
                      <div className="flex flex-col">
                        <div className="inline-block">
                          <div>
                            <div className="flex flex-row items-center">
                              <div className="text-base text-sm text-green-300">
                                <span>Price</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center text-xl">
                          <div className="rounded-full bg-blue-200 h-6 w-6 p-1 mr-2 flex flex-col items-center justify-center">
                          <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6" />

                          </div>
                          <div className="font-mono font-semibold">300</div>
                          <div className="font-semibold ml-2 opacity-90">
                             CRO
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-2">
                        <button className="bg-primary opacity-90 hover:opacity-100 transtion px-4 py-2 rounded-full w-auto ">
                          {" "}
                          Buy Now{" "}
                        </button>
                        <button className="bg-cyan-400 opacity-90 hover:opacity-100 text-black px-4 py-2 rounded-full w-auto">
                          Make an offer{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-3 mt-2">
                  <hr className="border-blue-500" />
                </div>
                <div className="flex flex-row flex-wrap gap-4 mt-2">
                  <div>
                    <div>
                      <div>
                        <div className="inline-block">
                          <div>
                            <div className="flex flex-row items-center">
                              <div className="text-base text-sm text-green-400">
                                {" "}
                                Floor{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center text-sm">
                          <div className="rounded-full bg-blue-200 h-6 w-6 p-1 mr-2 flex flex-col items-center justify-center">
                        <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6" />
                          </div>
                          <div className="font-mono font-semibold">9.4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div className="inline-block">
                          <div>
                            <div className="flex flex-row items-center">
                              <div className="text-base text-sm text-green-400">
                                {" "}
                                Floor{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center text-sm">
                          <div className="rounded-full bg-blue-200 h-6 w-6 p-1 mr-2 flex flex-col items-center justify-center">
                          <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6" />
                          </div>
                          <div className="font-mono font-semibold">9.4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div className="inline-block">
                          <div>
                            <div className="flex flex-row items-center">
                              <div className="text-base text-sm text-green-400">
                                {" "}
                                How Rare{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center text-sm">
                          {/* <div className="rounded-full bg-blue-800 h-6 w-6 p-1 mr-2 flex flex-col items-center justify-center"></div> */}
                          <div className="font-mono font-semibold">9.4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div className="inline-block">
                          <div>
                            <div className="flex flex-row items-center">
                              <div className="text-base text-sm text-green-400">
                                {" "}
                                Moon Rank{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center text-sm">
                          {/* <div className="rounded-full bg-blue-800 h-6 w-6 p-1 mr-2 flex flex-col items-center justify-center"></div> */}
                          <div className="font-mono font-semibold">9.4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <button onClick={clickDetailssBtn} className="flex items-center w-full justify-between bg-blue-500 hover:bg-green hover:bg-opacity-50 p-2 transition-colors group rounded-t-md">
                    <div className="group-hover:pl-2 transition-all">
                      <span className=""> Details </span>
                    </div>
                    {showDetails ?  <AiFillDownSquare className="w-9 mr-3 transition-all duration-200  " /> :  <AiFillDownSquare className="w-9 mr-3 transition-all duration-200 rotate-180  " /> }
                   
                  </button>
                </div>
                {/* Details List */}
                {showDetails ? 
                  <div className="bg-blue-800">
                  <div className="flex flex-col w-full p-4 bg-blue-700">
                    <div className="flex justify-between max-w-sm">
                      <div>Mint Address</div>
                      <div className="text-white text-opacity-75">
                        <div className="flex hover:text-green cursor-pointer relative">
                          <div className="flex">
                            <div>BNHV...WbBb</div>
                            <div><AiFillCopy /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between max-w-sm">
                      <div>Owner</div>
                      <div className="flex hover:text-green cursor-pointer relative text-white text-opacity-75">
                        <div className="flex">
                          <div>Fqgd...7u6Y</div>
                          <div><AiFillCopy /></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between max-w-sm">
                      <div>Charity Wallet </div>
                      <div className="flex hover:text-green cursor-pointer relative text-white text-opacity-75">
                        <div className="flex">
                          <div>5z1v...wzw3</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between max-w-sm">
                      <div>Platform Fee</div>
                      <div className="text-white text-opacity-75">
                        <span className="mr-1">🐠</span> 1%{" "}
                      </div>
                    </div>
                    <div className="flex justify-between max-w-sm">
                      <div>Chosen Creator Fee</div>
                      <div className="text-white text-opacity-75">0%</div>
                    </div>
                    <div className="flex justify-between max-w-sm">
                      <div> Chosen Charity Share </div>
                      <div className="text-white text-opacity-75">0%</div>
                    </div>
                    <div className="flex justify-between max-w-sm">
                      <div>Listing/Bidding/Cancel</div>
                      <div className="text-white text-opacity-75">
                        0.002 CRO
                      </div>
                    </div>
                  </div>
                </div>
                :
                ""}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleListing;
