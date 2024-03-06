import React from 'react'
import './Testing.css'
import { useState } from 'react';


 const Testing = () => {


  const [image, setImage] = useState(null)

  const onImageChange = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage(URL.createObjectURL(event.target.files[0]));
     document.querySelector("#image").classList.add("ActiveImage");
   }
  }

  return (
    <body>
      <div>
        <h2>Get Score Evaluated for an existing Catalouge</h2>
           <form action="#">
            <h3>Add Image:</h3>
            <input type="file" onChange={onImageChange} accept='image/*'/>
            <br />
            <div id='Image_Container'>
              <img src={image} id='image' class = 'ActiveImage'/>
            </div>

            <input type="submit" />
           </form>
            
      </div>
      
    </body>
    )
}


export default Testing ;

