import React, { useState } from "react";
import PopUp from "./ConnectWalletModal";

const ConnectWalletButton = () => {
  const [modal, setModal] = useState(false);
  const togglePopUp = () => setModal(!modal);

 const closeModal = () => {
  setModal(false)
 }
  return (
    <>
      <div className="text-center text-light text-sm">
        <button
          className="bg-secondary p-2 rounded-lg text-gray-900 font-bold"
          onClick={togglePopUp}
        >
          Connect Wallet
        </button>
        {modal ? <PopUp key={12} onClose={closeModal} /> : ""}
      </div>
    </>
  );
};

export default ConnectWalletButton;
