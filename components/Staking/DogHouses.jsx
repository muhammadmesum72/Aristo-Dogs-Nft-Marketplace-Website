import Image from "next/image";
import { useState, useEffect } from "react";
import { DogHousesList } from "../../data/data";

function App({ openModal }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isStakeDisabled, setIsStakeDisabled] = useState(true);
  const [isUnstakeDisabled, setIsUnstakeDisabled] = useState(true);

  useEffect(() => {
    const isStakedSelected = selectedImages.some(
      (id) => DogHousesList.find((house) => house.id === id)?.isStaked
    );
    setIsUnstakeDisabled(!isStakedSelected);

    const isUnstakedSelected = selectedImages.some(
      (id) => DogHousesList.find((house) => house.id === id)?.isStaked === false
    );
    setIsStakeDisabled(!isUnstakedSelected);
  }, [selectedImages]);

  const handleImageClick = (id) => {
    setSelectedImages((prevSelectedImages) => {
      if (prevSelectedImages.includes(id)) {
        return prevSelectedImages.filter((imageId) => imageId !== id);
      } else {
        return [...prevSelectedImages, id];
      }
    });
  };

  const handleStakeClick = () => {
    setSelectedImages((prevSelectedImages) => {
      prevSelectedImages.forEach((id) => {
        const house = DogHousesList.find((house) => house.id === id);
        if (house && !house.isStaked) {
          house.isStaked = true;
        }
      });
      return [...prevSelectedImages];
    });
  };

  const handleUnstakeClick = () => {
    setSelectedImages((prevSelectedImages) => {
      prevSelectedImages.forEach((id) => {
        const house = DogHousesList.find((house) => house.id === id);
        if (house && house.isStaked) {
          house.isStaked = false;
        }
      });
      return [...prevSelectedImages];
    });
  };
  return (
    <>
      <div className="flex items-center justify-between mb-4 w-full">
        <div>
          <h1 className=" text-2xl  md:text-3xl uppercase font-semibold">
            My Dog Houses
          </h1>
        </div>
        <div className="text-sm flex flex-col md:flex-row gap-3">
          <button
            className={
              isStakeDisabled
                ? "bg-gray-500 text-white md:px-4 md:py-2 p-2 rounded-lg mr-4"
                : "bg-blue-500 text-white md:px-4 md:py-2 p-2 rounded-lg mr-4"
            }
            disabled={isStakeDisabled}
            onClick={handleStakeClick}
          >
            Stake Houses
          </button>
          <button
            className={
              isUnstakeDisabled
                ? "bg-gray-500 text-white md:px-4 md:py-2 p-2 rounded-lg mr-4"
                : "bg-blue-500 text-white md:px-4 md:py-2 p-2 rounded-lg mr-4"
            }
            disabled={isUnstakeDisabled}
            onClick={handleUnstakeClick}
          >
            Unstake Houses
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center">
        {DogHousesList.map((house) => (
          <div
            key={house.id}
            className={`relative flex-shrink-0 rounded-xl overflow-hidden  border-4 cursor-pointer ${
              selectedImages.includes(house.id)
                ? "border-blue-500"
                : "border-none"
            }`}
            onClick={() => handleImageClick(house.id)}
          >
            <Image
              onDoubleClick={(e) => {
                // openModal()
                const newNft = house;
                if (house.isStaked) {
                  openModal();
                }
              }}
              src={house.img}
              alt={`Dog House ${house.id}`}
              className="w-full h-full object-cover"
            />
            {house.isStaked && (
              <span className="absolute top-0 right-0 bg-green-500 text-white p-2 text-xs font-bold">
                Staked
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
