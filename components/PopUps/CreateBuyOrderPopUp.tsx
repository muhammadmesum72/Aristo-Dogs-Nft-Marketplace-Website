import React from "react";
import Image from "next/image";
import CronosSvg from "../../data/CronoSvg.svg";

const CreateBuyOrderPopUp = () => {
  return (
    <div className="h-96 overflow-y-scroll">
      <div className="pb-2">
        <div className="flex flex-row items-center w-full shadow-xl">
          <div className="justify-self-start flex-1"></div>
          <div className="font-bold justify-self-center lg:text-2xl">
            Create Buy Order
          </div>
          <div className="justify-self-end flex-1 flex justify-end"></div>
        </div>
      </div>
      <div className="flex items-center mx-auto w-full flex-col flex-wrap max-w-3xl justify-center gap-2 pb-2 px-0 md:px-2 lg:px-4 mb-1">
        <div className="flex flex-col items-center text-center">
          <span className="text-orange-600 text-lg"> Choose Collection </span>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col w-full justify-center items-center relative">
          <div className="w-full max-w-md">
            <input
              type="text"
              className="w-full max-w-md px-4 h-9 outline-none border-gray-200 border-1 border-opacity-25 focus:ring focus:ring-primary-500 focus:ring-opacity-60 focus:border-primary-500 rounded-full bg-transparent focus:bg-transparent transition-all"
              placeholder="Search for Collection"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center mx-auto w-full flex-col flex-wrap max-w-3xl justify-center gap-2 pb-2 px-0 md:px-2 lg:px-4 mb-1">
          <div className="flex flex-col items-center text-center">
            <span className="text-orange-600 text-lg py-3">
              Buy Order for ...
            </span>
            <p className="text-sm">
              Specify the price per NFT and the amount of NFTs you would like to
              buy for that price. You can set the buy order to expire after a
              certain amount of time. After the expiration time, the buy order
              becomes inactive. You can always extend it later
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 w-full">
        <div className="flex flex-col">
          <label htmlFor="price">Price per NFT</label>
          <div className="flex flex-row items-center">
            <div className="flex w-full items-start flex-col min-w-36 max-w-36">
              <div className="">
                <label></label>
              </div>
              <div className="w-full">
                <div className="relative">
                  <div className="flex items-center justify-between border border-gray-400  rounded-lg">
                    <input
                      className="w-full px-2 h-9 outline-none border-none focus:ring focus:ring-primary-500 focus:ring-opacity-60 focus:border-primary-500 rounded-lg bg-transparent focus:bg-transparent transition-all pl-10"
                      type="number"
                      step="0.001"
                      max="100000"
                    />
                    <div className="absolute w-10 h-9 rounded-full mr-3 flex justify-center items-center">
                      <Image
                        alt="/solana-sol-logo.svg"
                        src={CronosSvg}
                        className="h-3 w-3 md:h-6 md:w-6"
                      />
                    </div>
                    <div className="opacity-0 scale-0 absolute w-10 h-9 transition origin-center duration-500 right-0 rounded-full hover:text-pink cursor-pointer flex justify-center items-center"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center pl-2">
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Quantity</label>
          <input
            className="w-full px-2 h-9 outline-none border-1 border-gray-400 focus:ring focus:ring-primary-500 focus:ring-opacity-60 focus:border-primary-500 rounded-lg bg-transparent focus:bg-transparent transition-all pl-3"
            type="number"
            step="0.001"
            max="100000"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Expiration </label>
          <select
            name=""
            id=""
            className="w-full px-2 h-9 outline-none border-1 border-gray-400 focus:ring focus:ring-primary-500 focus:ring-opacity-60 focus:border-primary-500 rounded-lg bg-transparent focus:bg-transparent transition-all pl-3"
          >
            <option
              value="3"
              className="w-32 p-6 rounded-lg bg-primary text-white"
            >
              3 Days
            </option>
            <option
              value="6"
              className="w-32 p-6 rounded-lg bg-primary text-white"
            >
              6 Days
            </option>
            <option
              value="9"
              className="w-32 p-6 rounded-lg bg-primary text-white"
            >
              9 Days
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-3">
        <h1 className="text-xl font-semibold text-secondary">
          Total CRO of this Buy Order
        </h1>
        <div className="inline-flex items-center gap-4 py-3">
        <Image alt="/solana-sol-logo.svg" src={CronosSvg} className="h-3 w-3 md:h-6 md:w-6" />
        <span className="text-lg font-bold">0.00 CRO</span>
        </div>
      </div>

      <div className="flex  items-center justify-center gap-6 py-6">
        <div>
          <button className="rounded-full px-12 py-2 border-secondary border-1 text-secondary">
            Cancel
          </button>
        </div>
        <div>
          <button className="rounded-full px-12 py-2 bg-secondary text-black font- text-secondary">
            Create Loan Pool
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBuyOrderPopUp;
