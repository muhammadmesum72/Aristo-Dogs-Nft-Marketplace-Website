import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillShop } from "react-icons/ai";
import Nft from "../../data/Nfts/Nft (1).jpg"
import CreateBuyOrderPopUp from "../PopUps/CreateBuyOrderPopUp";
import Modal from "react-modal";
import CreateLoanPool from "../PopUps/CreateLoanPool";


const customStyles = {
  content: {
    // width: 'auto',
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
  },
};

const AllCollections = () => {
  const [buyOrderModalIsOpen, setBuyOrderModalIsOpen] = React.useState(false);
  const openBuyOrderModal = () => setBuyOrderModalIsOpen(true);
  const closeBuyOrderModal = () => setBuyOrderModalIsOpen(false); 

  const [LoanPoolModalIsOpen, setLoanPoolModalIsOpen] = React.useState(false);
  const openLoanPoolModal = () => setLoanPoolModalIsOpen(true);
  const closeLoanPoolModal = () => setLoanPoolModalIsOpen(false); 
  return (
    <div className="w-full">
      <Modal isOpen={buyOrderModalIsOpen}
          onRequestClose={closeBuyOrderModal}
          contentLabel="Add Note"
          style={customStyles}
          className="text-white w-full mt-6 lg:w-2/3 p-6 rounded-xl bg-primary ">
            <CreateBuyOrderPopUp />

    </Modal>

    <Modal isOpen={LoanPoolModalIsOpen}
          onRequestClose={closeLoanPoolModal}
          contentLabel="Add Note"
          style={customStyles}
          className="text-white w-full mt-6 lg:w-2/3 p-6 rounded-xl bg-primary ">
            <CreateLoanPool />

    </Modal>
      {/* Header */}
      <div>
        <h1 className="font-bold text-2xl mt-3">All Collections</h1>
      </div>
      {/* Links Btns */}
      <div className="flex gap-x-2 my-2 row flex-wrap">
        <div className="flex row gap-x-2 my-2">
        <Link href='/marketplace/select-nft-for-sale'>
          <button className=" relative bg-cyan-900 rounded-full px-4 py-2 text-sm font-semibold bg-opacity-50 hover:bg-opacity-100 transition flex">
            <span className="">List NFT for Sale</span>
          </button>
        </Link>
          <div>
            <button onClick={openBuyOrderModal} className=" relative bg-cyan-900 rounded-full px-4 py-2 text-sm font-semibold bg-opacity-50 hover:bg-opacity-100 transition flex">
              <span className="" >Create Buy Order</span>
            </button>
          </div>
          
        </div>

        <div className="flex row gap-x-2 my-2">
        <Link href='/loans/create'>
          <button className=" relative bg-cyan-600 rounded-full px-4 py-2 text-sm font-semibold bg-opacity-50 hover:bg-opacity-100 transition flex">
            <span className="">Create Loan Listing</span>
          </button>
        </Link>
          <div>
            <button onClick={openLoanPoolModal} className=" relative bg-cyan-600 rounded-full px-4 py-2 text-sm font-semibold bg-opacity-50 hover:bg-opacity-100 transition flex">
              <span className="">Create Loan Pool</span>
            </button>
          </div>
        </div>
      </div>

      {/* Listings */}
      <div className="flex flex-wrap max-w-screen-3xl w-full">
        <div className="flex flex-row flex-wrap gap-y-1 w-full">
          <Link href='/marketplace/bears' className="w-full">
          <div className="w-full max-w-3xl">
              <div className="flex items-center group p-2 rounded-lg cursor-pointer border-blue-300 border-opacity-40 hover:bg-blue-600 hover:bg-opacity-20 text-sm">
                <div className="mr-1.5 p-3 xl:mr-2.5 xl:p-3.5 rounded-full h-4 w-4 bg-blue-900 flex items-center justify-center">
                  <div className="text-blue-200">1</div>
                </div>
                <div className="relative flex-shrink-0">
                    <Image src={Nft} alt='nft' className="rounded-2xl object-cover w-16 h-16 min-w-full shrink-0 inset-0 transition-all shadow-2xl group-hover:ring-0 group-hover:ring-green group-hover:ring-opacity-60" />
                  <div className="absolute bottom-0 right-0 px-3 py-1 rounded-tl-2xl rounded-br-2xl text-xs bg-blue-600 bg-opacity-70 text-orange tracking-wider flex items-center">
                    <AiFillShop className="mr-2" />
                    0
                  </div>
                </div>
                <div className="grid pl-3 w-full grid-cols-6 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12">
                  <div className="grid grid-rows-3 col-span-3 min-w-36 max-w-48 mt-3 -mb-3">
                    <div className="font-medium text-orange-400 text-base truncate">
                      Stoned Ape Crew
                    </div>
                    <div className="text-blue-200 flex whitespace-nowrap">
                      {" "}
                      Floor:&nbsp;<span className="font-semibold">
                        31
                      </span>&nbsp;CRO'{" "}
                    </div>
                  </div>
                  <div className="hidden md:grid lg:grid grid-rows-3 h-full pl-1 col-span-3 items-center justify-center">
                    <div className="font-semibold text-gray-500 uppercase text-xs flex flex-row items-center justify-center">
                      {" "}
                      Instant loan{" "}
                    </div>
                    <div className="row-span-2 self-center">
                      <div>
                        <button className="relative bg-pink-600 p-1 rounded-full bg-opacity-50 text-pink-200">
                          <span> No Loan Pools </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden grid-rows-3 h-full pl-4 col-span-3 md:grid items-center justify-center">
                    <div className="font-semibold text-gray-500 uppercase text-xs flex flex-row items-center justify-center">
                      {" "}
                      Instant Sell{" "}
                    </div>
                    <div className="row-span-2 self-center">
                      <div>
                        <button
                          className="relative bg-gray-600 text-white p-1 rounded-full"
                        >
                          <span> No Open Orders </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default AllCollections;
