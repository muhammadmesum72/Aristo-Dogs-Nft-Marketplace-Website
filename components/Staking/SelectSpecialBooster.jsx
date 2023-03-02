import Image from "next/image";
import React, { useState } from "react";
import { WalletNfts } from "../../data/data";

const SelectSpecialBooster = ({ addSpecialBooster }) => {
  const [showNftDetails, setShowNftDetails] = useState(false);
  const [selectBooster, setSelectBooster] = useState({
    name: "",
    id: "",
    nft: "",
  });
  const [selected, isSelected] = useState(false);
  const [select, setSelect] = useState(false);

  const showDetails = () => {
    // if()
    setShowNftDetails(true);
  };
  const hideDetails = () => {
    setShowNftDetails(false);
  };

  const handleSelect = (nft) => {
    setSelectBooster(nft);
    isSelected((prev) => !prev);
  };
  const onStakeBooster = () => {
    addSpecialBooster(selectBooster);
  };

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
      <div className="flex items-center justify-between w-full text-xs lg:text-xl px-4 py-3 uppercase font-bold">
        <div className=" ">Stake in Special booster</div>
        {selected && (
          <div
            onClick={onStakeBooster}
            className="bg-secondary cursor-pointer  p-1 rounded-lg text-black px-4"
          >
            <h1>Stake {selectBooster.name}</h1>
          </div>
        )}
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
          >
            <label htmlFor={nft.id}>
              <Image
                src={nft.nft}
                alt="nft"
                className={
                  select
                    ? "w-32 cursor-pointer hover:opacity-70 border border-1 transition ease-in-out duration-200"
                    : "w-32 cursor-pointer hover:opacity-70 transition ease-in-out duration-200"
                }
              />
            </label>
            <input type="checkbox" id={nft.id} name={nft.id} />
            {hoveredId === nft.id && <div className="absolute transition-all duration-200 top-0 bg-white w-full text-center text-secondary font-bold text-sm">
                <h1>{nft.id}</h1>
                <h1>{nft.name}</h1>
              </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectSpecialBooster;
