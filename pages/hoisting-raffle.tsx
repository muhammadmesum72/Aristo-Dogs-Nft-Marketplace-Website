import Head from "next/head";
import React from "react";
import ConnectWallet from "../components/ConnectWallet/ConnectWalletButton";
import RaffleItem from "../components/RaffleItem";
import {RafflesData} from '../data/data'
const hoistingRaffle = () => {
  return (
    <>
    <Head>
        <title>Hoisting Raffle</title>
        <link rel="icon" href="/Logo.jpg" />
      </Head>
    <div className="lg:ml-72 flex flex-col items-center justify-center">
      {/* <ConnectWallet /> */}
      <h1 className="text-3xl font-bold py-6">Raffles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 z-5">
        {RafflesData.map((raffle) => (
          <RaffleItem raffle={raffle} key={raffle.id}  />
          ))}
      </div>
    </div>
          </>
  );
};

export default hoistingRaffle;
