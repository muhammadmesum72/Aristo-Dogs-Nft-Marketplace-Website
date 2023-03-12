import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import PopUp from "./PopUp";
import DogHouses from "./DogHouses";
const customStyles = {
  content: {
    // width: 'auto',
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
  },
};

const Houses = () => {
  const [openPopUp, setOpenPopUp] = useState(false);

  const closeModal = () => {
    setOpenPopUp(false);
  };

  const openModal = () => {
    setOpenPopUp(true);
  };
  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={openPopUp}
        onRequestClose={closeModal}
        style={customStyles}
        className="text-white w-full mt-6 lg:w-2/3 p-6 rounded-xl bg-primary "
      >
        <PopUp />
      </Modal>
      <div className="border border-1 border-opacity-40 border-white rounded-xl p-6 mt-6 mx-6 lg:mx-0 lg:mr-3  mb-12 ">
        <div className="w-full">
          <DogHouses openModal={openModal} />
        </div>
      </div>
    </>
  );
};

export default Houses;
