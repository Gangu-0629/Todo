import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Todo(props) {
  return (
    <div className="container mytodo">
        <h1 >ADD YOUR WORK</h1>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Enter your work : </label>
  <textarea className="form-control" value={props.work} onChange={props.onworkchange}  id="exampleFormControlTextarea1" placeholder='Enter here' rows="3"></textarea>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Date : </label>
  <textarea className="form-control" value={props.date} onChange={props.ondatechange} id="exampleFormControlTextarea1" placeholder='dd/mm/yyyy' rows="1"></textarea>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Time</label>
  <textarea className="form-control" value={props.time} onChange={props.ontimechange} id="exampleFormControlTextarea1" placeholder='hh:mm PM/AM' rows="1"></textarea>
</div>
<div className="btns">
<button type="button" onClick={props.show} className="btn btn-outline-primary myaddbtn">Add my work</button>
<button type="button" onClick={props.show} className="btn btn-outline-primary myviewbtn">
  <Link to="/preview" style={{textDecoration:"none"}}> View my tasks</Link>
</button>
</div>
    </div>
  )
}
