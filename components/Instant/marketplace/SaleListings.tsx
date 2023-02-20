import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nft from "../../../data/Nfts/Nft (2).jpg";
import CronosSvg from "../../../data/CronoSvg.svg"

const SaleListings = () => {
  return (
    <div className="pl-0 lg:pl-4 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 2xl:flex 2xl:flex-wrap">
      <div className="rounded bg-blue-400 bg-opacity-30 border-b-2 border-blue-800 rounded-3xl 2xl:w-56">
        <Link href="/marketplace/listing/okaybears123">
          <div className="flex flex-col mx-auto justify-between cursor-pointer h-full">
            <div className="flex flex-col items-center justify-center w-full">
              <Image
                src={Nft}
                alt="nft"
                className="rounded-2xl object-cover w-full inset-0 transition-all shadow-2xl"
              />

              <div className="flex flex-col w-full p-1.5">
                <div className="pt-2 leading-5">
                  <div className="font-bold">Okay Bear #2306</div>
                  <div className="text-orange-400 font-semibold">Okay Bears</div>
                </div>
                <div className="flex flex-row flex-wrap gap-2 mt-1">
                  <div className="flex flex-row items-center">
                    <div className="font-mono text-sm md:text-base text-opacity-80 text-white">
                      1918
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="font-mono text-sm md:text-base text-opacity-80 text-white">
                      252
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-col w-full p-1.5">
                <div className="pt-2">
                  <hr className="border-blue-600" />
                </div>
                <div className="mt-2 flex justify-between items-center flex-row sm:flex-row sm:flex-wrap">
                  <div className="flex flex-row mr-1 md:mr-1">
                    <div className="flex flex-row items-center">
                      <div className="w-5 h-5 md:h-6 md:w-6 bg-blue-200 rounded-lg p-1 mr-1 flex flex-col items-center justify-center">
                        <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6" />
                      </div>
                      <div className="font-mono font-semibold text-sm md:text-base lg:text-lg truncate">
                        140
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="relative p-2 bg-primary rounded-xl   ">
                      Buy{" "}
                      <span className="hidden md:inline-block">Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SaleListings;
