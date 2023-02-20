import Image from "next/image"
import { useState } from "react"
import nft1 from "../../data/Nfts/Nft (1).jpeg"
const NftItemCard = () => {
    const [approve, setApprove] = useState('Approve')
  return (
    <>
          {/* <Image alt={title} src={nft} className="rounded-lg w-28 md:w-32 lg:w-32 h-auto" /> */}
      <div className="text-left bg-white text-center text-black w-1/3 text-xs lg:w-fit md:w-fit rounded-lg">
        <div className="">
            <Image src={nft1} alt='nft' className="w-48 rounded-lg" />
        </div>
        <div className="p-3">
        <h2 className="font-bold">Token : {627}</h2>
        <button onClick={() => setApprove('Added')} className="p-2  bg-orange-400 font-bold rounded-lg">{approve}</button>
        </div>
      </div>
    </>
  )
}

export default NftItemCard