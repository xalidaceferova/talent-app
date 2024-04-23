import React from 'react'
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import "./Radio.css"
const Radio = ({setCurrentstep,arr}) => {
  return (
    <>
 

  <RadioGroup defaultValue="option-one">
  <div className='radios'>

 <div className='check_ques'>Məşğul olduğunuz idman növü var?*</div>

  <div className='checks'>
  <div className="check_beli">
  <Label htmlFor="option-one" className="label">Bəli</Label>
    <RadioGroupItem value="option-one" id="option-one" className="mark"   /> {/*onClick={()=>{
       let selectBorder=document.getElementById("formborder")
       let selecttwo=document.getElementById("formtwo")
       let selectthree=document.getElementById("formthree")
       selectthree.style.display="block"
      selectBorder.style.display="block"
      selecttwo.style.display="block"
    }}*/}
   
  </div>
  <div className="check_beli">
  <Label htmlFor="option-two"  className="label">Xeyr</Label>
    <RadioGroupItem value="option-two" id="option-two" className="mark" onClick={()=>{
      setCurrentstep(prev => prev === arr.length - 1 ? prev : prev + 1)
    }} />
  
  </div>
  </div>
  </div>
</RadioGroup>
    </>
  )
}

export default Radio