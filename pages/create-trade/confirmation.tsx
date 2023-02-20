import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaArrowRight, FaExchangeAlt } from "react-icons/fa";
import HeaderProgress from "../../artisto dogs/pages/create-trade/HeaderProgress";
import NftCard from "../../components/NftCard";
import monkeyNft from "../../data/Nfts/Nft (3).jpg";

const Confirmation = () => {
  const SolPrice = 120;
  return (
    <>
      <Head>
        <title>Create Trade</title>
      </Head>
      <div className="lg:ml-72 flex flex-col items-center justify-center p-12">
        <h1 className="mb-6">
          The counterparty will be able to see the offer at Incoming Offers
        </h1>
        {/* What I Recieve */}
        <div className="bg-sky-900 rounded-lg p-6 text-center lg:w-2/3 space-y-3 w-full">
          <h1 className="text-2xl text-orange-500 font-bold">What I Recieve</h1>
          <p>What you will get</p>
          <h2 className="font-bold text-1xl">NFTs Offered</h2>
          <NftCard nft={monkeyNft} title="Monkey Nft Art" code="#232dd" />
        </div>

        <div className="my-6">
          <FaExchangeAlt className="rotate-90" />
        </div>
        {/* What you Offer */}
        <div className="bg-sky-900 rounded-lg p-6 text-center lg:w-2/3 w-full space-y-3">
          <h1 className="text-2xl text-orange-500 font-bold">What I Offer</h1>
          <p>What you will give</p>
          <h2 className="font-bold text-1xl">NFTs Offered</h2>
          <NftCard nft={monkeyNft} title="Monkey Nft Art" code="#232dd" />
          <div>
            <h3 className="font-bold text-lg">SOL Offered</h3>
            <h2 className="bg-slate-800 w-fit mx-auto p-3 rounded-xl font-bold px-6">
              {SolPrice}
            </h2>
          </div>
        </div>
        
        <div className="my-12 space-x-6 flex items-center p-3 justify-center text-sm w-full">
          <Link
            href="/create-trade/your-offer-selection"
            className="inline-flex items-center justify-between px-12 py-3 rounded-full text-center hover:bg-gray-800 transition duration-150 ease-in-out border-1 border-secondary "
          >
            <FaArrowLeft className="mr-3" />
            <span>Back</span>
          </Link>

          <Link
            href="/trades/my-trades"
            className="inline-flex items-center justify-between bg-hardSecondary px-12 py-3 rounded-full text-center hover:bg-gray-800 transition duration-150 ease-in-out"
          >
            <span>Confirm Offer</span>
            <FaArrowRight className="ml-3" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
