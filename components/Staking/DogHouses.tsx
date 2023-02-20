import Image from "next/image";
import React, { useState } from "react";
import { DogHousesImgs } from "../../data/data";
// import DogHouse1 from '../../data/Dog Houses/dog house 1.jpg'
import Modal from "react-modal";
import PopUp from "./PopUp";

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

const DogHouses = () => {
  const [showHouseDetails, setDogHouseDetails] = useState(false)

  const openModal = () => {
    setDogHouseDetails(true)
  }
  const closeModal = ()=>{
    setDogHouseDetails(false)
  }
  return (
    <>
     <Modal isOpen={showHouseDetails}
          onRequestClose={closeModal}
          style={customStyles}
          className="text-white w-full mt-6 lg:w-2/3 p-6 rounded-xl bg-primary ">
            <PopUp />
    </Modal>
    <div className="border border-1 border-opacity-40 border-white rounded-xl p-6 mt-6 mx-6 lg:mx-0 lg:mr-3  mb-12 ">
      <h1 className="text-center text-2xl md:text-3xl mb-6 uppercase font-semibold">My Dog Houses</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-6">

      {DogHousesImgs.map((house) => (
        <div className="w-full">
          <Image onClick={openModal} src={house} alt="house" className="w-48 cursor-pointer hover:opacity-70 transition ease-in-out duration-200" />
        </div>
      ))}
      </div>
    </div>
    </>
  );
};

export default DogHouses;
