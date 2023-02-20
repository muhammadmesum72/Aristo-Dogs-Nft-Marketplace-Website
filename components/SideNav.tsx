import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillDatabase, AiFillDollarCircle, AiFillMoneyCollect, AiOutlineArrowsAlt, AiOutlineDollar, AiOutlineDown } from "react-icons/ai";
import {
  FaExchangeAlt,
  FaBusinessTime,
  FaMedium,
  FaDiscord,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const SideNav = ({ isMenuOpen }: any) => {
  const pathname = useRouter().pathname
  const [openSwapDropDown, setOpenSwapDropDown] = useState(false);
  const [openRaffleDropDown, setRaffleSwapDropDown] = useState(false);
  const [openNftLoans, setOpenNftLoans] = useState(false);

  const setSwapDropDown = () => {
    setOpenSwapDropDown((prev) => !prev);
  };
  const setRaffleDropDown = () => {
    setRaffleSwapDropDown((prev) => !prev);
  };
  const setNftLoansDropDown = () => {
    setOpenNftLoans((prev) => !prev);
  }


  return (
    <>
      <div
        className={
          isMenuOpen
            ? "fixed left-0 top-0 pt-24 text-white transition-all duration-200 ease bg-primary p-3 h-screen border-r-1 border-white border-opacity-50 overflow-y-auto z-5 "
            : "lg:w-fit fixed top-0 -left-full lg:fixed lg:left-0 h-screen hover:snap-y border-r-1 border-white border-opacity-50 pt-6 px-3 bg-primary text-white overflow-y-auto z-100"
        }
      >
        <ul className="flex flex-col gap-3  lg:pt-12 items-start scrollbar scrollbar-thumb-teal-700 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-800">
          <div className="w-full">
            <li
              className="hover:bg-hardSecondary p-3 rounded-lg cursor-pointer inline-flex items-baseline justify-between gap-5 w-full text-lg"
              onClick={setSwapDropDown}
            >
              <span className="inline-flex items-center">
                <FaExchangeAlt className="text-0.5xl mr-6" />{" "}
                <span className="text-sm">Aristo Swap </span>
              </span>
              {openSwapDropDown ? <AiOutlineDown className="rotate-180 transition-all duration-200 " /> : <AiOutlineDown className="rotate-0  transition-all duration-200 " />}
            </li>
            <ul
              className={
                openSwapDropDown ? "text-lg flex flex-col space-y-3 mt-2" : "hidden"
              }
            >
              <Link href="/create-trade/add-counterparty-wallet">
                <li className="w-full bg-gray-600 p-3 rounded-lg hover:bg-gray-700 text-sm">
                  Artisto Trade
                </li>
              </Link>
              <Link href="/trades/my-trades">
                <li className="w-full bg-gray-600 p-3 rounded-lg hover:bg-gray-700 text-sm">
                  Send Trade Offers
                </li>
              </Link>
              <Link href="/trades/incoming-trades">
                <li className="w-full bg-gray-600 p-3 rounded-lg hover:bg-gray-700 text-sm">
                  Incoming Trade Offers
                </li>
              </Link>
            </ul>
          </div>

          <div className="w-full">
            <li
              className="hover:bg-hardSecondary p-3 rounded-lg cursor-pointer inline-flex items-baseline justify-between gap-5 w-full text-lg"
              onClick={setRaffleDropDown}
            >
              <span className="inline-flex items-center">
                <FaBusinessTime className="text-0.5xl mr-6" />{" "}
                <span className="text-sm">Hosting Raffle</span>
              </span>
              {openRaffleDropDown ? <AiOutlineDown className="rotate-180 transition-all duration-200 " /> : <AiOutlineDown className="rotate-0  transition-all duration-200 " />}
            
            </li>
            <ul
              className={
                openRaffleDropDown ? "text-lg flex flex-col space-y-3 mt-2" : "hidden"
              }
            >
              <Link href="/hoisting-raffle">
                <li className="w-full bg-gray-600 p-3 rounded-lg hover:bg-gray-700 text-sm">
                  Hosting Raffle
                </li>
              </Link>
              <Link href="/hoisting-raffle/create-raffle">
                <li className="w-full bg-gray-600 p-3 rounded-lg hover:bg-gray-700 text-sm">
                  Create Raffle
                </li>
              </Link>
              <Link href="/hoisting-raffle/dashboard">
                <li className="w-full bg-gray-600 p-3 rounded-lg hover:bg-gray-700 text-sm">
                  Dashboard
                </li>
              </Link>
            </ul>
          </div>

          <div className="w-full">
            <li
              className="hover:bg-hardSecondary p-3 rounded-lg cursor-pointer inline-flex items-baseline justify-between gap-5 w-full text-lg"
              onClick={setNftLoansDropDown}
            >
              <span className="inline-flex items-center"> 
              <AiOutlineDollar className="text-0.5xl mr-6" />
                <span className="text-sm">NFT Loans</span>
              </span>
              {openNftLoans ? <AiOutlineDown className="rotate-180 transition-all duration-200 " /> : <AiOutlineDown className="rotate-0  transition-all duration-200 " />}
            </li>
            <ul
              className={
                openNftLoans ? "text-lg flex flex-col space-y-3 mt-2 " : "hidden"
              }
            >
              {/* <Link href="/loans/instant">
                <li className="w-full bg-gray-600 p-3 rounded-lg hover:bg-gray-700 text-sm">
                Instant Loans
                </li>
              </Link> */}
              <Link href="/loans/listings">
                <li className="w-full bg-gray-600 p-3 rounded-lg hover:bg-gray-700 text-sm">
                Loan Listings
                </li>
              </Link>
              <Link href="/loans/my-loans">
                <li className="w-full bg-gray-600 p-3 rounded-lg hover:bg-gray-700 text-sm">
                My Loans
                </li>
              </Link>
              <Link href="/loans/my-funded-loans">
                <li className="w-full bg-gray-600 p-3 rounded-lg hover:bg-gray-700 text-sm">
                My Funded Loans
                </li>
              </Link>
              <Link href="/loans/my-loan-offer">
                <li className="w-full bg-gray-600 p-3 rounded-lg hover:bg-gray-700 text-sm">
                Sent Loan Offers
                </li>
              </Link>
              
            </ul>
          </div>
          <div className="w-full">
            <Link href='/nft-auction'>
            <li
              className="hover:bg-hardSecondary p-3 rounded-lg cursor-pointer inline-flex items-baseline justify-between gap-5 w-full text-lg"
              // onClick={setNftLoansDropDown}
              >
              <span className="inline-flex items-center"> 
              <AiFillDollarCircle className="text-0.5xl mr-6" />
                <span className="text-sm">NFT Auctions</span>
              </span>
            </li>
              </Link>
          </div>
          <div className="w-full">
            <Link href='/staking'>
            <li
              className="hover:bg-hardSecondary p-3 rounded-lg cursor-pointer inline-flex items-baseline justify-between gap-5 w-full text-lg"
              // onClick={setNftLoansDropDown}
              >
              <span className="inline-flex items-center"> 
              <AiFillDatabase  className="text-0.5xl mr-6" />
                <span className="text-sm">Aristo Staking</span>
              </span>
            </li>
              </Link>
          </div>
        </ul>
        <div className="border-t-2 border-white border-opacity-10 w-full pt-6 mt-20 items-end">
          <ul className="grid grid-cols-2 gap-3 w-full p-1">
            <Link href="/swap" className="w-28">
              <li className="hover:bg-hardSecondary p-3 rounded-lg cursor-pointer inline-flex items-center gap-3 text-lg border-1 hover:border-none w-full">
                <FaDiscord className="text-0.5xl" />
                <span className="text-sm">Discord</span>{" "}
              </li>
            </Link>
            <Link href="/swap" className="w-28">
              <li className="hover:bg-hardSecondary w-full p-3 rounded-lg cursor-pointer inline-flex items-center gap-3 text-lg border-1 hover:border-none">
                <FaTwitter className="text-0.5xl" />
                <span className="text-sm">Twitter</span>{" "}
              </li>
            </Link>
            <Link href="/swap" className="w-28">
              <li className="hover:bg-hardSecondary w-full p-3 rounded-lg cursor-pointer inline-flex items-center gap-3 text-lg border-1 hover:border-none">
                <FaMedium className="text-0.5xl" />
                <span className="text-sm">Medium</span>{" "}
              </li>
            </Link>
            <Link href="/swap" className="w-28">
              <li className="hover:bg-hardSecondary w-full p-3 rounded-lg cursor-pointer inline-flex items-center gap-3 text-lg border-1 hover:border-none">
                <FaYoutube className="text-0.5xl" />
                <span className="text-sm">Youtube</span>{" "}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
