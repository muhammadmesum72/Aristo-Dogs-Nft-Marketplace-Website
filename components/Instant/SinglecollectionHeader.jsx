import React from "react";
import { FaTwitter, FaTwitterSquare } from "react-icons/fa";
import Nft from "../../data/Nfts/Nft (4).jpg";
import Image from "next/image";
import Modal from "react-modal";
import Link from "next/link";
import CreateBuyOrderPopUp from "../PopUps/CreateBuyOrderPopUp";
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

const SinglecollectionHeader = () => {
  const [buyOrderModalIsOpen, setBuyOrderModalIsOpen] = React.useState(false);
  const openBuyOrderModal = () => setBuyOrderModalIsOpen(true);
  const closeBuyOrderModal = () => setBuyOrderModalIsOpen(false); 

  const [LoanPoolModalIsOpen, setLoanPoolModalIsOpen] = React.useState(false);
  const openLoanPoolModal = () => setLoanPoolModalIsOpen(true);
  const closeLoanPoolModal = () => setLoanPoolModalIsOpen(false); 
  return (
    <div>
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
        <div className="flex flex-col w-full  items-center md:items-start md:flex-row px-2 md:px-0">
          <div className="mr-0 md:mr-6 mb-4 md:mb-0">
            <Image
              src={Nft}
              alt="nft"
              className="rounded-lg object-cover w-36 h-36 inset-0 transition-all shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            {/* Title and Share twitter */}
            <div>
              <div className="font-bold text-2xl text-cyan-400 flex items-center justify-center md:justify-start text-center md:text-start">
                Okay Bears{" "}
                <span className="bg-cyan bg-opacity-20 text-cyan rounded px-2 py-0.5 text-sm ml-1.5 opacity-70">
                  <FaTwitterSquare className="text-white text-2xl cursor-pointer" />
                </span>
              </div>
            </div>
            {/* Deatails  */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              <div className="flex flex-col items-center md:items-start rounded-lg py-1 bg-opacity-60 col-span-2">
                <div className="text-gray-400 font-medium">
                  <span>Floors</span>
                </div>
                <div className="flex flex-row gap-x-2">
                  <div className="flex flex-row items-center">
                    <div className="text-white tracking-wider">140</div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="text-white tracking-wider pl-1">66</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start rounded-lg py-1 bg-opacity-60">
                <div className="text-gray-400 font-medium">Listed</div>
                <div>
                  2 <span> / 10,000</span>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start rounded-lg py-1 bg-opacity-60">
                <div className="text-gray-400 font-medium truncate">
                  {" "}
                  1d Volume{" "}
                </div>
                <div>64 ◎</div>
              </div>
              <div className="flex flex-col items-center md:items-start rounded-lg py-1 bg-opacity-60">
                <div className="text-gray-400 font-medium truncate">
                  {" "}
                  7d Volume{" "}
                </div>
                <div>64 ◎</div>
              </div>
              <div className="flex flex-col items-center md:items-start rounded-lg py-1 bg-opacity-60">
                <div className="text-gray-400 font-medium truncate">
                  {" "}
                  30d Volume{" "}
                </div>
                <div>64 ◎</div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-x-2 gap-y-2 items-center">
              <Link href='/marketplace/create'>
              <button className=" relative bg-cyan-900  rounded-full px-4 py-2 text-sm font-semibold bg-opacity-50 hover:bg-opacity-100 transition flex">
                <span className="">List NFT for Sale</span>
              </button>
              </Link>
              <div>
                <button onClick={openBuyOrderModal} className="relative bg-cyan-600 rounded-full px-4 py-2 text-sm font-semibold bg-opacity-50 hover:bg-opacity-100 transition flex">
                  <span className="">Create Buy Order</span>
                </button>
              </div>
              <div>
                <button onClick={openLoanPoolModal} className="relative bg-cyan-600 rounded-full px-4 py-2 text-sm font-semibold bg-opacity-50 hover:bg-opacity-100 transition flex">
                  <span className="">Create Loan Pool</span>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SinglecollectionHeader