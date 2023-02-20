import Image from "next/image";
import Link from "next/link";
import React from "react";
import nft from "../../data/Nfts/Nft (1).jpg";

const NftAuctionItem = () => {
  return (
    <>
      <div className="flex flex-col bg-hardSecondary items-center mx-auto  h-full rounded-lg">
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            alt="nft"
            src={nft}
            className="rounded-t-lg object-cover w-full inset-0 transition-all shadow-2xl"
          />
        </div>
        <div className="flex flex-col w-full p-3 text-black">
          <div className="leading-5">
            <div className="font-bold">NFT Owner</div>
          </div>
          <div className="pt-2">
            <div>NFT Name</div>
          </div>
          <div>
            <span>1 minted</span>
          </div>
          <div className="flex flex-row items-center justify-between mt-3">
            <div className="font-bold text-xs lg:text-sm text-primary inline-flex justify-between w-full mr-3 p-2 bg-cyan-900 bg-opacity-30 rounded-lg">
              <div>From</div>
              <div>$1</div>
            </div>
            <div className="">
              <Link href="/nft-auction/nftName">
                <button className="px-5 py-2 hover:bg-cyan-900 bg-primary transition rounded-xl lg:text-xl text-sm font-bold text-white">
                  Bid
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftAuctionItem;
