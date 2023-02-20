import Image from 'next/image'
import React from 'react'
import roadmapImg from "../../../data/roadmap/roadmap.jpg"
import doaImg from "../../../data/roadmap/doa.jpg"
import dogHImg1 from "../../../data/roadmap/dog house 1.jpg"
import dogHImg2 from "../../../data/roadmap/dog house 2.jpg"
import dogHImg3 from "../../../data/roadmap/dog house 3.jpg"
import swapImg from "../../../data/roadmap/swap.png"
// import roadmapImg from "../../../data/roadmap/roadmap.jpg"

const Roadmap = () => {
  return (
    <div className='w-full lg:px-12 px-6 mt-6'>
      <div>
      <h2 className='text-4xl font-bold text-secondary text-center mb-6'>Roadmap</h2>
      </div>
        {/* Stages  */}
      <div className='w-full'>
        {/* stage 1 */}
        <div className='flex flex-col lg:flex-row p-3 mb-6 '>
        <div className='lg:w-4/12 w-full text-center lg:text-left mb-3'>
            <h2 className='text-2xl font-bold text-green-300 mb-6 '>CHAPTER I</h2>
            <div className='lg:w-full lg:pr-6 mx-auto pr-0 w-3/4'>
              <Image alt='roadmap Images' src={roadmapImg} className='rounded-lg' />
            </div>
          </div>
          <div className='w-11/12'>
            <div>
              <h3 className='text-2xl mb-6 font-semibold'>HOSTING RAFFLE</h3>
            </div>
            <div className='space-y-3'>
              <p>What if we told you that by owning an AristoDog, you could get a better return on your investment than if you listed it on the secondary market, like you usually do, to get a sale?</p>
              <p>Have you imagined having the possibility of obtaining that NFT that you always wanted, but that you cannot afford to pay, because the price of its floor is very high? Yes we are talking about Meerkats, Skulls, Lands or even a Loaded Lion for let’s say… 50 CRO?</p>
              <p>Well, let me tell you that we have you covered…  <a href="https://aristodogs.medium.com/chapter-1-the-hosting-raffle-1693669ec657" target={'_blank'} className='text-secondary font-bold'>Find out more here</a></p>
            </div>
          </div>
        </div>
        {/* stage 2 */}
        <div className='flex flex-col lg:flex-row p-3 mb-6 w-full'>
        <div className='lg:w-4/12 w-full text-center lg:text-left mb-3'>
            <h2 className='text-2xl font-bold text-green-300 mb-6 '>CHAPTER II</h2>
            <div className='lg:w-full lg:pr-6 mx-auto w-1/2'>
              <Image alt='roadmap Images' src={doaImg} className='rounded-lg shadow-xl' />
            </div>
          </div>
          <div className='w-11/12'>
            <div>
              <h3 className='text-2xl mb-6 font-semibold'>DAO BOARD</h3>
            </div>
            <div className='space-y-3'>
              <p>Our Round Table are the chosen Aristocrats that will help us navigate through tough waters and lead the way to a brighter future. Nevertheless, every Dog’s word will be heard!!</p>
              <p>Join our <a href="https://aristodogs.medium.com/chapter-1-the-hosting-raffle-1693669ec657" target={'_blank'} className='text-secondary font-bold'>Discord</a> and keep tuned for more…</p>
            </div>
          </div>
        </div>
        {/* stage 3 */}
        <div className='flex flex-col lg:flex-row p-3 mb-6 w-full'>
        <div className='lg:w-4/12 w-full text-center lg:text-left mb-3'>
            <h2 className='text-2xl font-bold text-green-300 mb-6 '>CHAPTER III</h2>
            <div className='lg:w-full lg:pr-6 mx-auto pr-0 w-3/4'>
              <Image alt='roadmap Images' src={swapImg} className='rounded-lg' />
            </div>
          </div>
          <div className='w-11/12'>
            <div>
              <h3 className='text-2xl mb-6 font-semibold'>ARISTOSWAP</h3>
            </div>
            <div className='space-y-3'>
              <p>It is fair to point out that we all love to have a trade now and then, there is this little thrill 🔥 in the negotiation and gratification after getting a new NFT in your possession that can’t be explained with words. Unfortunately, these emotions we are all looking for, is like honey 🍯 for scammers…</p>
              <p>Who has not heard on a discord channel or even on twitter that someone from the NFT ecosystem, regardless of the chain, has been scammed? The reality is that scammers 👾 are increasingly using better methods to steal from users: impersonation, corrupted links, wallets connected to suspicious sites, fake MODs…</p>
              <p>This is what motivated us to develop AristoSwap 🔁 the first safe place, for NFT traders, where scammers can’t get to you, and where you and your investments are protected 🔐 against fraud. <a href="https://aristodogs.medium.com/chapter-2-nft-swap-efe8ec1907da" target={'_blank'} className='text-secondary font-bold'>Find out more</a></p>
            </div>
          </div>
        </div>
        {/* stage 4 */}
        <div className='flex flex-col lg:flex-row p-3 mb-6 w-full'>
          <div className='lg:w-4/12 w-full text-center lg:text-left mb-3'>
            <span className='text-2xl font-bold text-green-300 '>CHAPTER IV</span>
          </div>
          <div className='w-11/12'>
            <div>
              <h3 className='text-2xl mb-6 font-semibold'>TRADING POST</h3>
            </div>
            <div className='space-y-3'>
              <p>To be Written</p>
            </div>
          </div>
        </div>
        {/* stage 5 */}
        <div className='flex flex-col lg:flex-row p-3 mb-6 w-full'>
        <div className='lg:w-4/12 w-full text-center lg:text-left mb-3'>
            <h2 className='text-2xl font-bold text-green-300 mb-6 '>CHAPTER V</h2>
            <div className='lg:grid grid-cols-2 gap-3 flex items-center justify-between w-full'>

            <div className='w-full pr-6'>
              <Image alt='roadmap Images' src={dogHImg1} className='rounded-lg' />
            </div>
            <div className='w-full pr-6'>
              <Image alt='roadmap Images' src={dogHImg2} className='rounded-lg' />
            </div>
            <div className='w-full pr-6'>
              <Image alt='roadmap Images' src={dogHImg3} className='rounded-lg' />
            </div>
            </div>
          </div>
          <div className='w-11/12'>
            <div>
              <h3 className='text-2xl mb-6 font-semibold'>THE DOGHOUSE</h3>
            </div>
            <div className='space-y-3'>
              <p>The DogHouses are the key to receive a portion of the royalties generated by the AD platform. 50% of the profits generated by every utility under the Aristoswap.app ecosystem.</p>
              <p>There will be a total of 3.333 Dog Houses. The total amount of houses will be divided in three different tiers: T1, T2 & T3. Each tier will earn a different amount of point, and ergo, it will be entitled more royalties, but we will get to specifics later.</p>
              <p><a href="https://aristodogs.medium.com/chapter-3-the-dog-house-d0759329956f" target={'_blank'} className='text-secondary font-bold'>Find out what house suits you better</a></p>
            </div>
          </div>
        </div>
        {/* stage 6 */}
        <div className='flex flex-col lg:flex-row p-3 mb-6 w-full'>
          <div className='lg:w-4/12 w-full text-center lg:text-left mb-3'>
            <span className='text-2xl font-bold text-green-300 '>CHAPTER VI</span>
          </div>
          <div className='w-11/12'>
            <div>
              <h3 className='text-2xl mb-6 font-semibold'>METAVERSE (CROTOPIA)</h3>
            </div>
            <div className='space-y-3'>
              <p>To be written</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap