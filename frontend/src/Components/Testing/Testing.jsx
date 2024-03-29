import React, { useEffect } from 'react'
import './Testing.css'
import { useState } from 'react';
import ReadMore from "./ReadMore.png";
// import { Parser } from '../../parser1';
import axios from 'axios';



const Testing = () => {


      const [menuVisible, setMenuVisible] = useState({});

      const toggleMenu = (menuId) => {
          setMenuVisible(prevState => ({
              ...prevState,
              [menuId]: !prevState[menuId]
          }));
      };
  



      const handleClick = async () => {
            try {
              // Send POST request to server endpoint to run parser.js
              const response = await axios.post('/run-parser1');
              console.log(response.data);
            } catch (error) {
              console.error('Error:', error.message);
            }
      };







useEffect(() => {
      const Compliance = document.getElementById("Compliance").innerText;
      const Compliance_Bar = document.getElementById("Compliance_Bar");
      const Correctness = document.getElementById("Correctness").innerText;
      const Correctness_Bar = document.getElementById("Correctness_Bar");
      const Completeness = document.getElementById("Completeness").innerText;
      const Completeness_Bar = document.getElementById("Completeness_Bar");
      const Score = (parseFloat(Compliance) + parseFloat(Correctness) + parseFloat(Completeness))/3;
      console.log(Score);
      document.getElementById("TotalScore").textContent = Math.floor(Score) + "%";
      const TotalScore = document.getElementById("TotalScore").innerText;
      const TotalScore_Bar = document.getElementById("TotalScore_Bar");





      document.getElementById("Completeness_Score").textContent = Math.floor(parseFloat(document.getElementById("Completeness").innerText)/3) + "%";
      document.getElementById("Compliance_Score").textContent = Math.floor(parseFloat(document.getElementById("Compliance").innerText)/3) + "%";
      document.getElementById("Correctness_Score").textContent = Math.floor(parseFloat(document.getElementById("Correctness").innerText)/3) + "%";



if (Compliance_Bar) {
      Compliance_Bar.style.width = Compliance;
      Completeness_Bar.style.width = Completeness;
      Correctness_Bar.style.width = Correctness;
      TotalScore_Bar.style.width = TotalScore;

}
}, []);


const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('pdf', e.target.elements.pdf.files[0]);
  
      try {
            const response = await fetch('http://localhost:5000/upload', {
              method: 'POST',
              body: formData,
          });
          const data = await response.text();
          console.log(data); // Log response from the server
      } catch (error) {
          console.error('Error:', error);
      }
      alert("Pdf Submitted");
      handleClick();
  };

// function InnerMenu(){
//       //document.querySelector("#InsideMenu1").style.display = "block";
// }


return (
<body>        
            <div id="form_box">
                  <form action="#" onSubmit={handleSubmit}>
                        <h2>Get Score Evaluated for your Catalogue</h2>
                        <h3>Add your PDF Catalogue Here</h3>
                        <br />
                        <input type="file"  accept='.pdf' required name="pdf" multiple/>
                        <br />
                        <input type="submit" id='submit' />
                  </form>  
            </div>


            <div id="Score_Card_Container">
                  <div id="Score_Card_Container_div">
                        <h1>Catalogue Evaluation</h1>
                        <div className='Score'>
                              <div className='Score_Header'>
                                    <span>Compliance</span>
                                    <span  id='Compliance'>57%</span>
                              </div>
                              <div className='Outer_Bar'>
                                    <div className="Inner_Bar" id='Compliance_Bar'>  
                                    </div>
                              </div>
                              <a className='readMore' onClick={() => toggleMenu("complianceMenu")} >
                                    <img src={ReadMore} alt="" />
                                    <span>See how this was Evaluated</span>
                              </a>
                              <div id="InsideMenu1" style={{ display: menuVisible["complianceMenu"] ? 'flex' : 'none' }}>
                                    <h4>Adult : <span id='Adult_Score'></span></h4>
                                    <h4>Violence : <span id='Violence_Score'></span></h4>
                              </div> 
                        </div>

                        <div className='Score'>
                              <div className='Score_Header'>
                                    <span>Correctness</span>
                                    <span id='Correctness'>97%</span>
                              </div>
                              <div className='Outer_Bar'>
                                    <div className="Inner_Bar" id='Correctness_Bar'>

                                    </div>
                              </div>
                              <a className='readMore'onClick={() => toggleMenu("correctnessMenu")} >
                                    <img src={ReadMore} alt="" />
                                    <span>See how this was Evaluated</span>
                              </a>
                              <div id="InsideMenu1" style={{ display: menuVisible["correctnessMenu"] ? 'flex' : 'none' }}>
                                    <h4>Logo : <span id='Logo_Score'></span></h4>
                                    <h4>Product Identification : <span id='Product_Score'></span></h4>
                                    <h4>Colour : <span id='Colour_Score'></span></h4>
                              </div> 

                        </div>

                        <div className='Score'>
                              <div className='Score_Header'>
                                    <span>Completeness</span>
                                    <span  id='Completeness'>86%</span>
                              </div>
                              <div className='Outer_Bar'>
                                    <div className="Inner_Bar" id='Completeness_Bar'>
                                    </div>
                              </div>
                              <a className='readMore'  onClick={() => toggleMenu("completenessMenu")} >
                                    <img src={ReadMore} alt="" />
                                    <span>See how this was Evaluated</span>
                              </a>
                              <div id="InsideMenu1" style={{ display: menuVisible["completenessMenu"] ? 'flex' : 'none' }}>
                                    <h4>Product Category : <span id='ProductC_Score'></span></h4>
                                    <h4>Product Identification : <span id='Product_Score'></span></h4>
                              </div> 
                        </div>
                        <div className='Score' >
                              <div className='Score_Header'>
                                    <span >Total Score</span>
                                    <span id='TotalScore'></span>
                              </div>
                              <div className='Outer_Bar'>
                                    <div className="Inner_Bar" id='TotalScore_Bar'>

                                    </div>
                              </div>
                                    <a className='readMore'onClick={() => toggleMenu("ScoreMenu")} >
                                    <img src={ReadMore} alt="" />
                                    <span>See how this was Evaluated</span>
                              </a>
                              <div id="InsideMenu1" style={{ display: menuVisible["ScoreMenu"] ? 'flex' : 'none' }}>
                                    <h4>Completeness : <span id='Completeness_Score'></span></h4>
                                    <h4>Compliance : <span id='Compliance_Score'></span></h4>
                                    <h4>Correctness : <span id='Correctness_Score'></span></h4>
                              </div> 
                        </div>
                  </div>
                  

            </div>      
</body>
)
}


export default Testing ;