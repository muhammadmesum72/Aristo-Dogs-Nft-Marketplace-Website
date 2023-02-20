import React from "react";
import { useRouter } from "next/router";

const HeaderProgress = () => {
  const route = useRouter();
  const pathname = route.pathname;
  const stepone = "/create-trade/add-counterparty-wallet";
  const steptwo = "/create-trade/counterparty-offer";
  const stepthree = "/create-trade/your-offer-selection";
  const stepfour = "/create-trade/add-counterparty-wallet";

  const step1 = () => {
    if (
      pathname === stepone ||
      pathname === steptwo ||
      pathname === stepthree ||
      pathname === stepfour
    ) {
      return true;
    } else {
      return false;
    }
  };

  const step2 = () => {
    if (pathname === stepthree || pathname === steptwo) {
      return true;
    } else {
      return false;
    }
  };

  const step3 = () => {
    if (pathname === stepthree) {
      return true;
    } else {
      return false;
    }
  };

  const step4 = () => {
    if (pathname === stepfour) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="lg:w-1/2 mx-auto my-3 z-1">
      <div className="flex pb-3 ">
        <div className="flex-1"></div>
        <div className="flex-1">
          <div
            className={
              step1()
                ? "w-6 h-6 mx-auto rounded-full text-lg flex items-center bg-orange-400 text-black"
                : "w-6 h-6 mx-auto rounded-full text-lg flex items-center bg-gray-400 text-black"
            }
          >
            <span className="text-sm text-center w-full">1</span>
          </div>
        </div>
        <div className="w-1/6 align-center items-center align-middle content-center flex ">
          <div
            className={
              step2()
                ? "w-full h-1 rounded items-center align-middle align-center flex-1 px-1.5 bg-orange-400 opacity-80"
                : "w-full h-1 rounded items-center align-middle align-center flex-1 px-1.5 bg-gray-400 opacity-80"
            }
          ></div>
        </div>
        <div className="flex-1">
          <div
            className={
              step2()
                ? "w-6 h-6 mx-auto rounded-full text-lg flex items-center bg-orange-400 text-black"
                : "w-6 h-6 mx-auto rounded-full text-lg flex items-center bg-gray-400 text-black"
            }
          >
            <span className="text-sm text-center w-full">2</span>
          </div>
        </div>
        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div
            className={
              step3()
                ? "w-full h-1 rounded items-center align-middle align-center flex-1 px-1.5 bg-orange-400 opacity-80"
                : "w-full h-1 rounded items-center align-middle align-center flex-1 px-1.5 bg-gray-400 opacity-80"
            }
          ></div>
        </div>
        <div className="flex-1">
          <div
            className={
              step3()
                ? "w-6 h-6 mx-auto rounded-full text-lg flex items-center bg-orange-400 text-black"
                : "w-6 h-6 mx-auto rounded-full text-lg flex items-center bg-gray-400 text-black"
            }
          >
            <span className="text-sm text-center w-full">3</span>
          </div>
        </div>
        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-full h-1 rounded items-center align-middle align-center flex-1 px-1.5 bg-gray-400 opacity-80"></div>
        </div>
        <div className="flex-1">
          <div className="w-6 h-6 mx-auto rounded-full text-lg flex items-center bg-gray-400 text-black">
            <span className="text-sm text-center w-full">4</span>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="flex text-xs content-center text-center">
        <div
          className={
            step1()
              ? "w-1/4 block text-orange-400"
              : "w-1/4 block text-gray-400"
          }
        >
          Counterparty
        </div>
        <div
          className={
            step2()
              ? "w-1/4 block text-orange-400"
              : "w-1/4 block text-gray-400"
          }
        >
          Their Offer
        </div>
        <div
          className={
            step3()
              ? "w-1/4 block text-orange-400"
              : "w-1/4 block text-gray-400"
          }
        >
          Your Offer
        </div>
        <div className="w-1/4 block text-gray-400">Confirmation</div>
      </div>
    </div>
  );
};

export default HeaderProgress;
