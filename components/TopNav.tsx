import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaCircle, FaCross, FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../data/logo.jpg";
import ConnectWalletButton from "./ConnectWallet/ConnectWalletButton";

const TopNav = ({
  isWalletConnect,
  onConnect,
  openMobMenu,
  isMenuOpen,
}: any) => {
  return (
    <>
      <div className="w-full sticky top-0 z-10 flex flex-row justify-between items-center p-3 px-5 bg-primary border-b-1 border-opacity-50  border-white">
        <div className="block lg:hidden">
          {isMenuOpen ? (
            <AiOutlineClose onClick={openMobMenu} fill='red' className=" text-2xl font-bold transition duration-150 ease-in-out cursor-pointer" />
            ) : (
            <FaBars
              onClick={openMobMenu}
              color="white"
              className="text-2xl cursor-pointer transition duration-150 ease-in-out"
            />
          )}
        </div>
        <div className="text-light font-bold ">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src={Logo} alt="Logo" className="w-8 rounded-full" />
            {/* <img src={Logo} alt="" />  */}
            <span>ARISTO DOGS</span>
          </Link>
        </div>
        <div className="searchBar hidden lg:block">
          <input
            type="text"
            className="w-96 text-gray-400 bg-transparent outline-none focus:border-hardSecondary focus:border-2 border-gray-400 border-1 rounded-full  text-sm p-1 px-4"
            placeholder="Search Here"
          />
        </div>
        <div className="hidden lg:block">
          <ConnectWalletButton />
        </div>
        <div className="inline-flex gap-3 lg:hidden">
          {/* <a href="/"> */}
            <FaSearch color="white" className="text-2xl cursor-pointer" />
          {/* </a> */}

        </div>
      </div>
    </>
  );
};

export default TopNav;
