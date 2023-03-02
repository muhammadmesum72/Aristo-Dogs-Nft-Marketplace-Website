import React from 'react'
// import DogHouses from '../components/Staking/DogHouses'
import Houses from '../components/Staking/Houses'
import StakingDetails from '../components/Staking/StakingDetails'

const staking = () => {
  return (
    <div className='lg:ml-72 '>
        <StakingDetails />
        {/* <DogHouses /> */}
        <Houses />
    </div>
  )
}

export default staking