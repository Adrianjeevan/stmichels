import React, { useState } from 'react'
import "./gallery.css"


import Imagesdata from "./imagedata"


function gallerylayout() {

   const [ Infrastructure , setInfrastructure] = useState(true)   
   const [ Library , setLibrary] = useState(false)
   const [ sports , setSports] = useState(false)
   const [ school , setSchool] = useState(false)
   const [ classroom , setClassroom] = useState(false)
   const [ kinder , setKinder] = useState(false)





   const blue = '#f37335';

   

   
  const handleClick = (e)=> {
     var Category  = (e.currentTarget.value);
     console.log(Category)
     if ( Category === 'infra' ){
        setSports(false)
        setInfrastructure(true);
        setClassroom(false)
        setSchool(false)
        setKinder(false)
        setLibrary(false)
     }
     
      if ( Category === 'sports' ){
        setSports(true)
        setInfrastructure(false);
        setClassroom(false)
        setSchool(false)
        setKinder(false)
        setLibrary(false)
     } else if (Category === 'classroom' ){
        setClassroom(true)
        setSports(false)
        setInfrastructure(false);
        setSchool(false)
        setKinder(false)
        setLibrary(false)
     } else if (Category === 'library' ){
        setLibrary(true)
        setClassroom(false)
        setSports(false)
        setInfrastructure(false);
        setSchool(false)
        setKinder(false)
        
     } else if (Category === 'kinder' ){
        setClassroom(false)
        setSports(false)
        setInfrastructure(false);
        setSchool(false)
        setKinder(true)
        setLibrary(false)
     } else if (Category === 'school' ){
        setClassroom(false)
        setSports(false)
        setInfrastructure(false);
        setSchool(true)
        setKinder(false)
        setLibrary(false)
     }
    }





  return (
    <div className='gallery'>
        <div className="container">
            <div className="category " >
               <button   className='roundbtn'   type='button' onClick={(e)=> handleClick(e)} value="infra" style={Infrastructure ? ({backgroundColor : blue}) : null} >Infrastructure</button>
               <button  className='roundbtn' type='button' onClick={(e)=> handleClick(e)}  value="classroom" style={ classroom ? ({backgroundColor : blue}) : null}  >Class Rooms</button>
               <button className='roundbtn'  type='button' onClick={(e)=> handleClick(e)} value="kinder" style={ kinder ? ({backgroundColor : blue}) : null}   >Kindergarten</button>
               <button className='roundbtn'  type='button'  onClick={(e)=> handleClick(e)} value="library" style={Library ? ({backgroundColor : blue}) : null} >Library</button>
               <button className='roundbtn'  type='button' onClick={(e)=> handleClick(e)} value="sports" style={ sports ? ({backgroundColor : blue}) : null}  >Sports</button>
               <button  className='roundbtn' type='button' onClick={(e)=> handleClick(e)} value="school" style={ school ? ({backgroundColor : blue}) : null}  >School Day</button>
            </div>


            <div className="images-wrapper">

                { Infrastructure &&   Imagesdata &&  Imagesdata.map( (items)=> {
                         return (
                             <div className='image-layout'>
                                
                                {
                                    items.infra.map((infrases)=> {
                                        return (
                                            <div className='image'>
                                        <a href={infrases.building}  data-fancybox="gallery" >
                                        <img src={infrases.building} alt="" />
                                        </a>
                                    </div>
                                        )
                                    })
                                }




                                
                             </div>
                         )
                     })  
                    
                }



                {
                       classroom &&   Imagesdata &&  Imagesdata.map( (items)=> {
                        return (
                            <div className='image-layout'>
                               
                               {
                                   items.room.map((infras)=> {
                                       return (
                                           <div className='image'>
                                       <a href={infras.building}  data-fancybox="gallery" >
                                        <img src={infras.building} alt="" />
                                        </a>
                                   </div>
                                       )
                                   })
                               }




                               
                            </div>
                        )
                    })
                }

               

                {
                    kinder &&  Imagesdata &&  Imagesdata.map( (items)=> {
                        return (
                            <div className='image-layout'>
                               
                               {
                                   items.kinder.map((infras)=> {
                                       return (
                                           <div className='image'>
                                      <a href={infras.building}  data-fancybox="gallery" >
                                        <img src={infras.building} alt="" />
                                        </a>
                                   </div>
                                       )
                                   })
                               }




                               
                            </div>
                        )
                    })
                }

                {
                    Library &&  Imagesdata &&  Imagesdata.map( (items)=> {
                        return (
                            <div className='image-layout'>
                               
                               {
                                   items.library.map((infras)=> {
                                       return (
                                           <div className='image'>
                                      <a href={infras.building}  data-fancybox="gallery" >
                                        <img src={infras.building} alt="" />
                                        </a>
                                   </div>
                                       )
                                   })
                               }




                               
                            </div>
                        )
                    })
                }

                {
                    sports &&  Imagesdata &&  Imagesdata.map( (items)=> {
                        return (
                            <div className='image-layout'>
                               
                               {
                                   items.sports.map((infras)=> {
                                       return (
                                           <div className='image'>
                                      <a href={infras.building}  data-fancybox="gallery" >
                                        <img src={infras.building} alt="" />
                                        </a>
                                   </div>
                                       )
                                   })
                               }




                               
                            </div>
                        )
                    })
                }

                {
                    school &&  Imagesdata &&  Imagesdata.map( (items)=> {
                        return (
                            <div className='image-layout'>
                               
                               {
                                   items.school.map((infras)=> {
                                       return (
                                           <div className='image'>
                                       <a href={infras.building}  data-fancybox="gallery" >
                                        <img src={infras.building} alt="" />
                                        </a>
                                   </div>
                                       )
                                   })
                               }




                               
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default gallerylayout