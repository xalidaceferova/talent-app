import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'

const Merhele2 = () => {
  const getselectData=()=>{
    const data=localStorage.getItem("formData")
    if(data){
      return JSON.parse(data)
    }
    else{
      return {
        secim: '',
        country: '',
        compotision: ''
    }
    }
    
  }
  const [formData, setFormData] = useState(getselectData());

  const formChange=(e)=>{
    const { name, value } = e.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));
    
  }
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);
  return (
    <>
    
    <form  onChange={formChange}>
    <div id='formtwo' className='mystyle'>
    <div className='select_ques'>"Seçilmiş" idman  növü üzrə ən böyük nailiyyətinizi qeyd edin.</div>
    
    
    <Select name="secim">
  <SelectTrigger className="w-[490px] h-[36px] rounded-[25px] bg-[#F2F6F6] ">
    <SelectValue   placeholder={formData.secim || "Rayon"} />
  </SelectTrigger>
  <SelectContent >
    <SelectItem  value="Respublika">Respublika</SelectItem>
    <SelectItem value="Rayon">Rayon</SelectItem>
    <SelectItem value="Region">Region</SelectItem>
    <SelectItem  value="Dünya">Dünya</SelectItem>
    <SelectItem value="Olimpiada">Olimpiada</SelectItem>     
   
  </SelectContent>
</Select>
  </div>

  <div id='formthree' className='tur'>
   <div className='tur_head'>Seçdiyiniz idman növü üzrə, hansı turda,neçənci yer əldə etmisiniz?</div>

   <div className='tur_check'>
   <Select name="country">
  <SelectTrigger className="w-[318px] h-[36px] rounded-[25px] bg-[#F2F6F6] ">
    <SelectValue placeholder={formData.country || "Respublika"} />
  </SelectTrigger>
  <SelectContent  >
    <SelectItem  value="Respublika">Respublika</SelectItem>
    <SelectItem value="Rayon">Rayon</SelectItem>
    <SelectItem value="Region">Region</SelectItem>
    <SelectItem  value="Dünya">Dünya</SelectItem>
    <SelectItem value="Olimpiada">Olimpiada</SelectItem>     
   
  </SelectContent>
</Select>
<Select name="compotision">
  <SelectTrigger  className="w-[151px] h-[36px] rounded-[25px] bg-[#F2F6F6] ">
    <SelectValue placeholder={formData.compotision || "1-ci yer"} />
  </SelectTrigger>
  <SelectContent >
    <SelectItem  value="1-ci yer">1-ci yer</SelectItem>
    <SelectItem value="2-ci yer">2-ci yer</SelectItem>
    <SelectItem value="3-cü yer">3-cü yer</SelectItem>
    <SelectItem  value="4-cü yer">4-cü yer</SelectItem>
    <SelectItem value="5-ci yer">5-ci yer</SelectItem> 
  </SelectContent>
</Select>
   </div>
  </div>
    </form>
    
    </>
  )
}

export default Merhele2