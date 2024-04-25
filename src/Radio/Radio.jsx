import React from 'react'
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import "./Radio.css"
import { zodResolver } from "@hookform/resolvers/zod";
import * as  z from "zod"
import { useForm } from 'react-hook-form';
const formSchema=z.object({
  answer: z.string(),
  user:z.string()
})


const Radio = ({ setCurrentstep,arr}) => {
  const{register,handleSubmit,formState:{errors}}=useForm({
    resolver:zodResolver(formSchema)
})
  const onFormData=(data)=>{
    console.log(data)
}
  return (
    <>
    
    <div >

    <form onSubmit={handleSubmit(onFormData)}>
    <RadioGroup  >
  <div className='radios'>

 <div className='check_ques'>Məşğul olduğunuz idman növü var?*</div>

  <div className='checks' >
  <div className="check_beli">
    
  <Label htmlFor="option-one" className="label">Bəli</Label>
    <RadioGroupItem value="option-one"  id="option" className="mark" onClick={()=>{
       let selectBorder=document.getElementById("formborder")
      selectBorder.style.display="block";
    }} {...register("answer")} />
   
    
   
  </div>
  <div className="check_beli">
  <Label htmlFor="option-two"  className="label">Xeyr</Label>
    <RadioGroupItem  value="option-two"  id="option-two" className="mark" onClick={()=>{
      setCurrentstep(prev => prev === arr.length - 1 ? prev : prev + 1)
    }} {...register("user")}  />

   
  <input type="radio" name='same' value="ujas" onChange={(e)=>{
           console.log(e.target.value)

  }}/>
  <input type="radio" name='same'  value="ujas1" onChange={(e)=>{
           console.log(e.target.value)

  }}/>
  </div>
  </div>
  </div >
</RadioGroup  >

  <button type='submit'>click</button>
    </form>
    </div>
  
    </>
  )
}

export default Radio