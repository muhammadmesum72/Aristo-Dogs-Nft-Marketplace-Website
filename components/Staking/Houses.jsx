import Image from "next/image";
import React, { useState } from "react";
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
import { DogHousesList, StakedHouses } from "../../data/data";


const Houses = () => {
  const [stakedHouses, setStakedHouses] = useState(StakedHouses);
  const [newHousesForStake, setNewHousesForStake] = useState([]);


  const addNftForStake = (newHouse) => {
    if (stakedHouses.includes(newHouse)) {
      stakedHouses.filter((house) => house.id !== newHouse.id);
    } else {
      setStakedHouses([newHouse, ...stakedHouses]);
    }
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
        <div className="flex flex-row items-center justify-between mb-6 ">
          <div></div>
          <div>
            <h1 className=" text-2xl md:text-3xl uppercase font-semibold">
              My Dog Houses
            </h1>
          </div>
          <div>
            {newHousesForStake.length > 0 ? (
              <button
                onClick={() =>
                  console.log('stake nfts')
                }
                className="bg-hardSecondary rounded-lg  px-6 py-2 text-primary font-bold hover:text-white transition ease-in-out"
              >
                Stake Nfts
              </button>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-6">
          {DogHousesList.map((house) => (
            <div className="relative w-fit">
              <label htmlFor={house.id} >
                <Image
                  onClick={(e) => {
                    const newNft = house;
                    if (house.isStaked) {
                      openModal();
                    } else {
                      addNftForStake(newNft);
                      newHousesForStake.push(newNft);
                    }
                    console.log(newHousesForStake);
                  }}
                  src={house.img}
                  key={house.id}
                  className="w-48 cursor-pointer hover:opacity-70 transition ease-in-out duration-200 opacity-100"
                  alt="dogHouse"
                />
              </label>
              {house.isStaked ? (
                <div className="bg-secondary opacity-100 absolute top-0 left-0  text-black px-3 py-2 rounded-xl text-sm font-bold">
                  Staked
                </div>
              ) : (
                
                  <input
                    id={house.id}
                    name={house.id}
                    type="checkbox"
                    className="bg-secondary opacity-100 absolute top-0 right-0  text-black px-3 py-2 rounded-xl text-sm font-bold"
                  />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Houses;
