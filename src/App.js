import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import Todo from './components/Todo';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Preview from './components/Preview';

// const getlocaldata=()=>{
//   let list=localStorage.getItem("Tasks");
//   console.log(list);
//   if(list){
//     return JSON.parse(localStorage.getItem("Tasks"));
//   }
//   else{
//     return [];
//   }
// }
function App() {

  class myworks {
    constructor(work, time, date) {
      this.work = work;
      this.time = time;
      this.date = date;
    }
  }
  if(!localStorage.getItem("Tasks")){
       localStorage.setItem("Tasks",JSON.stringify([]));
  }
  
  const [worklist, setworkList] = useState(JSON.parse(localStorage.getItem("Tasks")));
   
  const show = () => {
    const obj = new myworks(work, time, date);
    console.log(obj.work);
    setworkList(arr => [...arr, obj,]);
    // worklist.forEach((ele) => {
    //   console.log(`Work is : ${ele.work}`);
    //   console.log(`Time is : ${ele.time}`);
    //   console.log(`date is : ${ele.date}`);
    // })
      
    setDate("");
    setTime("");
    setWork("");
    localStorage.setItem("Tasks",JSON.stringify(worklist));
  }
  // const update=()=>{
  //  setworkList(localStorage.getItem("Tasks"));
  // }

  const onworkchange = (event) => {
    setWork(event.target.value);
  }
  const ontimechange = (event) => {
    setTime(event.target.value);
  }
  const ondatechange = (event) => {
    setDate(event.target.value);
  }

  const handledelete=(work)=>{

    const newList = worklist.filter((item) => item.work !== work);
    // localStorage.setItem("Tasks",JSON.stringify(newList));
    setworkList(newList);
  
  

}
useEffect(()=>{
  localStorage.setItem("Tasks",JSON.stringify(worklist))
},[worklist]

);
const clearall=()=>{
// localStorage.setItem("Tasks",JSON.stringify([]));
setworkList([]);
}


  const [mode, setMode] = useState("light");
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";

    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }


  const [work, setWork] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  return (
    <>

      <Router>
        <Navbar mode={mode} toggle={changeMode} />
        
        <Switch>
          <Route exact path="/addwork">
          
            <Todo worklist={worklist} work={work} time={time} date={date} show={show} ondatechange={ondatechange} ontimechange={ontimechange} onworkchange={onworkchange} />
            { localStorage.setItem("Tasks",JSON.stringify(worklist))}
          </Route>

          <Route exact path="/preview">
            <Preview worklist={worklist} handledelete={handledelete}  clearall={clearall}
             />
           
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
