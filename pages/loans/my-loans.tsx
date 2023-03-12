import Link from "next/link";
import {useState} from "react";
import { AiOutlineDownSquare } from "react-icons/ai";

const myLoans = () => {
  const [activeLoans, setActiveLoans] = useState(false);
  const [defaultedLoans, setDefaultedLoans] = useState(false);

  const onClickActiveLoansBtn = () => setActiveLoans(!activeLoans);
  const onClickDefaultLoansBtn = () => setDefaultedLoans(!defaultedLoans);
  return (
    <div className="lg:ml-64">
      <div className="container mx-auto py-5 px-2">
        <div className="flex flex-col items-center">
          <div className="flex justify-between flex-col xl:flex-row items-center w-full mb-2">
            <div className="flex-1"></div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-2xl">My Loans</div>
              <div>Last Refreshed: Mon, 26 Dec 2022 17:06:07 GMT</div>
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
                      <div className="w-full">
                        <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg scrollbar scrollbar-thumb-teal-700 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-800">
                          <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase ">
                              <tr>
                                <th
                                  scope="col"
                                  className="py-2 px-3 bg-primary text-white"
                                >
                                  {" "}
                                  Collection{" "}
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 bg-primary text-white"
                                >
                                  Floor
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 bg-primary text-white"
                                >
                                  Loan + interest
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 bg-primary text-white"
                                >
                                  Period
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 bg-primary text-white"
                                >
                                  Status
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 bg-primary text-white"
                                ></th>
                              </tr>
                            </thead>
                            {/* If not found  */}
                            {/* <tbody>
                              <tr className="bg-cyan-800">
                                <td colSpan={8}>
                                  <div className="flex w-full flex-col items-center justify-center my-4">
                                    <span className="text-center">
                                      {" "}
                                      No Loans Found
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </tbody> */}

<tbody className="text-xs text-gray-700 bg-cyan-800 uppercase ">
                              <tr>
                                <td
                                  scope="col"
                                  className="py-2 px-3 bg-cyan-800 text-white"
                                >
                                  {" "}
                                  Collection{" "}
                                </td>
                                <td
                                  scope="col"
                                  className="px-6 py-3 bg-cyan-800 text-white font-monospace"
                                >
                                  30 CRO
                                </td>
                                <td
                                  scope="col"
                                  className="px-6 py-3 bg-cyan-800 text-white"
                                >
                                  63 CRO
                                </td>
                                <td
                                  scope="col"
                                  className="px-6 py-3 bg-cyan-800 text-white"
                                >
                                  21 Days
                                </td>
                                <td
                                  scope="col"
                                  className="px-6 py-3 bg-cyan-800 text-white"
                                >
                                  Funded
                                </td>
                                <td
                                  scope="col"
                                  className="px-6 py-3 bg-cyan-800 text-white"
                                ></td>
                              </tr>
                            </tbody>
                          </table>
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

export default myLoans;
