import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillDownSquare,
  AiOutlineArrowDown,
  AiOutlineDownSquare,
  AiOutlineVerified,
} from "react-icons/ai";
import { FaArrowDown, FaTwitter } from "react-icons/fa";
import nft from "../../data/Nfts/Nft (1).jpg";
import CronosSvg from "../../data/CronoSvg.svg"

const SingleLoanListing = () => {
  const [showAttributes, setShowAttributes] = useState(false);
  const clickAttrubutesBtn = () => {
    setShowAttributes((prev) => !prev);
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-5/12 flex justify-center items-center content-center align-middle">
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col w-full items-center">
                <div className="font-bold text-2xl">y00t #899</div>
                <div className="text-xl">
                  <span className="text-orange-600">Y00ts</span>
                </div>
                <div className="my-2">
                  <div className="text-sky-300 flex flex-row items-center gap-1">
                    <AiOutlineVerified />
                    <span>Verified Yoots</span>
                  </div>
                </div>
              </div>
              <Image src={nft} alt="nft" className="rounded-xl" />
              <div className="mt-5 w-full">
                <div>
                  <button
                    onClick={clickAttrubutesBtn}
                    className="flex items-center w-full justify-between bg-cyan-800 hover:bg-cyan-900 p-2 transition-colors group rounded-t-md"
                  >
                    <div className="group-hover:pl-2 transition-all font-bold">
                      <span>Attributes (5)</span>
                    </div>
                    <div className="group-hover:pr-2 transition-all">
                    {showAttributes ? (
                      <div className="w-3 mr-3 transition-all duration-200 rotate-180">
                        <AiOutlineDownSquare />
                      </div>
                    ) : (
                      <div className="w-3 mr-3 transition-all duration-200 rotate-0">
                        <AiOutlineDownSquare />
                      </div>
                    )}
                    </div>
                  </button>
                </div>
                {showAttributes ? (
                  <div className="bg-blue-800">
                    <div className="flex flex-wrap w-full p-4 bg-blue-600">
                      {/* Attrubute 1  */}
                      <div className="rounded-md text-black p-2 bg-blue-500 flex flex-col mr-2 mt-2 shadow-xl">
                        <div className="text-blue-200 uppercase text-xs mt-1">
                          Background
                        </div>
                        <div className="">Snow White</div>
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
          <div className="w-full lg:w-7/12 mt-5 lg:pt-0 lg:pl-16 flex flex-col items-center lg:items-start">
            <div className="mt-5 w-full">
              <div className="text-xl mb-1">Loan Listing</div>
              <div className="rounded-lg relative bg-cyan-900 p-2 px-3 mt-4">
                <div className="flex flex-row justify-between items-center">
                  <div className="font-bold text-2xl ">
                    Funded Loan
                  </div>
                  <Link
                    href="www.twitter.com"
                    title="Share on Twitter"
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    <div className="flex items-center justify-center px-3 py-1 rounded-full bg-primary bg-opacity-70 hover:bg-opacity-100 transition">
                      <FaTwitter className="text-2xl pr-2" />
                      <span className="lg:hidden">Tweet</span>
                      <span className="hidden lg:inline-block">
                        Share on Twitter
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="py-3">
                  <hr className="border-blue-500" />
                </div>
                {/* Loan Deatils */}
                <div>
                  <div>
                    <div>
                      <div className="flex flex-row flex-wrap gap-4 mb-4">
                        <div>
                          <div>
                            <div className="inline-block">
                              <div>
                                <div
                                  className="flex flex-row items-center"
                                >
                                  <div
                                    className="text-base text-sm text-primary font-bold"
                                  >Floor</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-center text-sm">
            <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6 bg-white rounded-full mr-3" />
                              
                              <div className=" font-semibold">
                                151.8 CRO
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="mb-2 font-bold text-primary">
                            <span>

                          Loan funded at: 
                            </span>
                          <span className="text-white font-normal pl-3">
                            Fri, 23 Dec 2022 10:55:48 GMT
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4 mb-4">
                        <div className="text-base font-bold text-sm text-primary text-primary ">
                          Time left
                        </div>
                        <div>
                          <span>13d : </span>
                          <span>23h : </span>
                          <span>19m</span>
                        </div>
                      </div>
                      <div className="mt-4 mb-1 text-md">Loan Terms</div>
                      <div className="flex flex-row flex-wrap gap-4">
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                          <div>
                            <div className="inline-block">
                              <div>
                                <div
                                  className="text-base text-sm text-primary font-bold"
                                  
                                >
                                  Funded
                                </div>
                              </div>
                              
                            </div>
                            <div className="flex flex-row">
                              <div className=" font-semibold">
                                140.8
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="inline-block">
                            <div>
                              <div
                                className="text-base text-sm text-primary font-bold"
                                
                              >
                                {" "}
                                Days{" "}
                              </div>
                            </div>
                            
                          </div>
                          <div className="text-base font-semibold text-sm">
                            14 Days{" "}
                          </div>
                        </div>
                        <div>
                          <div className="inline-block">
                            <div>
                              <div
                                className="text-base text-sm text-primary font-bold"
                                
                              >
                                {" "}
                                LTF{" "}
                              </div>
                            </div>

                          </div>
                          <div className="text-base font-semibold text-sm">
                            92.6%
                          </div>
                        </div>
                        <div>
                          <div className="inline-block">
                            <div>
                              <div
                                className="text-base text-sm text-primary font-bold"
                                
                              >
                                {" "}
                                APY{" "}
                              </div>
                            </div>
                          </div>
                          <div className="text-base font-semibold text-sm">
                            267.01%{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-4 mt-4">
                      <div>
                        <div className="inline-block">
                          <div>
                            <div
                              className="text-base text-sm text-primary font-bold"
                              
                            >
                              Current Profit{" "}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="pt-0.5 pb-1 flex">
            <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6 bg-white rounded-full mr-2" />
                            <div className=" font-semibold">2.16</div>
                            <span className="ml-1">(1.5%)</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="inline-block">
                          <div>
                            <div
                              className="text-base text-sm text-primary font-bold"
                              
                            >
                              Max Profit{" "}
                              <span className="text-orange">
                                (Day 14){" "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="pt-0.5 pb-1 flex">
            <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6 bg-white rounded-full mr-2" />
                          <div className=" font-semibold">7.2</div>
                          <span className="ml-1">(5.1%)</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex  gap-6 py-3">
                      <div>
                        <button className="px-6 py-3 bg-hardSecondary rounded-full text-sm font-bold text-black hover:bg-cyan-500 transition">Fund Loan</button>
                      </div>
                      <div>
                        <button className="px-6 py-3 bg-cyan-300 rounded-full text-sm font-bold text-black hover:bg-cyan-400 transition">Make an Offer</button>
                      </div>
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

export default SingleLoanListing;
