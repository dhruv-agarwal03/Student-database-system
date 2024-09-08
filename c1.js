import { useState } from "react";
import './design.css';
function C1() {
  let [arr,setArr]=useState([]);
  function isInteger(value){
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
     function f1(){
      let naam=document.getElementById("name")
      let rollnmber=document.getElementById("roll_number");
      let branch=document.getElementById("branch");
      let umar=document.getElementById("age");
      if(rollnmber.value.trim()==""||!(isInteger(rollnmber.value))){
        rollnmber.focus();
        rollnmber.value="";
        alert("fill the roll number");
     
       }
      else if(naam.value.trim()==""){
        naam.focus();
        alert("fill the name");
        return;
       }
       else if(branch.value.trim()==""||branch.value.trim()=="All"){
        branch.focus();
        branch.value="";
        alert("Choose the branch");
       }
      
       else if(umar.value.trim()==""||!(isInteger(umar.value))){
        umar.focus();
        umar.value="";
        alert("fill the Age");

       }
      else if(getIndex(rollnmber.value)!=-1) alert("Roll number already exist");
      else{
        let obj={rollno:rollnmber.value,name:naam.value,course:branch.value,age:umar.value};
        console.log("Adding new item:", obj);
        setArr([...arr,obj]);
        naam.value="";
        rollnmber.value="";
        umar.value="";
        branch.value="";
      }
     }
     function hatao(idx){
      let a=[...arr];
          a.splice(idx,1);
      setArr(a);
     }
     function getIndex(rn){
      for(let i=0;i<arr.length;i++) if(arr[i].rollno==rn) return i;
      return -1;
     }
     function TableRow({ sno, rollno, name, course, age ,remove}) {
      return (
        <tr>
          <td>{sno}</td>
          <td>{rollno}</td>
          <td>{name}</td>
          <td>{course}</td>
          <td>{age}</td>
          <td ><button className="btn2" onClick={()=>hatao(sno-1)}>remove</button></td>
        </tr>
      );
    }
    function sort_by_age(){
      setArr([...arr].sort((a, b) => a.age - b.age));
    }
    function sort_by_name() {
      setArr([...arr].sort((a, b) => a.name.localeCompare(b.name)));
    }
    function sort_by_rollnumber() {
      setArr([...arr].sort((a, b) => a.rollno-b.rollno));
    }
  
    function removeItem(r) {
     
    }
      return(
        
        <div style={{alignItems:"center",alignItems:"center"}}>
          <br/>
          <table style={{justifyContent: "center"}}>
              <thead>
              <tr>
              <td>S.No</td>
              <td><input style={{backgroundColor:"#ffffff",borderBlockColor:"#fff"}} type="button" value="Roll Number"onClick={sort_by_rollnumber}/></td>
              <td><input style={{backgroundColor:"#ffffff",borderBlockColor:"#fff"}} type="button" value="Name" onClick={sort_by_name}/></td>
              <td>Branch</td>
              <td><input style={{backgroundColor:"#ffffff",borderBlockColor:"#fff"}} type="button" onClick={sort_by_age} value="Age"/></td>
  
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="text" id="roll_number"/></td>
              <td><input type="text" id="name"/></td>
              <td><select id="branch" >
              <option>B.tech</option>
              <option>M.tech</option>
              <option>BCA</option>
              <option>MCA</option>
              <option>BBA</option>
              <option>MBA</option>
              <option >All</option>
                </select></td>
              <td><input type="text" id="age"/></td>
              <td><input type="button" value="Add" className="btn1" onClick={f1}/></td>

            </tr>
            </thead>
            <tbody id="tab">
            {arr.map((e,i)=>
                    <TableRow sno={i+1} rollno={e.rollno} name={e.name} course={e.course} age={e.age} remove={removeItem}/>
                )}

            </tbody>
          </table>
        </div>

          
  );
}

export default C1;

