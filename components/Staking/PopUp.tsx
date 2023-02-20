import React, { useState } from "react";
import Nft1 from "../../data/Dog Houses/dog house 7.jpg";
import Nft2 from "../../data/Dog Houses/dog house 5.jpg";
import Nft3 from "../../data/Dog Houses/dog house 10.jpg";
import Nft4 from "../../data/Dog Houses/dog house 1.jpg";
import Image from "next/image";

const PopUp = () => {
  const [selectedNfts, setSelectedNfts] = useState([Nft1, Nft2, Nft3, Nft4]);
  const [isSelected, setIsSelected] = useState(false);
  const onSelectNft = (e, id) => {
    if (selectedNfts.includes(id)) {
      setSelectedNfts(selectedNfts.filter((e) => e !== id));
    }
  };
  const nfts = [
    { id: 1, img: Nft1 },
    { id: 2, img: Nft2 },
    { id: 3, img: Nft3 },
    { id: 4, img: Nft4 },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="grid grid-cols-5 items-center justify-center gap-2">
        {nfts.map((nft) => (
          <div className={isSelected ? "p-3 cursor-pointer  border border-1 border-orange-600  rounded-lg" : "p-3 cursor-pointer  border border-1 border-white border-opacity-30 rounded-lg"}>
            <Image  
            onClick={(e)=> {
              onSelectNft(e.currentTarget.id, nft.id)
              console.log(selectedNfts)
            }}
              src={nft.img}
              alt="slot"
              className={isSelected ? "w-32" : "w-24"}
            />
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg text-center flex gap-6">
        <button className=" uppercase font-bold mb-2 bg-cyan-600 py-3 px-8 rounded-lg hover:bg-cyan-500 transtion duration-200 ease-in-out ">
          Stake
        </button>
        <button className=" uppercase font-bold mb-2 bg-sky-600 py-3 px-8 rounded-lg hover:bg-sky-700 text-black">
          Unstake
        </button>
      </div>
    </div>
  );
};

export default PopUp;
