import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import SelectNfts from "../../components/Select Nfts/SelectNfts";

const createRaffle = () => {
  const [showSelectNftsModal, setShowSelectNftsModal] = React.useState(false);
  const showModal = () => {
    setShowSelectNftsModal(true);
  };
  const closeModal = (e: any) => {
    if (e.target.id === "selectNftsModalBg") setShowSelectNftsModal(false);
  };
  return (
    <>
      <Head>
        <title>Create Raffle</title>
      </Head>
      {showSelectNftsModal ? <SelectNfts closeModal={closeModal} /> : ""}
      <div className="lg:ml-72 flex flex-col items-center justify-center">
        {/* <ConnectWallet /> */}
        <h1 className="text-3xl font-bold py-6">Create New Raffle</h1>
        <form className="flex flex-col w-full px-6 lg:px-0">
          <div
            onClick={showModal}
            className="p-4 bg-hardSecondary text-3xl text-center rounded-lg cursor-pointer lg:w-1/3 mx-auto my-6 "
          >
            <FaPlusCircle className="mx-auto" />
            Select Your NFT
          </div>
          <div className="bg-white text-black p-9 mx-auto w-full lg:w-2/3 rounded-lg flex flex-col gap-3 lg:flex-row">
            <div>
              <label htmlFor="date" className="font-bold">
                Raffle End Date
              </label>{" "}
              <br />
              {/* <input type="date" /> */}
              <input
                className="border border-2 border-secondary focus:outline-sky-600 p-3 rounded-lg"
                type="datetime-local"
                name="date"
                id="date"
              />
            </div>
            <div className="">
              <label htmlFor="date" className="font-bold">
                Ticker Supply
              </label>{" "}
              <br />
              <input
                className="border border-2 border-secondary focus:outline-sky-600 p-3 rounded-lg"
                type="number"
                name="date"
                id="date"
              />
            </div>
            <div>
              <label htmlFor="date" className="font-bold">
                Ticket Price
              </label>
              <div>
                <input
                  className="border border-2 border-secondary focus:outline-sky-600 p-3 rounded-l-lg w-1/2 "
                  type="number"
                  name="date"
                  id="date"
                />
                <select
                  name="tokens"
                  id="tokens"
                  className="border border-2 border-secondary focus:outline-sky-600 p-3 rounded-r-lg w-1/2"
                >
                  <option value="CRO" >CRO</option>  
                </select>
              </div>
            </div>
          </div>
          <Link href="/hoisting-raffle" className=" mx-auto my-6">
            <button className="bg-secondary p-4 rounded-lg text-gray-900 font-bold">
              Create Ruffle
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default createRaffle;
