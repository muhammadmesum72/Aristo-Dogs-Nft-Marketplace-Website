import React from "react";
import LoansHeader from "./LoansHeader";
import nft from "../../data/Nfts/Nft (1).jpg";
import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import CronosSvg from "../../data/CronoSvg.svg"

const ListingLoans = () => {
  return (
    <div className="p-6 grid grid-cols-2 gap-3 lg:px-9 lg:pt-0 lg:pb-6 lg:grid-cols-3">
      <Link href='/loan/1'>
      <div className="flex flex-col bg-cyan-900 items-center mx-auto cursor-pointer p-3 h-full rounded-2xl">
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            alt="nft"
            src={nft}
            className="rounded-2xl object-cover w-full inset-0 transition-all shadow-2xl"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="pt-2 leading-5">
            <div className="font-bold">Mad Scientist #1807</div>
            <div className="text-orange-500 font-bold">Communi3</div>
          </div>
          <div className="flex flex-row flex-wrap gap-2 mt-1">
            <div>
              <div className="flex flex-row items-center">
                <div className="font-mono text-sm md:text-base text-opacity-80 text-white">
                  18
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <hr className="border-blue-700 " />
          </div>
          <div className="flex flex-wrap gap-4 pt-3">
            <div className="max-w-max">
              {/* <span> */}
              <div className="flex flex-row items-center">
                <AiOutlineClockCircle className="text-primary text-xl font-bold" />
              {/* </span> */}
              <span className="font-semibold px-2">30 </span> Days
              </div>
            </div>
            <div className="flex flex-row">
              <div className="text-primary font-bold mr-1">LTF</div>
              <div className="font-semibold pl-0.5">89.4%</div>
            </div>
            <div className="flex flex-row items-center">
              <div className="text-primary font-bold mr-1">APY</div>
              <div className="font-semibold pl-0.5">93.83%</div>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <div>
              <div className="text-base font-bold text-sm text-primary">
                {" "}
                Loan + Return{" "}
              </div>
            </div>
            <div className="space-x-6 inline-flex">
              <div className="inline-flex gap-2">

            <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6 bg-white rounded-full" />
              <span className="font-bold">
                140</span>
              </div>
              <span className="font-bold text-orange-600">+7.5</span>
            </div>
          </div>
        </div>
      </div>
      </Link>

    </div>
  );
};

export default ListingLoans;
