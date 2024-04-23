import { Select } from "../components/ui/select";
import {
  
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import "./Selection.css"

const Selection = ({leter}) => {
  

  return (
    <>
    <form >
  <div id='formborder'  className='mystyle' >
   
    <div  className='select_ques'>Hansı idman növü ilə professional olaraq məşğul olmusunuz?</div>
 <Select name="sports" >
  <SelectTrigger className="w-[490px] h-[36px] rounded-[25px] bg-[#F2F6F6] ">
    <SelectValue  placeholder={leter["sports"]} />
  </SelectTrigger>
  <SelectContent  >
    <SelectItem  value="Futbol" >Futbol</SelectItem>
    <SelectItem value="Voleybol">Voleybol</SelectItem>
    <SelectItem value="Basketbol">Basketbol</SelectItem>
    <SelectItem  value="Atletika">Atletika</SelectItem>
    <SelectItem value="Güləş">Güləş</SelectItem>     
    <SelectItem value="Döyüş növləri">Döyüş növləri</SelectItem>
    <SelectItem  value="Handbol">Handbol</SelectItem>
    <SelectItem value="Badminton">Badminton</SelectItem>
    <SelectItem value="Şahmat">Şahmat</SelectItem>
  </SelectContent>
  </Select>
    
  </div>
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

export default Selection