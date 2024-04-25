import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'

const Merhele2 = ({leter}) => {
  return (
    <>
    
    <form>
    <div id='formtwo' className='mystyle'>
    <div className='select_ques'>"Seçilmiş" idman  növü üzrə ən böyük nailiyyətinizi qeyd edin.</div>
    
    
    <Select name="secim">
  <SelectTrigger className="w-[490px] h-[36px] rounded-[25px] bg-[#F2F6F6] ">
    <SelectValue  placeholder={leter["secim"]} />
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
    <SelectValue placeholder={leter["country"]} />
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
    <SelectValue placeholder={leter["compotision"]} />
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