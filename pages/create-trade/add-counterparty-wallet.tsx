import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaSitemap, FaWallet } from "react-icons/fa";
import TradeHeader from "./TradeHeader";

const Counterparty = () => {
  return (
    <>
    <Head>
        <title>Create Trade</title>
      </Head>
      <div className="lg:ml-64 flex flex-col items-center justify-center">
        <TradeHeader />

        <div className="grid grid-cols-2 gap-3 py-6 lg:w-1/2 mx-auto text-sm text-gray-400">
          <Link href="/trades/my-trades">
            <button className="w-full p-3 border border-1 border-gray-400 rounded-md hover:bg-gray-800 transition duration-150 ease-in-out">
              SEND OFFERS
            </button>
          </Link>
          <Link href="/trades/incoming-trades">
            <button className="w-full p-3 border border-1 border-gray-400 rounded-md hover:bg-gray-800 transition duration-150 ease-in-out">
              INCOMING OFFERS
            </button>
          </Link>
          {/* <Link href="/"> */}
          <button className="w-full p-3 border border-1 border-gray-400 rounded-md hover:bg-gray-800 transition duration-150 ease-in-out">
            VERIFIED COLLECTIONS
          </button>
          {/* </Link> */}
          {/* <Link href="/"> */}
          <button className="w-full p-3 border border-1 border-gray-400 rounded-md hover:bg-gray-800 transition duration-150 ease-in-out">
            GET A TEST NFT
          </button>
          {/* </Link> */}
        </div>
        <div className="bg-slate-700 text-center lg:w-2/3 rounded-lg p-12 space-y-6">
          <h1 className="text-2xl text-orange-400">
            Send a New P2P Trade Offer
          </h1>
          <p>
            Each trade offer can contain uo to 6 verified NFTs{" "}
            <Link href="faqs" className="text-secondary">
              FAQ
            </Link>
          </p>
          <p>
          </p>
          <p className="text-orange-400">
            To start, enter the counterparty wallet address
          </p>
          <div className="inline-flex items-center w-full  rounded-lg bg-primary border-white">
            <FaWallet className="w-12" />
            <input
              type="text"
              className="w-full p-3 border-none outline-none text-light rounded-lg bg-primary"
            />
          </div>
        </div>
        <span className="text-sm mt-1">
          Fee: <span className="text-orange-400">7,5 <span className="font-bold">CRO</span></span>
        </span>
        <Link
          href="/create-trade/counterparty-offer"
          className="inline-flex items-center justify between mt-6 mb-12 bg-gray-600 px-12 py-3 rounded-full text-center hover:bg-gray-800 transition duration-150 ease-in-out"
        >
          <span className="mr-2">Start a Trade</span>
          <FaArrowRight />
        </Link>
      </div>
    </>
  );
};

export default Counterparty;
