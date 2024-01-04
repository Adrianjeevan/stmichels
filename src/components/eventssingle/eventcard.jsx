import React from 'react'
import "./eventcard.css"

function eventcard({title, image, date, link, upcoming, id }) {
  return (
    <div>
        
       

<div class="row card-row-event" id={id} >
    <div class="col-lg-4">
       <div>
        <a href="">
            <img src={image} alt=""/>
        </a>
       </div>
    </div>
    <div class="col-lg-7">
       <div class="event-content">
        <div>
            <span class="material-symbols-outlined">
                calendar_month
                </span> {date}
        </div>

        <h5>{title}</h5>

        <div>
            <span class="material-symbols-outlined">
                location_on
                </span> St.Michel's School kanakpura
        </div>
       </div>

       <div class="event-btn">

        { upcoming ? (<div class="text-center pb-3">
            <h6 class="orange fw600 m-0 p-0 text-center">Upcoming</h6>
        </div>) : (
            <div>
                 <h6 class="blue fw600">Completed</h6>
        <a href={link}>
        <button class="roundbtn">
            view detail
       </button>
       </a>
            </div>
       )}

        

      
       </div>
    </div>
</div>
    </div>
  )
}

export default eventcard