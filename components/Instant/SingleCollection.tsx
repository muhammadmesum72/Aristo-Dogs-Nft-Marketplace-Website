import React from "react";
import { FaTwitter, FaTwitterSquare } from "react-icons/fa";
import Nft from "../../data/Nfts/Nft (4).jpg";
import Image from "next/image";
import Link from "next/link";
import SinglecollectionHeader from "./SinglecollectionHeader";
import SingleCollectionLinks from "./SingleCollectionLinks";
import SaleListings from "./marketplace/SaleListings";
import { useRouter } from "next/router";

const SingleCollection = () => {
  const router = useRouter()
  const pathname = router.pathname

  const checkUrl = () => {
    if(pathname === '/marketplace/[name]'){
      return true
    } else{
      return false
    }
  }

  return (
    <div className="w-full">
      <div className="flex flex-col w-full items-start bg-blue-700 bg-opacity-25 pt-4  lg:pl-9">
        <SinglecollectionHeader />
        {/* Links */}
        <SingleCollectionLinks />

      </div>
      <div className="p-4">

        {checkUrl() ?  <SaleListings /> : ""}
      </div>
    </div>
  );
};

export default SingleCollection;
