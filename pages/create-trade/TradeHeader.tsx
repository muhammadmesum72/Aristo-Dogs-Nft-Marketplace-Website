import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import HeaderProgress from "./HeaderProgress";

const TradeHeader = () => {
  return (
    // <div className="">
    <div className="text-center py-6 w-full">
      <h1 className="text-2xl font-bold">P2P NFT Trading App</h1>
      <p className="text-lg">
        The safest place on CRONOS to trade verified NFTs
      </p>
      <HeaderProgress />
      <div className="border-b-1 border-white border-opacity-50 w-full "></div>
    </div>
  );
};

export default TradeHeader;
