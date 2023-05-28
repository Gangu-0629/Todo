import React from 'react'
import List from './List';


export default function Preview(props) {
 
//  const show=()=>{
//   wl.array.forEach(element => {
//     console.log(element.work);
//     console.log(element.time);
//     console.log(element.date);
//   });
//  const color=["red","black","Green","blue"];
//  const [num,setNum]=useState(0);

 
 return (
  <>

  <div className='outerbox'>
  <h1>My Tasks</h1>
    {props.worklist.map((employee, index) => 
    {
      return(
        <>
           <div key={index}  className="container" >


            <List  employee={employee} handledelete={props.handledelete}/>
            
            {/* { localStorage.setItem("Tasks",JSON.stringify(wl))} 
            { props.update}  */}
           </div>

        
        </>
      );

      
    })}
    <button type="button" name="" id="" onClick={props.clearall} class="btn btn-primary btn-lg btn-block myclear">CLEAR ALL TASKS</button>
  </div>
  </>
);
}
// function show(props){
//  return (
//   <>

//   <h1>{props.work} is done at {props.date} on {props.time}</h1>
//   </>
//  )
// }
