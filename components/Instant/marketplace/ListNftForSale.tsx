import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineDownSquare,
  AiOutlineFileSearch,
  AiOutlineSearch,
} from "react-icons/ai";
import nft from '../../../data/Nfts/Nft (1).jpg'

const ListNftForSale = () => {
  const [showAttributes, setShowAttributes] = useState(false);

  const clickAttrubutesBtn = () => {
    setShowAttributes((prev) => !prev);
  };
  return (
    <div className="lg:px-9 p-6 border-t-1 border-opacity-20 border-blue-400 w-full">
      <div className="w-full text-center">
        <div className="pb-6 text-2xl font-bold">My Wallet</div>
      </div>
      <div>
        <button
          onClick={clickAttrubutesBtn}
          className="flex items-center w-full justify-between bg-blue-500 hover:bg-hardSecondary hover:bg-opacity-50 p-2 transition-colors group rounded-t-md"
        >
          <div className="group-hover:pl-2 transition-all">
            <span>NFT Title</span>
          </div>
          {showAttributes ? (
            <div className="w-3 mr-3 transition-all duration-200 rotate-180">
              <AiOutlineDownSquare />
            </div>
          ) : (
            <div className="w-3 mr-3 transition-all duration-200 rotate-0">
              <AiOutlineDownSquare />
            </div>
          )}
        </button>
        {showAttributes ? (
          <div className="bg-blue-800">
            <div className="flex flex-wrap w-full p-4 bg-sky-900">
              {/* Attrubute 1  */}
              <div className="rounded-xl bg-slate-900 text-white p-2 flex flex-col items-start justify-center mr-2 mt-2">
                <Image src={nft} alt='nft' className="w-48 h-fit rounded-xl shadow-xl" />
                <div className="space-y-1 py-3 text-sm w-full">
                    <div className="font-bold">NFT Token  #6667</div>
                    <div>NFT Name</div>
                    <div className="mx-auto text-center py-3">
                      <Link href='/marketplace/create'>
                    <button className="bg-hardSecondary text-white font-bold p-3 rounded-xl w-fit">List For Sale</button>
                      </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default ListNftForSale