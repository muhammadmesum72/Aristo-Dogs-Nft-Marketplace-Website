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
import { DogHousesList, StakedHouses } from "../../data/data";

const Houses = () => {
  const [stakedHouses, setStakedHouses] = useState(StakedHouses);
  const [newHousesForStake, setNewHousesForStake] = useState([]);
  const [houseForUnstake, setHousesForUnstake] = useState({});
  // const [unStake, ]

  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (image, isStaked) => {
    // if (selectedImages.includes(image)){
    // } else if(isStaked){
    //   setUnstakeButton(true)
    // }
    // if (selectedImages.includes(image)) {
    //     setSelectedImages(selectedImages.filter((selectedImage) => selectedImage !== image));
    // } else {
    //   setSelectedImages([...selectedImages, image]);
    // }
  };

  const addNftForStake = (newHouse) => {
    if (stakedHouses.includes(newHouse)) {
      stakedHouses.filter((house) => house.id !== newHouse.id);
    } else {
      setStakedHouses([newHouse, ...stakedHouses]);
    }
  };

  const addNftsForUnstake = (newHouse) => {
    setHousesForUnstake([newHouse]);
  };
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
