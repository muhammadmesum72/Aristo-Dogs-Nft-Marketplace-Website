import Head from "next/head"
import Link from "next/link"
import HistoricalTradeOffersListing from "../../components/Historical Trade Offers/HistoricalTradeOffersListing"
import IncomingTradeItemsListing from "../../components/Incoming Trades Offer/IncomingTradeItemsListing"


const incomingTradeOffers = () => {
  return (
    <>
    <Head>
        <title>Incoming Trade Offers</title>
      </Head>
    <div className="lg:ml-72 text-center p-6 lg:px-12">
        <div className="text-center flex items-center justify-between py-3">
          <span className="text-2xl font-bold ">Incoming Offers</span>
          <Link
            href="/create-trade/add-counterparty-wallet"
            className="float-right"
          >
            <button className="bg-secondary rounded-full text-white px-6 py-3 items-end">
              Create Trade
            </button>
          </Link>
        </div>
       <IncomingTradeItemsListing />

        <h1 className="text-2xl font-bold ">Historical Trades</h1>
        <HistoricalTradeOffersListing />
      </div>
    </>
  )
}

export default incomingTradeOffers