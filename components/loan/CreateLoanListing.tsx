import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillDownSquare,
  AiOutlineArrowDown,
  AiOutlineDownSquare,
  AiOutlineVerified
} from "react-icons/ai";
import { FaArrowDown, FaTwitter } from "react-icons/fa";
import nft from "../../data/Nfts/Nft (1).jpg";

const CreateLoanListing = () => {
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
              <div className="rounded-lg relative bg-cyan-900 p-2 px-3 mt-4">
                <div className="flex flex-row justify-between items-center">
                  <div className="font-bold text-2xl uppercase">
                    Not Listed
                  </div>

                    <div className="flex items-center justify-center px-3 py-1 rounded-full bg-primary bg-opacity-70 hover:bg-opacity-100 transition">
                      <span>Loan Listing</span>
                    </div>
                </div>
                <div className="py-3">
                  <hr className="border-blue-500" />
                </div>
                {/* Loan Deatils */}
                <div>
                  <div>
                    <div>
                      
                      <div className="flex flex-col">
                        <div className="font-bold ">
                            <span>List this NFT as collateral for Loan</span>
                        </div>
                      </div>
                      
                      <div className="mt-2 mb-1 text-md">Enter your terms</div>
                      <div className="flex flex-row flex-wrap gap-4">
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                          <div>
                            <div className="inline-block">
                              <div>
                                <div
                                  className="text-base text-sm text-primary font-bold"
                                  
                                >
                                  Period
                                </div>
                              </div>
                              
                            </div>
                            <div className="">
                              <input type="text" className="px-3 py-2 w-24 rounded-lg bg-primary" />
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
                                Loan Amount{" "}
                              </div>
                            </div>
                            
                          </div>
                          <div className="text-base font-semibold text-sm">
                          <div className="">
                              <input type="text" className="px-3 py-2 rounded-lg bg-primary w-24" />
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
                                Interest Amount{" "}
                              </div>
                            </div>

                          </div>
                          <div className="text-base font-semibold text-sm">
                          <div className="">
                              <input type="text" className="w-24 px-3 py-2 rounded-lg bg-primary" />
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
                                Interest Rate{" "}
                              </div>
                            </div>
                          </div>
                          <div className="text-base text-orange-400 text-xl font-semibold text-sm">
                            100%
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
                             Early Payback
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="pt-0.5 pb-1 flex">
                            <div className=" font-semibold">2.16 CRO</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="inline-block">
                          <div>
                            <div
                              className="text-base text-sm text-primary font-bold"
                              
                            >
                              Payback at Maturity
                              <span className="text-orange-400 text-sm pl-2">
                                (Day 14){" "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="pt-0.5 pb-1 flex">
                          <div className=" font-semibold">7 CRO</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-base gap-2">
                      <input type="checkbox" name="" id="" />
                      <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, architecto nisi numquam sunt dolor debitis.</p>
                    </div>
                    <div className="mt-3 py-3">
                      <div>
                        <button className="px-6 py-3 bg-cyan-300 rounded-full text-sm font-bold text-black hover:bg-cyan-400 transition">List for Loan</button>
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

export default CreateLoanListing;
