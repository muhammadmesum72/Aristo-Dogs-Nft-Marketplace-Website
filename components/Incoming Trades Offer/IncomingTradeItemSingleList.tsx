import Image from "next/image";
import Link from "next/link";
import React from "react";

const TradeItemSingleList = ({ tradeOffer }: any) => {
  const { offers, recieves } = tradeOffer;
  const { nft, counterpartyWalletAddress } = offers;
  const { nfts } = recieves;
  return (
    <>
      <tr className="bg-gray-900 text-white mb-6 ">
        <td className="py-2 px-3  grid grid-cols-2 lg:flex">
          {nfts.map((nft: any) => (
            <Image
            key={78999}
              src={nft}
              alt="nft"
              className="lg:w-12 w-auto lg:h-auto  rounded-lg"
            />
          ))}
        </td>
        <td className="px-6 py-3 ">{recieves.sol}</td>
        <td className="px-6 py-3 ">
          <Image src={nft} alt="nft" className="w-12 rounded-lg" />
        </td>
        <td className="px-6 py-3 ">{offers.sol}</td>
        <td className="px-6 py-3 ">{counterpartyWalletAddress}</td>
        <td className="px-6">
          <Link
            href="/incoming-trades/[id]" as={`/incoming-trades/${tradeOffer.id}`}
            className="py-2 border-1 border-secondary rounded-xl text-xs px-6 text-white"
          >
            View
          </Link>
        </td>
      </tr>
    </>
  );
};

export default TradeItemSingleList;
