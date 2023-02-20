import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillEye,
  AiFillHeart,
  AiOutlineDownSquare,
  AiOutlineHeart,
} from "react-icons/ai";
import CronosSvg from "../../data/CronoSvg.svg"
import nft from "../../data/Nfts/Nft (2).jpg";

const SingleNftAuction = () => {
  const [showAttributes, setShowAttributes] = useState(false);
  const [like, setLike] = useState(false);

  const onClickLike = () => setLike(!like);
  const clickAttrubutesBtn = () => {
    setShowAttributes((prev) => !prev);
    
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-col justify-center p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <Link href="/nft-auction" className="block lg:hidden">
            <div className="opacity-50 font-bold hover:opacity-100 hover:border-secondary hover:border-1 rounded-xl p-3 cursor-pointer ">
              Go Back
            </div>
          </Link>
          <div className="w-full lg:w-5/12 flex justify-center items-center content-center align-middle">
            <div className="flex flex-col gap-4 items-center">
              <Image src={nft} alt="nft" className="rounded-xl mt-6" />
              <div className="mt-5 w-full">
                {/* Traits */}
                <div>
                  <button
                    onClick={clickAttrubutesBtn}
                    className="flex items-center w-full justify-between bg-blue-500 hover:bg-blue-900 p-2 transition-colors group rounded-t-md"
                  >
                    <div className="group-hover:pl-2 transition-all font-bold">
                      <span>Traits</span>
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
                      <div className="rounded-md shadow-xl text-black p-2 bg-blue-500 flex flex-col mr-2 mt-2">
                        <div className="text-blue-300 uppercase text-xs mt-1">
                          Background
                        </div>
                        <div className="opacity-100">Snow White</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {/* Bidding Details */}
          <div className="w-full lg:w-8/12 mt-5 lg:pt-0 lg:pl-16 flex flex-col items-center lg:items-start">
            <Link href="/nft-auction" className="hidden lg:block">
              <div className="opacity-50 font-bold hover:opacity-100 hover:border-secondary hover:border-1 rounded-xl p-3 cursor-pointer px-6">
                Go Back
              </div>
            </Link>
            <div className="mt-5 w-full">
              {/* <div className="text-xl mb-1">Loan Listing</div> */}
              <div className="rounded-lg relative bg-blue-700 p-2 px-3 mt-4">
                <div className="flex flex-row justify-between items-center">
                  <div className="font-bold text-2xl text-primary -600">
                    AristoDog #1233
                  </div>
                </div>
                <div className="py-3">
                  <hr className="border-cyan-900" />
                </div>
                <div className="w-full flex items-center  gap-12">
                  <div className="p-3 border-1 border-primary  rounded-xl w-full">
                    <div className="font-bold text-cyan-400 ">Rank</div>
                    <div>#1233</div>
                  </div>
                  <div className="p-3 border-1 border-primary  rounded-xl w-full">
                    <div className="font-bold text-cyan-400">Collection</div>
                    <div>AristoDog</div>
                  </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-3 space-y-3 lg:space-y-0  py-3  lg:py-0">
                  <div className="lg:p-3 rounded-xl w-full">
                    <div className="font-bold text-green-300 mb-2">
                      Starting Bid
                    </div>
                    <div className="inline-flex gap-3">
                    <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6 " />

                    <div>123</div>
                    </div>
                  </div>
                  <div className="lg:p-3 rounded-xl w-full">
                    <div className="font-bold text-green-300 mb-2">
                      Higher bid
                    </div>
                    <div className="inline-flex gap-3">
                    <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6 " />

                    <div>67</div>
                    </div>
                  </div>
                  <div className="lg:p-3 rounded-xl w-full">
                    <div className="font-bold text-green-300 mb-2">
                      Auctions Run Out In
                    </div>
                    <div>2 D : 4 H : 33 M : 3 S</div>
                  </div>
                </div>

                <div className="inline-flex gap-6 items-baseline px-6 my-4 lg:my-0">
                  <div>
                    {like ? (
                      <AiFillHeart
                        color="red"
                        onClick={onClickLike}
                        className="text-3xl cursor-pointer"
                      />
                    ) : (
                      <AiOutlineHeart
                        onClick={onClickLike}
                        className="text-3xl cursor-pointer"
                      />
                    )}
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <span>
                      <AiFillEye className="text-3xl" />
                    </span>
                    <span>1223</span>
                  </div>
                </div>

                <div className="space-y-6 mt-3">
                  <div className="space-y-3">
                    <div className="font-bold">Owner</div>
                    <div>0x67C364288219912e48F5c09D454032e7caEb39e9</div>
                  </div>
                  <div className="space-y-3">
                    <div className="font-bold">NFT Contract</div>
                    <div>0x98C361254219222e48F5c09D4540783j384je83j</div>
                  </div>
                </div>

                {/* Bidding */}
                <div className="w-full text-center my-6">
                  <Link href="/nft-auction/nftName/bid">
                    <button className="px-12 py-3 bg-cyan-900 rounded-xl hover:bg-primary transition font-bold">
                      Make A Bid
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNftAuction;
