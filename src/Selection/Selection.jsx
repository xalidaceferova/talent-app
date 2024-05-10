import { useEffect, useState } from "react";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Select } from "../components/ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import "./Selection.css";
import { TiDeleteOutline } from "react-icons/ti";
const Selection = ({setShow, show}) => {
  const getradioData=()=>{
    const data=localStorage.getItem("Radio")
    if(data){
      return JSON.parse(data)
    }
    else{
    return []
    }
  }
  const [radValue, setRadValue] = useState(getradioData());
const getData=()=>{
  const data=localStorage.getItem("Selection")
  if(data){
    return JSON.parse(data)
  }
  else{
    return []
  }
}
const [selectedSports, setSelectedSports] = useState(getData());
  const handleSelectChange = (e) => {
    setShow(true);
    const newValue = e.target.value;
    setSelectedSports((prevSelectedSports) => [
      ...prevSelectedSports,
      newValue,
    ]);
  };
  const handleRadioChange = (e,index) => {
    const { value } = e.target;
    const updatedRadValue = [...radValue];
    updatedRadValue[index] = value;
    setRadValue(updatedRadValue);
    localStorage.setItem("Radio", JSON.stringify(updatedRadValue));
  };
  function handleDelete(index) {
     const newlist=selectedSports.filter((_,i)=>i!==index)
     setSelectedSports(newlist)
  }
useEffect(()=>{
localStorage.setItem("Selection",JSON.stringify(selectedSports))
},[selectedSports])
  return (
    <>
      <form id="storage" onChange={handleSelectChange}>
        <div id="formborder" className="mystyle">
          <div className="select_ques">
            Hansı idman növü ilə məşğul olmusunuz?
          </div>
          <Select name="sports">
            <SelectTrigger className="w-[490px] h-[36px] rounded-[25px] bg-[#F2F6F6] ">
              <SelectValue placeholder="Futbol" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Futbol">Futbol</SelectItem>
              <SelectItem value="Voleybol">Voleybol</SelectItem>
              <SelectItem value="Basketbol">Basketbol</SelectItem>
              <SelectItem value="Atletika">Atletika</SelectItem>
              <SelectItem value="Güləş">Güləş</SelectItem>
              <SelectItem value="Döyüş növləri">Döyüş növləri</SelectItem>
              <SelectItem value="Handbol">Handbol</SelectItem>
              <SelectItem value="Badminton">Badminton</SelectItem>
              <SelectItem value="Şahmat">Şahmat</SelectItem>
            </SelectContent>
          </Select>
        </div>
       </form>
        {show ? (
          <div className="selected_sport">
            <div id="down_ques" className="selected_sport_head">
              Qeyd etdiyiniz idman növləri ilə hansı səviyyədə məşğulsunuz?
            </div>
            {selectedSports.map((item, index) => {
              return (
                <div className="noted_sports" key={index}>
                  <div className="secilmis_idman">
                    <p className="item_desc">{item}</p>
                    <button type="button" onClick={() => handleDelete(index)}>
                      <TiDeleteOutline className="delete_icon" />
                    </button>
                  </div>
                  <RadioGroup name={`talent-${index}`} className="noted_check" key={index}>
                  <div  className="check_heveskar" >
                              <Label htmlFor={`option-one${index}`}  className="heveskar_label">
                                Həvəskar
                              </Label>
                                    <RadioGroupItem
                                      value="option-one"
                                      className="heveskar_mark"
                                      checked={radValue[index] === "option-one"}
                                      onClick={() => handleRadioChange({ target: { value: "option-one" }}, index)}
                                    /> 
                            </div>
                            <div  className="check_heveskar">
                            <Label htmlFor={`option-two${index}`} className="Peşəkar_label">
                              Peşəkar
                            </Label>
                            <RadioGroupItem
                              value="option-two"
                              className="heveskar_mark"
                              checked={radValue[index] === "option-two"}
                              onClick={() => handleRadioChange({ target: { value: "option-two" }}, index)}
                            />
                          </div>
                  </RadioGroup>
                </div>
              );
            })}
           
          </div>
        ) : null}
       
    </>
  );
};

export default Selection;
