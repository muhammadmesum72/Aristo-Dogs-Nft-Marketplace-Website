import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaArrowRight, FaExchangeAlt } from "react-icons/fa";
import NftCard from "../../../components/NftCard";
import monkeyNft from "../../../data/Nfts/Nft (3).jpg";

const incomingTrades = () => {
  return (
    <>
      <div className="lg:ml-72 text-center p-6 lg:px-12">
        <h1>Incoming Offer</h1>
        <p>Status</p>
        <p className="bg-orange-400 rounded-xl text-black mb-6 w-fit mx-auto px-3">Waiting for Confirm</p>
        {/* What I Recieve */}
        <div className="bg-sky-900 mx-auto rounded-lg p-6 text-center lg:w-2/3 space-y-3 w-full ">
          <h1 className="text-2xl text-orange-500 font-bold">What I Recieve</h1>
          <h2 className="font-bold text-1xl">NFTs Offered</h2>
          <NftCard nft={monkeyNft} title="Monkey Nft Art" code="#232dd" />
          <div>
            <h3 className="font-bold text-lg">SOL Offered</h3>
            <h2 className="bg-slate-800 w-fit mx-auto p-3 rounded-xl font-bold px-6">
              130
            </h2>
          </div>
        </div>

        <div className="my-6 mx-auto w-full text-center">
          <FaExchangeAlt className="rotate-90 mx-auto" />
        </div>
        {/* What you Offer */}
        <div className="bg-sky-900 mx-auto rounded-lg p-6 text-center lg:w-2/3 w-full space-y-3">
          <h1 className="text-2xl text-orange-500 font-bold">What I Offer</h1>
          <h2 className="font-bold text-1xl">NFTs Offered</h2>
          <NftCard nft={monkeyNft} title="Monkey Nft Art" code="#232dd" />
        </div>

        <div className="w-full flex  items-center justify-center gap-6 py-6">
          <div >
          <button className="bg-orange-400 rounded-full px-6 py-3">Cancle</button>
          </div>
          <div>

          <button className="bg-hardSecondary rounded-full px-6 py-3">Accept Trade</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default incomingTrades;
