import Image from "next/image";
import Link from "next/link";
import React from "react";

const TradeItemSingleList = ({ tradeOffer }: any) => {
  const { offers, recieves } = tradeOffer;
  const { nft, counterpartyWalletAddress } = offers;
  const { nfts, id } = recieves;
  return (
    <>
      <tr className="bg-gray-900 text-white mb-6">
        <td className="py-2 px-3 bg-yawwwtwo-blue-500 flex">
          {nfts.map((nft: any) => (
            <Image key={id} src={nft} alt="nft" className="w-12 rounded-lg" />
          ))}
        </td>
        <td className="px-6 py-3 bg-yawwwtwo-blue-500">{recieves.sol}</td>
        <td className="px-6 py-3 bg-yawwwtwo-blue-500">
          <Image src={nft} alt="nft" className="w-12 rounded-lg" />
        </td>
        <td className="px-6 py-3 bg-yawwwtwo-blue-500">{offers.sol}</td>
        <td className="px-6 py-3 bg-yawwwtwo-blue-500">
          {counterpartyWalletAddress}
        </td>
        <td className="px-6">
          <Link
            href="/send-trades/[id]"
            as={`/send-trades/${tradeOffer.id}`}
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
