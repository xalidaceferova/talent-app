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
 
  
 
 
  </form>
    
    </>
  )
}

export default Selection