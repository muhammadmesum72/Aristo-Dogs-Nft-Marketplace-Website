import Image from "next/image";
import React, { useState } from "react";
import { WalletNfts } from "../../data/data";

const SelectBooster1 = ({addBooster1, boosters, setOpenBoosterPopUp1}) => {
  const [showNftDetails, setShowNftDetails] = useState(false);
  const [selectBooster, setSelectBooster] = useState({
    name: "",
    id: "",
    nft: '',
    per: 0
  })
  const [selected, isSelected] = useState(false)
  const [select, setSelect] = useState(false)


  const showDetails = () => {
    // if()
    setShowNftDetails(true);
  };
  const hideDetails = () => {
    setShowNftDetails(false);
  };

  const handleSelect = (nft) => {
    setSelectBooster(nft)
    isSelected(true)
  }
  const onStakeBooster = () => {
    // setSelect((prev) => !prev)
    addBooster1(selectBooster)
    setOpenBoosterPopUp1(false)
  }

  const [hoveredId, setHoveredId] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId("");
  };

  const handleClick = (id) => {
    setSelectedId(id);
  };


  return (
    <div className="">
      <div className="flex items-center justify-between w-full px-4 py-3 text-xs lg:text-xl uppercase font-bold">

      <div className=" ">
        Stake in booster 1
      </div>
      { selected &&
      <div onClick={onStakeBooster} className="cursor-pointer">
          <h1 className="bg-secondary p-1 rounded-lg text-black px-4">{selectBooster.name} <span className="ml-4 text-white">+8%</span></h1>
      </div>
}
      </div>

      <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 items-center justify-center gap-6 px-4 pb-6">
        {WalletNfts.map((nft) => (
          <div
          key={nft.id}
          onMouseEnter={() => handleMouseEnter(nft.id)}
          onMouseLeave={() => handleMouseLeave()}

            id={nft.id}
            onMouseOver={showDetails}
            onMouseOut={hideDetails}
            className="relative w-fit"
            onClick={() => {
              handleClick(nft.id) 
              const selectedNft = nft
              handleSelect(selectedNft)
            }}
            style={{
            border: selectedId === nft.id ? "3px solid rgba(17, 208, 250, 100)" : "none",
          }}
            // onClick={(e) => {
            //   const selectedNft = nft
            //   handleSelect(selectedNft)
            // }}
          >
            <label htmlFor={nft.id}>

            <Image
              src={nft.nft}
              alt="nft"
              className="w-32 cursor-pointer hover:opacity-70 transition ease-in-out duration-200 opacity-100"
            />
            </label>

            {hoveredId === nft.id && <div className="absolute top-0 bg-white w-full text-center text-secondary font-bold text-sm">
                <h1>{nft.id}</h1>
                <h1>{nft.name}</h1>
              </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectBooster1;
