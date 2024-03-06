import React, { useEffect } from 'react'
import './Testing.css'
import { useState } from 'react';
import ReadMore from "./ReadMore.png";


 const Testing = () => {
      
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




    if (Compliance_Bar) {
      Compliance_Bar.style.width = Compliance;
      Completeness_Bar.style.width = Completeness;
      Correctness_Bar.style.width = Correctness;
      TotalScore_Bar.style.width = TotalScore;

    }
  }, []);

  
  return (
    <body>        
            <div id="form_box">
                    <form action="#">
                            <h2>Get Score Evaluated for your Catalouge</h2>
                            <h3>Add your PDF Catalouge Here</h3>
                            <br />
                            <input type="file"  accept='.pdf'/>
                            <br />
                            <input type="submit" id='submit' disabled/>
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
                                <div id="InsideMenu1">
                                  <h1>SafeSearch</h1>
                                  <h1>SafeSearch</h1>
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
                            </div>
                  </div>
                  

            </div>      
    </body>
    )
}


export default Testing ;

