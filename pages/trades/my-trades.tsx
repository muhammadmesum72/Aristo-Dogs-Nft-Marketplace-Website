import Head from "next/head";
import Link from "next/link";
import ConnectWallet from "../../components/ConnectWallet/ConnectWalletButton";
import HistoricalTradeOffersListing from "../../components/Historical Trade Offers/HistoricalTradeOffersListing";
import MyTradeItemsListing from "../../components/My Trades Offers/MyTradeItemsListing"

const sendTradeOffers = () => {
  return (
    <>
    <Head>
        <title>My Trade Offers</title>
      </Head>
      <div className="lg:ml-72 text-center p-6 lg:px-12">
        <div className="text-center flex items-center justify-between py-3">
          <span className="text-2xl font-bold ">Open Offers Send by Me</span>
          <Link
            href="/create-trade/add-counterparty-wallet"
            className="float-right"
          >
            <button className="bg-secondary rounded-full text-white px-6 py-3 items-end">
              Start a New Trade
            </button>
          </Link>
        </div>
        <MyTradeItemsListing />
       

        <h1 className="text-2xl font-bold ">Historical Trades</h1>
        <HistoricalTradeOffersListing />
      </div>
    </>
  );
};

export default sendTradeOffers;
