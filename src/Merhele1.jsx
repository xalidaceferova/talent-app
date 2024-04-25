import React from 'react'
import Radio from './Radio/Radio'
import Selection from './Selection/Selection'

const Merhele1 = ({leter,setCurrentstep,arr}) => {
  return (
    <>
    
    <Radio  setCurrentstep={setCurrentstep} arr={arr}></Radio>
          <Selection leter={leter}></Selection>
    
    </>
  )
}

export default Merhele1