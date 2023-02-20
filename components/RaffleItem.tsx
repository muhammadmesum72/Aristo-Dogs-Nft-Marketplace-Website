import Image from "next/image";
import React from "react";

const RaffleItem = ({ raffle }: any) => {
  const { id, nft, raffleEndTime, ticketSupply, tickePrice, cryptocurrency } =
    raffle;
  if (!raffle) {
    <p className="text-center py-6 text-2xl text-white">No Raffle Yet</p>;
  }
  return (
    <div className="z-5 w-full bg-gray-600 text-white relative transition duration-0 hover:duration-700 ease-in-out hover:bg-slate-600      rounded-lg cursor-pointer text-sm">
      <h1 className="bg-gray-300 lg:w-fit md:w-fit p-3 rounded-xl text-sm absolute right-0 w-full ">ID: {id}</h1>
      {/* <p className="text-4xl bg-gray-800 p-6 rounded-b-lg">NFT IMG HERE</p> */}
      <Image src={nft} alt='Nft' className="w-52 h-auto rounded-lg" />
      <div className="flex justify-between gap-3 text-sm text-md px-3 py-3">
        <div>
          <h1 className="font-bold text-orange-600">Tickets Remaining</h1>
          <h2>{ticketSupply}</h2>
        </div>
        <div>
          <h1 className="font-bold text-slate-900">Price</h1>
          <h2>
            <span>{tickePrice}</span> <span>{cryptocurrency}</span>
          </h2>
        </div>
      </div>
      <div className="p-6">

      <button className="bg-primary p-3 text-sm rounded-lg hover:text-orange-600 font-bold text-white w-full">
        <span>VIEW RAFFLE</span>
      </button>
      </div>
    </div>
  );
};

export default RaffleItem;
