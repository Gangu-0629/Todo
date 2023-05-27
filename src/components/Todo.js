import React from 'react'

export default function Todo(props) {
  return (
    <div className="container">
        <h1 style={{textAlign:"center"}}>MY WORKS TODAY</h1>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Enter your work : </label>
  <textarea className="form-control" value={props.work} onChange={props.onworkchange}  id="exampleFormControlTextarea1" placeholder='Enter here' rows="3"></textarea>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Date</label>
  <textarea className="form-control" value={props.date} onChange={props.ondatechange} id="exampleFormControlTextarea1" placeholder='Enter date here' rows="1"></textarea>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Time</label>
  <textarea className="form-control" value={props.time} onChange={props.ontimechange} id="exampleFormControlTextarea1" placeholder='Enter time here' rows="1"></textarea>
</div>
<button type="button" onClick={props.show} className="btn btn-outline-primary">Add my work</button>
    </div>
  )
}
