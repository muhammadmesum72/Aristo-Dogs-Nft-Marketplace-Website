import React from "react";



const StakingDetails = () => {
  const stakeDetails = [
    {
      id : 1,
      stats : "3/15",
      title: 'Number of Dog Houses Staked'
    },
    {
      id : 2,
      stats : "2/15",
      title: 'Number of Full Houses'
    },
    {
      id : 3,
      stats : "8/20",
      title: 'Number of Boosters Staked'
    },
    {
      id : 4,
      stats : "1/2",
      title: 'Number of Special Boosters Staked'
    },
    {
      id : 5,
      stats : "1.245",
      title: 'Current season Points'
    },
    {
      id : 6,
      stats : "97.430",
      title: '$BISCUIT Balance'
    },
    {
      id : 7,
      stats : "97.430",
      title: 'Claimable $BISCUIT',
      isClaim: true
    },

  ]
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 w-full">
        {stakeDetails.map((stake) => (
          <div key={stake.id} className={stake.isClaim ? "border border-1 border-white m-3 p-3 rounded-xl flex flex-row  items-center justify-between bg-slate-800 col-span-2" : "border border-1 border-white m-3 p-3 rounded-xl flex flex-col items-center justify-between bg-slate-800"}>
            <div className="flex flex-col items-center justify-center w-full text-center ">
            <h1 className="text-2xl font-bold mb-2">{stake.stats}</h1>
            <h2 className="text-sm">{stake.title}</h2>
            </div>
            
            {/* <div> */}
              {stake.isClaim && <div className="w-full text-center"> <button className=" bg-hardSecondary hover:bg-secondary px-6 py-2 rounded-lg text-xl text-primary font-bold transition ease-in-out duration-200">Claim</button> </div>}
            </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default StakingDetails;
