import "./Idman.css"
import Merhele1 from '../Merhele1'
import Merhele2 from '../Merhele2'
const Idman = ({page,leter,setCurrentstep,arr}) => {


  console.log("first")
  const PageDisplay=()=>{
        if(page===0){
             return (<Merhele1 leter={leter} setCurrentstep={setCurrentstep} arr={arr}></Merhele1>)
        }else {
          return (<Merhele2></Merhele2>)
        }
  }
  return (
   <>
   <div className="head_frame">
            
            <span className="idman_head">İdman</span>
          </div>
          <div className="dolacaq_hisse">
            <div className="dolacaq_hisse_div"></div> 
            </div>
 

          
          {PageDisplay()}
          
   </>
  )
}

export default Idman