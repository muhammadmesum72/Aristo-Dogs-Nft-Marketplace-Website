import Link from 'next/link'
import React from 'react'

const HomeSection = () => {
  return (
    <div className='py-6 lg:py-16 w-full text-center lg:text-left lg:px-9'>
        <div className='h-3/4 flex flex-col items-left justify-center p-6 space-y-6'>
            <h1 className='text-4xl font-bold text-secondary'>Aristo Dogs</h1>
            <div className='space-y-3 py-3 text-sm lg:text-lg '>
            <p>We are a community of aristocrats, who are not satisfied with being one more of the bunch. We were put in a corner, and everybody knows that when a dog gets cornered, it will bite! We will be part of the 1% and we will claim the position of Aristocrats that we have always deserved, overcoming any obstacle that stands in the way of achieving it.</p>
            <p>Inspired, driven, and led by the community, we are building a 100% utility project, with the goal of making a sustainable ecosystem for the Cronos blockchain family, the #CroFam.</p>
            <p>Each OG Dog it unique and was generated from +100 possible traits. Each trait is special and has a different % of occurrence, giving you the chance to own a unique AristoDog. Owning an AristoDog, grants you the absolute ownership of your NFT, and its commercial rights. </p>
            <p>Read our roadmap and come to be part of the AristoFamily. #KeepBarking 🐶</p>
            </div>
           <div>
            <Link href="/create-trade/add-counterparty-wallet">
            <button className='px-6 py-3 bg-hardSecondary text-primary rounded-full font-bold hover:opacity-80 transition-all hover:text-white'>Start Trading</button>
            </Link>
            </div>
        </div>
        
    </div>
  )
}

export default HomeSection