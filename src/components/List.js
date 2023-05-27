import React from 'react';
import dlt from './delete.png';

export default function List(props) {
  return (
    <>
   
<div className="Myitem">
  <div className="mywork">
  <p>work:  {props.employee.work}</p>
  </div>


<div className="mytime">
<p>Time :{props.employee.time}</p>
</div>

<div className="mydate">
<p>Dte: {props.employee.date}</p>
</div>
 


  
            
      <div className="deletebutton">
            <i onClick={()=>props.handledelete(props.employee.work)} className="fa-solid fa-trash-can mydelete" style={{color: "#ff0000"}}></i>
            </div>

            </div>
    </>
  )
}
