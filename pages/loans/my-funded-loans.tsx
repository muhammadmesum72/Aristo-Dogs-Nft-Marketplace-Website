import Link from "next/link";
import React from "react";
import { AiOutlineDownSquare } from "react-icons/ai";

const myFundedLoans = () => {
  const [activeLoans, setActiveLoans] = React.useState(false);
  const [defaultedLoans, setDefaultedLoans] = React.useState(false);

  const onClickActiveLoansBtn = () => setActiveLoans(!activeLoans);
  const onClickDefaultLoansBtn = () => setDefaultedLoans(!defaultedLoans);
  return (
    <div className="lg:ml-64">
      <div className="container mx-auto py-5 px-2">
        <div className="flex flex-col items-center">
          <div className="flex justify-between flex-col xl:flex-row items-center w-full mb-2">
            <div className="flex-1"></div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-2xl">Loans Funded by Me </div>
              <div>Last Refreshed: Mon, 26 Dec 2022 16:42:01 GMT</div>
            </div>
            <div className="flex-1 flex justify-end mt-4 mb-4 xl:mb-0 xl:mt-0 mr-4">
              <Link href="/loans/create">
                <button className="bg-secondary px-5 py-3 rounded-full text-black text-sm transition hover:bg-hardSecondary font-bold">
                  <span className="pl-2">Create a Loan Listing</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full p-9">
            <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row relative w-full lg:justify-center">
                <div className="flex flex-col w-full max-w-7xl justify-center">
                  {/* Active Loans */}
                  <div className="mb-4">
                    <div>
                      <button
                        onClick={onClickActiveLoansBtn}
                        className="flex items-center w-full justify-between bg-blue-500 hover:bg-opacity-50 p-2 transition-colors group rounded-t-md"
                      >
                        <div className="group-hover:pl-2 transition-all">
                          <div className="flex justify-center">
                            <span> Active Loans (0)</span>
                          </div>
                        </div>
                        {activeLoans ? (
                          <AiOutlineDownSquare className="w-9 mr-3 transition-all duration-200 rotate-180" />
                        ) : (
                          <AiOutlineDownSquare className="w-9 mr-3 transition-all duration-200 rotate-0" />
                        )}
                      </button>
                    </div>
                    {activeLoans ? (
                      <div className="bg-blue-400">
                        <div className="py-2 flex flex-row flex-wrap w-full justify-center bg-cyan-900">
                          <span>
                            You don't have any active loans right now.
                          </span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* paid back loans */}
                  <div>
                    <div>
                      <button
                        onClick={onClickDefaultLoansBtn}
                        className="flex items-center w-full justify-between bg-blue-500 hover:bg-opacity-50 p-2 transition-colors group rounded-t-md"
                      >
                        <div className="group-hover:pl-2 transition-all">
                          <div className="flex justify-center">
                            <span> Paid back and defaulted loans (0)</span>
                          </div>
                        </div>
                        {defaultedLoans ? (
                          <AiOutlineDownSquare className="w-9 mr-3 transition-all duration-200 rotate-180" />
                        ) : (
                          <AiOutlineDownSquare className="w-9 mr-3 transition-all duration-200 rotate-0" />
                        )}
                      </button>
                    </div>
                    {defaultedLoans ? (
                      <div className="bg-blue-400">
                        <div className="py-2 flex flex-row flex-wrap w-full justify-center bg-cyan-900">
                          <span>
                            You don't have any paid back or defaulted loans
                            right now.
                          </span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myFundedLoans;
