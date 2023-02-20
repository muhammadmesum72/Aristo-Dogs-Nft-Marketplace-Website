import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCross } from "react-icons/fa";
import WalletItem from "./WalletItem";
import MetaMask from "../../data/Nfts/metamask.png"
import Brave from "../../data/Nfts/brave.jpg"
import Coinbase from "../../data/Nfts/coinbase.png"

function PopUp({onClose}:any) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const wallets = [
    {
      id: 1,
      name: 'Meta Mask',
      icon: MetaMask
    },
    {
      id: 2,
      name: 'Brave',
      icon: Brave
    },
    {
      id: 3,
      name: 'Coinbase',
      icon: Coinbase
    }
  ]
  const closeModal = (e:any) => {
    if (e.target.id === "popUp") {
      onClose()
    }
  };
  return (
    <>
      <div id="popUp" onClick={closeModal} className="fixed top-0 left-0 z-10 bg-gray-900 w-full h-screen bg-opacity-80 flex items-center justify-center lg:pl-72 ">
        <div className=" bg-sky-600 p-6 rounded-lg w-fit lg:w-1/3 transition duration-150 ease-in-out">
          <div className="flex items-center justify-between mb-3">
          <h1 className="text-2xl font-bold  text-black">Connect Wallet</h1>
          <div>
          <AiFillCloseCircle onClick={onClose} color="sky-900" className=" text-sky-900 text-3xl float-end cursor-pointer" />
          </div>

          </div>
          {wallets.map((wallet) => (
            <WalletItem key={wallet.id} name={wallet.name} icon={wallet.icon} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PopUp;