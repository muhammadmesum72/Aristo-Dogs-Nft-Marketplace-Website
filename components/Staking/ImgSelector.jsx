import Image from 'next/image';
import { useState, useEffect } from 'react';
import { DogHousesList } from '../../data/data';

function App() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isStakeDisabled, setIsStakeDisabled] = useState(true);
  const [isUnstakeDisabled, setIsUnstakeDisabled] = useState(true);
  
  useEffect(() => {
    const isStakedSelected = selectedImages.some((id) => DogHousesList.find((house) => house.id === id)?.isStaked);
    setIsUnstakeDisabled(!isStakedSelected);
    
    const isUnstakedSelected = selectedImages.some((id) => DogHousesList.find((house) => house.id === id)?.isStaked === false);
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
    <div className="flex justify-between mb-4">
        <button className={isStakeDisabled ? "bg-gray-500 text-white px-4 py-2 rounded-lg mr-4" : "bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"} disabled={isStakeDisabled} onClick={handleStakeClick}>
          Stake Houses
        </button>
        <button className={isUnstakeDisabled ? "bg-gray-500 text-white px-4 py-2 rounded-lg mr-4" : "bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"} disabled={isUnstakeDisabled} onClick={handleUnstakeClick}>
          Unstake Houses
        </button>
      </div>
    <div className="flex flex-wrap justify-center items-center">
      {DogHousesList.map((house) => (
        <div
          key={house.id}
          className={`relative flex-shrink-0 w-64 h-64 m-4 border-2 ${
            selectedImages.includes(house.id) ? 'border-blue-500' : 'border-gray-300'
          }`}
          onClick={() => handleImageClick(house.id)}
        >
          <Image src={house.img} alt={`Dog House ${house.id}`} className="w-full h-full object-cover" />
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
