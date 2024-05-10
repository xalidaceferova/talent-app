import React, { useState } from "react";
import "./Levels.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Tehsil from "../Tehsil";
import Bacariq from "../Bacariq";
import DilBilikleri from "../DilBilikleri";
import Istecrubesi from "../Istecrubesi/Istecrubesi";
import Program from "../Program";
import Kubok from "../Images/kubok.png";
import Tedris from "../Images/tehsil.png";
import Teacher from "../Images/Teacher.png";
import Talent from "../Images/İLLustration.png";
import Job from "../Images/Frame (1).png";
import Yekun from "../Images/Yekun.png";
import Head from "../Images/Rectangle 24 (1).png";
import Basliq from "../Images/Basliq.png";
import Radio from "../Radio/Radio";
import Selection from "../Selection/Selection";
import Merhele2 from "../Merhele2";
import "../Idman/Idman.css"
import { Form } from "../components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  type: z.enum(["all","none"], {
    required_error: "You need to select a notification type.",
  }),
})
const Levels = ({ currentstep, setCurrentstep}) => {
  const { trigger, handleSubmit, ...form } = useForm({
    resolver: zodResolver(FormSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const[show,setShow]=useState(false)
const[page,setPage]=useState(0)
const[isactive,setIsactive]=useState(false)
const goToNextStep =() =>{
 const geribtn=document.getElementById("geri")
  const firsticon=document.getElementById("icon1")
   if(currentstep-1!==0){
   geribtn.classList.remove("but_one")
   geribtn.classList.add("but_two")
   firsticon.classList.remove("arrowone")
   firsticon.classList.add("arrowtwo")
   } 
      const isValid = handleSubmit(onSubmit);
      if (isValid) {
        if (currentstep === exper.length - 3) {
          handleSubmit(onSubmit)();
        isactive?  setPage((curpage) => curpage + 1): handleSubmit(onSubmit)()

        } else {
          setCurrentstep((prev) => prev + 1);
        }
    
        if (page === 1) {
          setCurrentstep((prev) => prev + 1);
        }
      }
    
}
  const PageDisplay=()=>{
    if(page===0){
         return (    
          <>
           <Radio setIsactive={setIsactive} form={form}  setCurrentstep={setCurrentstep} arr={arr} ></Radio>
              {
                isactive? <Selection  setShow={setShow} show={show} ></Selection>:null
              }
          </>
          )
    }else {
      return (<Merhele2 ></Merhele2>)
    }
}
  const arr = [
    "Təhsil",
    "Dil bilikləri",
    "Bacarıqlar",
    "İdman",
    "İş təcrübəsi",
    "Proqram",
  ];
  const exper = [
    {
      desc: "Təhsil",
      img: Tedris,
      div: <Tehsil></Tehsil>,
    },
    {
      desc: "Dil bilikləri",
      img: Teacher,
      div:<DilBilikleri></DilBilikleri>
    },
    {
      desc: "Bacarıqlar",
      img: Talent,
      div: <Bacariq></Bacariq>,
    },
    {
      desc: "İdman",
      img: Kubok,
      div:  <>
      <div className="head_frame">
               
               <span className="idman_head">İdman</span>
             </div>
             <div className="dolacaq_hisse">
               <div style={{width:page===0?"50%" :"100%"}} className="dolacaq_hisse_div"></div> 
               </div>
    
   
             <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} >
            {PageDisplay()}
            
            </form>
             </Form>
             
             
      </>,
    },
    {
      desc: "İş təcrübəsi",
      img: Job,
      div: <Istecrubesi></Istecrubesi>,
    },
    {
      desc: "Proqram",
      img: Yekun,
      div: <Program></Program>,
    },
  ];
  const activeColor = (index) => (currentstep === index ? "level" : "");
  const isFinalStep = (index) => (index === exper.length - 1);
  const goToPreviousStep = () =>{
    const geribtn=document.getElementById("geri")
    const firsticon=document.getElementById("icon1")
    if(currentstep-1===0){
      geribtn.classList.remove("but_two")
      geribtn.classList.add("but_one")
      firsticon.classList.remove("arrowtwo")
      firsticon.classList.add("arrowone")
    }
    if (currentstep === exper.length - 3) {
      setPage((curpage) => curpage - 1);
      isactive? setIsactive(true):setIsactive(false)
     show?  setShow(true) :setShow(false)
    } else {
      setCurrentstep((prev) => prev - 1);
    }
    if (page === 0) {
      setCurrentstep((prev) => prev - 1); 
    }
  }
  const Num = (index) => (currentstep === index ? "bonus" : "");
  
  return (
    <>
      <div className="steps">
        <div className="header">
          <hr className="head_line2" />
          <hr className="head_line" />
          <div className="title">
            <div className="talent_score">
              <img className="talent_image" src={Basliq} alt="" />
              <p className="suni">Süni intelekt sistemi</p>
            </div>
            <div className="parag">
           
              Bu formu doldurduqdan sonra öz yaşıdlarınız arasında ən yaxşı
              hansı faizlikdə olduğunuzu müəyyən edə biləcəksiniz.
            </div>
          </div>
          <img className="head_image" src={Head} alt="" />
        </div>
        <div>
          {exper.map((item, index) => (
            <React.Fragment key={index}>
              <div className={`merhele ${activeColor(index)}`}>
                <span className={`num ${Num(index)}`}>{index + 1}.</span>
                <div className="item_frame">{item.desc}</div>
                
              </div>
              {isFinalStep(index)?null:null}
            </React.Fragment>
          ))}
        </div>
        
        <div className="sorgu">
     
     {exper[currentstep].div}
          
       </div>
        <div className="kubok_img">
          <img src={exper[currentstep].img} alt="" />
        </div>
      </div>

      <div className="butons">
        <div className="but_style">
          <button disabled={currentstep===0} id="geri" className="but_one" onClick={goToPreviousStep}>
            <FaArrowLeft id="icon1" className="arrowone" />
            Geri
          </button>

          <button type="submit" disabled={currentstep===exper.length-1} id="secbut" className="but_two" onClick={goToNextStep}>
            Növbəti
            <FaArrowRightLong id="icon2" className="arrowtwo" />
        </button>
        </div>
      </div>
      
    </>
  );
};

export default Levels;