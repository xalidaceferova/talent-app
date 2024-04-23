import React from 'react'
import "./Istecrubesi.css"
const Istecrubesi = ({job}) => {
  return (
    <>
    <h1>is tecrubesi</h1>
  {/*<form  onSubmit={(e)=>{
      e.preventDefault()
      const fd=new FormData(e.target)
      const obj=Object.fromEntries(fd)
      const json=JSON.stringify(obj)
      localStorage.setItem("Tecrube",json)
      
    }} >

<div className='prac_ques'>
  <div className='first_prac_ques'>Hazırda çalışdığınız ixtisasınız hansıdır?</div>
  <div className='first_inp_div'>
    <input id='practice' name='jobname' className='first_inp' type="text" placeholder={job["jobname"]} />
  </div>
</div>
<div className='prac_ques'>
  <div className='first_prac_ques'>Çalışdığınız müəssisənin adını qeyd edin.</div>
  <div className='first_inp_div'>
    <input name='jobposition' className='first_inp' type="text" placeholder={job["jobposition"]} />
  </div>
</div>
<div className='prac_ques'>
  <div className='first_prac_ques'>İşə başlama tarixi:</div>
  <div className='first_inp_div'>
    <input name='startdate' className='first_inp_date' type="date"  placeholder={job["startdate"]}/>
  </div>
</div>
<div className='prac_ques'>
  <div className='first_prac_ques'>İşdən ayrılma tarixi:</div>
  <div className='first_inp_div'>
    <input name='enddate' className='first_inp_date' type="date" placeholder={job["enddate"]} />
  </div>
</div>
<div className='notworking_div'>
<label htmlFor="notwork" className='notwork_label'>Hal hazırda çalışıram</label>
<input  type="checkbox" id='notwork' name='notwork'/>
</div>

  <button type='submit' className='istecrubesi_btn'>Yadda saxla</button>
  
  </form>*/}
    
    </>
  )
}

export default Istecrubesi
