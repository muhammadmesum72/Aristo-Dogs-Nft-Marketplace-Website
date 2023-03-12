import Nft from "./Nfts/Nft (1).jpg";
import Nft1 from "./Nfts/Nft (2).jpg";
import Nft2 from "./Nfts/Nft (3).jpg";
import Nft3 from "./Nfts/Nft (4).jpg";
import Nft4 from "./Nfts/Nft (1).jpeg";
import DogHouse1 from "./Dog Houses/dog house 1.jpg";
import DogHouse2 from "./Dog Houses/dog house 2.jpg";
import DogHouse3 from "./Dog Houses/dog house 3.jpg";
import DogHouse4 from "./Dog Houses/dog house 4.jpg";
import DogHouse5 from "./Dog Houses/dog house 5.jpg";
import DogHouse6 from "./Dog Houses/dog house 6.jpg";
import DogHouse7 from "./Dog Houses/dog house 7.jpg";
import DogHouse8 from "./Dog Houses/dog house 8.jpg";
import DogHouse9 from "./Dog Houses/dog house 9.jpg";
import DogHouse10 from "./Dog Houses/dog house 10.jpg";

export const RafflesData = [
  {
    id: 1,
    nft: Nft,
    raffleEndTime: new Date().toLocaleDateString,
    ticketSupply: 20,
    tickePrice: 32,
    cryptocurrency: "SOL",
  },
  {
    id: 2,
    nft: Nft2,
    raffleEndTime: new Date().toLocaleDateString,
    ticketSupply: 26,
    tickePrice: 88,
    cryptocurrency: "CRO",
  },
];

export const IncomingTradesOfferList = [
  {
    id: 1,
    offers: {
      counterpartyWalletAddress: "bj6EHxAu859Tw9AewqFEJ8crkF29Kha4topKdZxFrRBW",
      nft: Nft,
      sol: 123,
    },
    recieves: {
      id: 3,
      nfts: [Nft, Nft4, Nft2, Nft3, Nft1],
      sol: 140,
    },
  },
  {
    id: 2,
    offers: {
      counterpartyWalletAddress: "ZxFewqFEJ9TwF29Kha4to8rRBW9Acrkbj6EHxAu85pKd",
      nft: Nft2,
      sol: 232,
    },
    recieves: {
      id: 4,
      nfts: [Nft, Nft3, Nft2, Nft1, Nft4],
      sol: 32,
    },
  },
];

export const SendTradesOfferList = [
  {
    id: 1,
    offers: {
      counterpartyWalletAddress: "J9TwF29Kha4to8crkbj6EHxAu85pKdZ9AewqFExFrRBW",
      nft: Nft2,
      sol: 87,
    },
    recieves: {
      id: 1,
      nfts: [Nft, Nft1, Nft4, Nft3, Nft2],
      sol: 140,
    },
  },
  {
    id: 2,
    offers: {
      counterpartyWalletAddress: "9AewqFEJ9TwF29Kha4to8crkbj6EHxAu85pKdZxFrRBW",
      nft: Nft,
      sol: 232,
    },
    recieves: {
      id: 2,
      nfts: [Nft3, Nft, Nft2, Nft1, Nft4],
      sol: 90,
    },
  },
];

export const DogHousesImgs = [
  DogHouse1,
  DogHouse2,
  DogHouse3,
  DogHouse4,
  DogHouse5,
  DogHouse6,
  DogHouse7,
  DogHouse8,
  DogHouse9,
  DogHouse10,
];

export const DogHousesList = [
  {
    id: 1,
    img: DogHouse1,
    isStaked: true,
  },
  {
    id: 3,
    img: DogHouse2,
    isStaked: false,
  },
  {
    id: 2,
    img: DogHouse3,
    isStaked: true,
  },
  {
    id: 4,
    img: DogHouse4,
    isStaked: false,
  },
  {
    id: 5,
    img: DogHouse5,
    isStaked: false,
  },
  {
    id: 6,
    img: DogHouse6,
    isStaked: true,
  },
];

export const WalletNfts = [
  {
    name: "Dog House #234",
    id: "12s3s",
    nft: DogHouse8,
  },
  {
    name: "Dog House #789",
    id: "3s433",
    nft:DogHouse10,
  },
  {
    name: "Dog House #099",
    id: "89hyd",
    nft: DogHouse9,
  },
];

// const stakedHousesFilter = () => {
//   // const stakedHouses = DogHousesList.filter((house) => house.isStaked == true)
//   // return stakedHouses
  
// }
// stakedHousesFilter()
export const StakedHouses = DogHousesList.filter((house) => house.isStaked == true)

// console.log(StakedHouses)

