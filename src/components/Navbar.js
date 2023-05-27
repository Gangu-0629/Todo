import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Navbar(props) {
    
  return (
   <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}  >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">TODO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addwork">Add Work</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/preview">View my tasks</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==="dark"?"light":"dark"} `} htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
</nav>
   </>
  )
}
