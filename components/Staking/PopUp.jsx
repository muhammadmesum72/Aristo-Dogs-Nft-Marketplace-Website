import React, { useState } from "react";
import Nft1 from "../../data/Dog Houses/dog house 7.jpg";
import Nft2 from "../../data/Dog Houses/dog house 5.jpg";
import Nft3 from "../../data/Dog Houses/dog house 10.jpg";
import Nft4 from "../../data/Dog Houses/dog house 1.jpg";
import SelectBooster from "./SelectBooster1";
import SelectSpecialBooster from "./SelectSpecialBooster";
import Image from "next/image";
import Modal from "react-modal";
import SelectBooster1 from "./SelectBooster1";
import SelectBooster2 from "./SelectBooster2";
import SelectBooster3 from "./SelectBooster3";
const customStyles = {
  content: {
    // width: 'auto',
    // background: 'rgba(0,0,0,0.4)',
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
  },
};

const PopUp = () => {
  // Booster 1 states and func
  const [openBoosterPopUp1, setOpenBoosterPopUp1] = useState(false);
  const [booster1, setBooster1] = useState({
    name: "",
    id: "",
    nft: "",
  });

  const closeBoosterModal1 = () => {
    setOpenBoosterPopUp1(false);
  };

  const openBoosterModal1 = () => {
    setOpenBoosterPopUp1(true);
  };

  const addBooster1 = (booster) => {
    setBooster1(booster);
  };

  // Booster 2 states and func
  const [openBoosterPopUp2, setOpenBoosterPopUp2] = useState(false);
  const [booster2, setBooster2] = useState({
    name: "",
    id: "",
    nft: "",
  });

  const closeBoosterModal2 = () => {
    setOpenBoosterPopUp2(false);
  };

  const openBoosterModal2 = () => {
    setOpenBoosterPopUp2(true);
  };

  const addBooster2 = (booster) => {
    setBooster2(booster);
  };
  // Booster 3 states and func
  const [openBoosterPopUp3, setOpenBoosterPopUp3] = useState(false);
  const [booster3, setBooster3] = useState({
    name: "",
    id: "",
    nft: "",
  });

  const closeBoosterModal3 = () => {
    setOpenBoosterPopUp3(false);
  };

  const openBoosterModal3 = () => {
    setOpenBoosterPopUp3(true);
  };

  const addBooster3 = (booster) => {
    setBooster3(booster);
  };

  // Booster 3 states and func

  const [specialBooster, setSpecialBooster] = useState({
    name: "",
    id: "",
    nft: "",
  });
  const [openSpecialBoosterPopUp, setOpenSpecialBoosterPopUp] = useState(false);
  const closeSpecialBoosterModal = () => {
    setOpenSpecialBoosterPopUp(false);
  };
  const openSpecialBoosterModal = () => {
    setOpenSpecialBoosterPopUp(true);
  };
  const addSpecialBooster = (booster) => {
    setSpecialBooster(booster);
  };

  // others

  const Boosters = [];

  const unStakeAll = () => {
    // setBooster1.name === ""
    console.log('unStake')
  }

  const [showUnstakeBtn, setShowUnstakeBtn] = useState(false) 

  const unstakeBtn = () => {
    if(booster1.name !== ""){
      setShowUnstakeBtn(true)
    } else{
      setShowUnstakeBtn(false)
    }
  }

  return (
    <>
      <Modal
      ariaHideApp={false}
        isOpen={openBoosterPopUp1}
        onRequestClose={closeBoosterModal1}
        style={customStyles}
        className="text-white border-none outline-none  w-3/4  lg:w-1/2 rounded-xl bg-primary "
      >
        <SelectBooster1 addBooster1={addBooster1} boosters={Boosters} />
      </Modal>
      <Modal
      ariaHideApp={false}
        isOpen={openBoosterPopUp2}
        onRequestClose={closeBoosterModal2}
        style={customStyles}
        className="text-white border-none outline-none  w-3/4  lg:w-1/2 rounded-xl bg-primary "
      >
        <SelectBooster2 addBooster2={addBooster2} />
      </Modal>
      <Modal
      ariaHideApp={false}
        isOpen={openBoosterPopUp3}
        onRequestClose={closeBoosterModal3}
        style={customStyles}
        className="text-white border-none outline-none  w-3/4  lg:w-1/2 rounded-xl bg-primary "
      >
        <SelectBooster3 addBooster3={addBooster3} />
      </Modal>

      <Modal
      ariaHideApp={false}
        isOpen={openSpecialBoosterPopUp}
        onRequestClose={closeSpecialBoosterModal}
        style={customStyles}
        className="text-white border-none outline-none w-3/4  lg:w-1/2 rounded-xl bg-primary "
      >
        <SelectSpecialBooster addSpecialBooster={addSpecialBooster} />
      </Modal>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-center">
          <h2 className="text-sm lg:text-2xl font-semibold mb-3">
            Dog House 1
          </h2>
          <Image
            src={Nft1}
            alt="dogHouse"
            className="w-36 lg:w-48 rounded-lg"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* slot 1 */}
          <div
            onClick={openBoosterModal1}
            className="relative w-32 text-center border border-1 border-secondary rounded-xl h-32 overflow-hidden cursor-pointer"
          >
            <div className=" py-1 bg-secondary text-black font-semibold w-full">
              Booster 1
            </div>
            {booster1.name !== "" ? (
              <>
              <div>
                <Image src={booster1.nft} />
              </div>
              <div className="py-1 font-bold text-primary  absolute bottom-0 text-center w-full bg-white opacity-40 hover:opacity-100 hover:bg-red-600 hover:text-white">
                UnStake
              </div>
              </>
              
            ) : (
              <div className="text-3xl font-bold mt-3">+</div>
            )}
          </div>
          {/* slot 2 */}
          <div
            onClick={openBoosterModal2}
            className="relative w-32 text-center border border-1 border-secondary rounded-xl h-32 overflow-hidden cursor-pointer "
          >
            <div className="py-1 bg-secondary text-black font-semibold w-full">
              Booster 2
            </div>

           {booster2.name !== "" ? (
            <>
              <div>
                <Image src={booster2.nft} />
              </div>
              <div className="py-1 font-bold text-primary  absolute bottom-0 text-center w-full bg-white opacity-40 hover:opacity-100 hover:bg-red-600 hover:text-white">
                UnStake
              </div>
            </>

            ) : (
              <div className="text-3xl font-bold mt-3">+</div>
            )}
          </div>
          {/* slot 3 */}
          <div
            onClick={openBoosterModal3}
            className="relative w-32 text-center border border-1 border-secondary rounded-xl h-32 overflow-hidden cursor-pointer "
          >
            <div className="py-1 bg-secondary text-black font-semibold w-full">
              Booster 3
            </div>

           {booster3.name !== "" ? (
            <>
              <div>
                <Image src={booster3.nft} />
              </div>
              <div className="py-1 font-bold text-primary  absolute bottom-0 text-center w-full bg-white opacity-40 hover:opacity-100 hover:bg-red-600 hover:text-white">
                UnStake
              </div>
            </>
            ) : (
              <div className="text-3xl font-bold mt-3">+</div>
            )}
          </div>
          {/* special slot  */}
          <div
            onClick={openSpecialBoosterModal}
            className="relative w-32 ml-0 lg:ml-2 text-center border border-1 border-secondary rounded-xl h-32 overflow-hidden cursor-pointer "
          >
            <div className="py-1 bg-secondary text-black font-semibold w-full">
              Special Booster
            </div>

           {specialBooster.name !== "" ? (
            <>
            <div className="py-1 font-bold text-primary  absolute bottom-0 text-center w-full bg-white opacity-40 hover:opacity-100 hover:bg-red-600 hover:text-white">
                UnStake
              </div>
              <div>
                <Image src={specialBooster.nft} />
              </div>
            </>
            ) : (
              <div className="text-3xl font-bold mt-3">+</div>
            )}
          </div>
        </div>

        <div>
          {booster1.name !== "" && (
            <button onClick={unStakeAll} className="bg-secondary px-4 py-3 rounded-lg font-bold text-primary  hover:text-white transition ease-in-out">
              UnStake All
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PopUp;
