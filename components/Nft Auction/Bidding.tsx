import Image from "next/image";
import Link from "next/link";
import React from "react";
import nft from "../../data/Nfts/Nft (2).jpg";
import CronosSvg from "../../data/CronoSvg.svg"

const Bidding = () => {
  return (
    <div className="p-6 space-y-6 w-full">
      <div className="text-3xl font-bold">MAKE A BID</div>
      {/* NFT Details */}
      <div className="border-secondary border-2 rounded-xl p-6">
        <h2 className="py-3 text-xl">NFT Selected</h2>
        <div className="flex flex-col items-center lg:flex-row w-full">
          {/* NFT */}
          <div className="w-full lg:w-3/12">
            <Image alt="nft" src={nft} className="rounded-xl" />
          </div>

          {/* details */}
          <div className="w-full lg:px-6 pt-6 lg:pt-0">
            <div className="text-2xl">
              <div className="font-bold">Aristo Dogs</div>
              <div>#1233</div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-3 pt-3">
              <div className="lg:p-3 rounded-xl w-full">
                <div className="font-bold text-green-300 mb-2">
                  Starting Bid
                </div>
                <div className="inline-flex gap-3">
                    <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6 bg-white rounded-lg " />

                    <div>123</div>
                    </div>
              </div>
              <div className="lg:p-3 rounded-xl w-full">
                <div className="font-bold text-green-300 mb-2">Higher bid</div>
                <div className="inline-flex gap-3">
                    <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6 bg-white rounded-lg " />

                    <div>233</div>
                    </div>
              </div>
              <div className="lg:p-3 rounded-xl w-full">
                <div className="font-bold text-green-300 mb-2">
                  Auctions Run Out In
                </div>
                <div>2 D : 4 H : 33 M : 3 S</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Your offer */}
      <div className="border-secondary border-2 rounded-xl p-6">
      <h2 className="py-3 text-xl">Your Offer</h2>

      <p>Your offer must at least <span className="font-bold">245 CRO</span></p>

      <input type="text" placeholder="Your Offer " className="p-2 rounded-lg w-full mt-3 text-black focus:border-hardSecondary focus:border-0 focus:outline-hardSecondary" />
    
      <div className='w-full text-center my-6'>
                <Link href='/nft-auction'>
                <button className='px-12 py-3 bg-sky-900 rounded-xl hover:bg-primary hover:outline-2 hover:outline-secondary transition font-bold'>Place My Bid</button>
                </Link>
            </div>
      </div>
    </div>
  );
};

export default Bidding;
