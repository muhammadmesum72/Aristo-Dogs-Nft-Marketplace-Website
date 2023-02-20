import Head from "next/head";
import Link from "next/link";
import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaDollarSign,
  FaWallet,
} from "react-icons/fa";
import AddNfts from "../../components/Select Nfts/AddNfts";
import TradeHeader from "./TradeHeader";

const TheirOffer = () => {
  const [sol, setSol] = React.useState(0);
  const setSolValue = (e: any) => {
    setSol(e.target.value);
  };

  const [showAddNftsModal, setShowAddNftsModal] = React.useState(false);
  const showModal = () => {
    setShowAddNftsModal(true);
  };
  const closeModal = (e: any) => {
    if (e.target.id === "addNftsModal") setShowAddNftsModal(false);
  };

  return (
    <>
    {showAddNftsModal ? <AddNfts closeModal={closeModal} /> : ''}
      <Head>
        <title>Create Trade</title>
      </Head>
      <div className="lg:ml-72 flex flex-col items-center justify-center">
        <TradeHeader />
        <div className="bg-slate-700 text-center lg:w-2/3 rounded-lg p-12 space-y-6">
          <h1 className="text-2xl text-orange-400">What I Recieve</h1>
          <p>
            Select NFTs and SOL that you would like to recieve from the
            counterparty
          </p>
          <h1 className="text-2xl text-orange-400">NFTs</h1>
          <div className=" items-center w-full  rounded-lg bg-primary border-white p-12">
            <p>
              NFTs will appear here. Press te button below to browse and add
              NFTs
            </p>
            <button onClick={showModal} className="w-1/2 bg-gray-600 lg:px-12 py-3 rounded-full text-center hover:bg-secondary mt-3 transition duration-150 ease-in-out">
              Add NFts
            </button>
          </div>
          <h1 className="text-2xl">CRO</h1>
          <div className="inline-flex items-center w-1/2  rounded-lg bg-primary border-white">
            <FaDollarSign className="mx-6 " />
            <input
              value={sol}
              onChange={setSolValue}
              type="number"
              className="w-full p-3  outline-none text-light rounded-lg bg-primary border-l-1 text-right"
              mr-3
            />
          </div>
          <p>
            Balance: <span className="text-orange-400">{sol}</span>{" "}
          </p>
        </div>
        <div className="my-12 space-x-6 flex items-center p-3 justify-center text-sm w-full">
          <Link
            href="/create-trade/add-counterparty-wallet"
            className="inline-flex items-center justify-between px-12 py-3 rounded-full text-center hover:bg-gray-800 transition duration-150 ease-in-out border-1 border-secondary "
          >
            <FaArrowLeft className="mr-3" />
            <span>Back</span>
          </Link>

          <Link
            href="/create-trade/your-offer-selection"
            className="inline-flex items-center justify-between bg-gray-600 px-12 py-3 rounded-full text-center hover:bg-gray-800 transition duration-150 ease-in-out"
          >
            <span>Proceed to Your Offer</span>
            <FaArrowRight className="ml-3" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TheirOffer;
