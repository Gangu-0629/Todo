import React from 'react';
import dlt from './delete.png';

export default function List(props) {
  return (
    <>
   <div className="itemcon">
      <div className="itemwork">
      <p> <b>WORK : </b>  {props.employee.work}</p>
      </div>
      <div className="itemtime"><p> <b>TIME : </b> {props.employee.time}</p></div>
      <div className="itemdate"><p><b>DATE : </b> {props.employee.date}</p></div>
      <div className="itembutton">
      <i onClick={()=>props.handledelete(props.employee.work)} className="fa-solid fa-trash-can mydelete" style={{color: "#ff0000"}}></i>
      </div>
   </div>
    </>
  )
}
