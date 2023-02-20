import React from 'react'
import DogHouses from '../components/Staking/DogHouses'
import StakingDetails from '../components/Staking/StakingDetails'

const staking = () => {
  return (
    <div className='lg:ml-72 '>
        <StakingDetails />
        <DogHouses />
    </div>
  )
}

export default staking