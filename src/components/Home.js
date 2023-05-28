import React from 'react'
import gangu from'./Gangu.jpg'
import calendra from './calendra.png'
import pencil from './pencil.png'
export default function Home() {
  return (
    <>
      <div className="Hcon">
         <div className="Habout">
          <h1>ABOUT</h1>
          <p>
            This is the basic application developed using HTML,CSS,Js and React by <b>A.GANGHADHAR .</b>
            <br />
            This is Todo app you add your work at <strong>Add work </strong>
            and view your tasks at <strong>View my tasks. </strong>
            Please navigate throught the given navbar. 
            <br />
            <br />
             <b> &emsp; &emsp; &emsp; &emsp; &emsp; -THANK YOU</b>
          </p>
         </div>
         <div className="Hpic">
                <img src={calendra} alt="The logo" className="mycal"srcset="" />
                <img src={pencil} alt="The logo" className="mypen"srcset="" />

         </div>
     
      </div>
    </>
  )
}
