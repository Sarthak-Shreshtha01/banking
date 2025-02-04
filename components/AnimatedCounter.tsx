'use client'

import React from 'react'
import Countup from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div>
      <Countup 
      decimal='.'
      decimals={2}
      prefix='₹'
      duration={2.7}
      
      end={amount} />


    </div>
  )
}

export default AnimatedCounter
