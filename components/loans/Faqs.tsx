import React from 'react'
import { AiFillDownSquare } from 'react-icons/ai';

const Faqs = () => {
    const [showFaq, setShowFaq] = React.useState(false);
    const clickFaqBtn = () => {
      setShowFaq((prev) => !prev);
    };
    return (
      <div className="px-6 w-full">
        <div className="container mx-auto py-5 px-2">
          <div className="flex justify-center w-full">
            <div className="flex flex-col items-center w-full max-w-2xl">
              <div className="text-xl">FAQ</div>
              <div className="text-base max-w-sm text-center mt-5">
                {" "}
                We are always open to feedback! If you wish to get in touch, join
                our Discord or hit us up on Twitter.{" "}
              </div>
              {/* faqs */}
              <div className="w-full max-w-5xl mt-5">
                <div className="my-3">
                  <div>
                    <button onClick={clickFaqBtn}
                      className="flex items-center w-full justify-between bg-blue-500 hover:bg-green hover:bg-opacity-50 p-2 transition-colors group rounded-md"
                    >
                      <div className="group-hover:pl-2 transition-all">
                        <span className="">How do sale listings work?</span>
                      </div>
                      {showFaq ?  <AiFillDownSquare className="w-9 mr-3 transition-all duration-200  " /> :  <AiFillDownSquare className="w-9 mr-3 transition-all duration-200 rotate-180  " /> }
                    </button>
                  </div>
                  {showFaq ? 
                    <div  className="bg-blue-800">
                    <div className="flex justify-start flex-wrap gap-y-3 p-4">
                      <span className="opacity-80">
                        <span>
                          First, the seller chooses the NFT they'd like to sell
                          and the listing terms (price, optional creator fees,
                          optional charity/DAO fees). After confirming, the NFT is
                          moved to an escrow wallet. When somebody chooses to buy
                          it, the NFT is moved to their wallet, while the amount
                          paid is sent to the seller with any relevant fees
                          deducted.
                        </span>
                      </span>
                    </div>
                  </div>
                  :
                  ""}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Faqs