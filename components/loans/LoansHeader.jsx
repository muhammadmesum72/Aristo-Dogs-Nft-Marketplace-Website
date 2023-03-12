import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import CreateLoanPool from "../PopUps/CreateLoanPool";

// Modal.setAppElement('#root')

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

const LoansHeader = () => {
  const [days, setDays] = React.useState(false);

  const showDays = () => {
    setDays((prev) => !prev);
  };
  const route = useRouter();
  const pathname = route.pathname;
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  // const toggle = () => setOpenModal((prev) => !prev)

  const listingPath = () => {
    if (pathname === "/loans/listings") {
      return true;
    }
  };
  const orderPath = () => {
    if (pathname === "/loans/orders") {
      return true;
    }
  };
  const historyPath = () => {
    if (pathname === "/loans/history") {
      return true;
    }
  };
  const faqPath = () => {
    if (pathname === "/loans/faqs") {
      return true;
    }
  };

  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Add Note"
          style={customStyles}
          className="text-white w-full mt-6 lg:w-2/3 p-6 rounded-xl bg-primary "
        >
          <CreateLoanPool />

        </Modal>
      </div>
      <div className="lg:p-9 lg:pb-3 p-6  space-y-3 w-full bg-primary">
        <h1 className="font-bold text-2xl">NFT Collateralized Loans</h1>
        <p className="lg:w-2/3 ">
          Define your terms and collateralize NFTs. Lenders can fund loans with
          a single click! Borrowers can access instant liqudiity via loan pools!
        </p>
        <div className="space-x-6 space-y-3">
          <Link href="/loans/create">
            <button className="bg-secondary px-5 py-3 rounded-full text-black text-sm transition hover:bg-hardSecondary font-bold">
              Create a Loan Listing
            </button>
          </Link>
          <button
            onClick={openModal}
            className="bg-hardSecondary px-5 py-3 rounded-full text-black text-sm transition hover:bg-secondary font-bold"
          >
            Create a Loan Pool
          </button>
        </div>
        {/* Links  */}
        <div className="flex flex-col-reverse xl:flex-row w-full">
          <div className="hidden md:flex h-full">
            <div className="pt-1">
              <Link href="/loans/listings">
                <div
                  className={
                    listingPath()
                      ? "border-hardSecondary px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer border-b-2 hover:bg-blue-500 hover:bg-opacity-60"
                      : "opacity-75 px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer hover:bg-blue-500 hover:bg-opacity-60"
                  }
                >
                  <span className="">Listings</span>
                </div>
              </Link>
            </div>
            <div className="pt-1">
              <Link href="/loans/orders">
                <div
                  className={
                    orderPath()
                      ? "border-hardSecondary px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer border-b-2 hover:bg-blue-500 hover:bg-opacity-60"
                      : "opacity-75 px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer hover:bg-blue-500 hover:bg-opacity-60"
                  }
                >
                  <span className="">Orders</span>
                </div>
              </Link>
            </div>
            <div className="pt-1">
              <Link href="/loans/history">
                <div
                  className={
                    historyPath()
                      ? "border-hardSecondary px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer border-b-2 hover:bg-blue-500 hover:bg-opacity-60"
                      : "opacity-75 px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer hover:bg-blue-500 hover:bg-opacity-60"
                  }
                >
                  <span className="">History</span>
                </div>
              </Link>
            </div>
            <div className="pt-1">
              <Link href="/loans/faqs">
                <div
                  className={
                    faqPath()
                      ? "border-hardSecondary px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer border-b-2 hover:bg-blue-500 hover:bg-opacity-60"
                      : "opacity-75 px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer hover:bg-blue-500 hover:bg-opacity-60"
                  }
                >
                  <span className="">Help / FAQ</span>
                </div>
              </Link>
            </div>
            {/* <div className="pt-1">
              <div className="border-gray-400 border-opacity-0 opacity-75 px-4 font-bold text-sm transition lg:px-8 py-4 h-full cursor-pointer border-b-2 hover:bg-blue-500 hover:bg-opacity-60">
                <span className="">Verified Collections</span>
              </div>
            </div> */}
          </div>

          {/* Mob Header */}
          <div className="grid md:hidden grid-cols-2 w-full mx-auto gap-3 mt-2">
            <Link href="/loans/listings">
              <div
                className={
                  listingPath()
                    ? "border-green bg-opacity-60 hover:bg-blue-500 px-4 transition lg:px-8 py-2.5 w-full cursor-pointer border rounded hover:bg-opacity-60 flex items-center justify-between"
                    : "border-gray-400 border-opacity-40 opacity-75 hover:bg-blue-500 px-4 transition lg:px-8 py-2.5 w-full cursor-pointer border rounded hover:bg-opacity-60 flex items-center justify-between"
                }
              >
                <span className="uppercase whitespace-nowrap truncate text-sm">
                  Listings
                </span>
              </div>
            </Link>
            <Link href="/loans/orders">
              <div
                className={
                  orderPath()
                    ? "border-green bg-opacity-60 hover:bg-blue-500 px-4 transition lg:px-8 py-2.5 w-full cursor-pointer border rounded hover:bg-opacity-60 flex items-center justify-between"
                    : "border-gray-400 border-opacity-40 opacity-75 hover:bg-blue-500 px-4 transition lg:px-8 py-2.5 w-full cursor-pointer border rounded hover:bg-opacity-60 flex items-center justify-between"
                }
              >
                <span className="uppercase whitespace-nowrap truncate text-sm">
                  Orders
                </span>
              </div>
            </Link>
            <Link href="/loans/history">
              <div
                className={
                  historyPath()
                    ? "border-green bg-opacity-60 hover:bg-blue-500 px-4 transition lg:px-8 py-2.5 w-full cursor-pointer border rounded hover:bg-opacity-60 flex items-center justify-between"
                    : "border-gray-400 border-opacity-40 opacity-75 hover:bg-blue-500 px-4 transition lg:px-8 py-2.5 w-full cursor-pointer border rounded hover:bg-opacity-60 flex items-center justify-between"
                }
              >
                <span className="uppercase whitespace-nowrap truncate text-sm">
                  History
                </span>
              </div>
            </Link>
            <Link href="/loans/faqs">
              <div
                className={
                  faqPath()
                    ? "border-green bg-opacity-60 hover:bg-blue-500 px-4 transition lg:px-8 py-2.5 w-full cursor-pointer border rounded hover:bg-opacity-60 flex items-center justify-between"
                    : "border-gray-400 border-opacity-40 opacity-75 hover:bg-blue-500 px-4 transition lg:px-8 py-2.5 w-full cursor-pointer border rounded hover:bg-opacity-60 flex items-center justify-between"
                }
              >
                <span className="uppercase whitespace-nowrap truncate text-sm">
                  Help / FAQ
                </span>
              </div>
            </Link>
            {/* <div className="border-gray-400 border-opacity-40 opacity-75 hover:bg-blue-500 px-4 transition lg:px-8 py-2.5 w-full cursor-pointer border rounded hover:bg-opacity-60 flex items-center justify-between">
              <span className="uppercase whitespace-nowrap truncate text-sm">
                Verified Collections
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoansHeader;
