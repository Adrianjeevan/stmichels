import React, { useState } from 'react'

function right({title, image, words, quote, role, position}) {

  
    const [ division, setDivision] = useState(false)

    const handleClick = ()=> {
        setDivision(!division)
        console.log('react')
    }


  return (
    <div>
        

        <div className="member">
    <div class="row memberleft" style={ division ? ({height:'auto'}) : null } >
        
        <div className="col-lg-7 bg-light member-says"  style={ division ? ({height:'auto'}) : null }  data-aos="zoom-in" 
            
            >
          <div className="contents">
            <div className="heading">
                {title}
            </div>
            <div className="role">
             {role}
             {position}
            </div>
          </div>
          <div className="quote">
            {quote}
          </div>
          <div className="words">
    <p> {words} </p>
          </div>
        </div>


        <div className="col-lg-5 member-image-left"  style={ division ? ({height : 'auto'}) : null } data-aos="zoom-in" 
            
            >
           <div> <img src={image} alt=""/></div>
               </div>
    </div>

    <div class="text-center read mt-5">
      <button className="roundbtn" onClick={handleClick} >{division ? ('Show Less') : ('Show More') }</button> 
    </div>
</div>

    </div>
  )
}

export default right