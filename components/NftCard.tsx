import Image from "next/image";
import React from "react";
import { AiOutlineVerified } from "react-icons/ai";

const NftCard = ({ nft, title, code }: any) => {
  return (
    <div className="bg-gray-900 rounded-lg inline-flex w-full">
      <Image alt={title} src={nft} className="rounded-lg w-28 md:w-32 lg:w-32 h-auto" />
      <div className=" p-6 text-left">
        <div>
          <div className="inline-flex items-center gap-3 text-secondary">
            <AiOutlineVerified /> <span> Verified</span>
          </div>
        </div>
        <h2 className="font-bold">{code}</h2>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default NftCard;
