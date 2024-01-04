import React, { useState } from "react";

function Left({ title, image, role, position, words, quote }) {

const [ division, setDivision] = useState(false)

    const handleClick = ()=> {
        setDivision(!division)
        console.log('react')
    }


    const check = title === "Smt.Vasanthamma k."

    const checkTwo = title === "Smt.Anusuyadevi R. Srinivas"

    console.log(check)


  return (
    <div>
     <div class="member">

    <div class="row "  style={ division && check || division && checkTwo  ? ({height: "auto"}) : null }>
        <div class="col-lg-5 bg-darkp  member-image"  style={ division && check || division && checkTwo  ? ({height: "auto"}) : null }   data-aos="zoom-in" 
            
            data-aos-duration="200">
        <div><img src={image} alt="" /></div>
        </div>
        <div class="col-lg-7 member-says  bg-light" style={ division && check || division && checkTwo  ? ({height: "auto"}) : null } data-aos="zoom-in" 
            
            data-aos-duration="200" >
          <div class="contents">
            <p class="heading p-0">
                {title} 
            </p>
            <p class="role">
            {role} <br/>
             {position}
            </p>
          </div>
          <p class="quote">
   {quote}
          </p>
          <p className="words" >
            {words}
          </p>

         
        </div>
        
       

       
      
    </div>

    <div class="text-center mt-5">
      <button className="roundbtn" onClick={handleClick} >
      {division ? ('Show Less') : ('Show More') }
        </button> 
    </div>


    
</div>
    </div>
  );
}

export default Left;
