import React from 'react'
import '../styles/cont.css'
import me from '../images/itme.jpg'
class Content extends React.Component {

    render(){

        return (
            <div>
                <div id="about" class="row">
                    <span class="col-lg-2"></span>
                    <div class="col-md-12 col-sm-12 col-lg-8">
                        <div id="titl">
                            <div class="row">
                                
                                <span id="desg" class="col-md-6 col-lg-7">
                                    <h4>Full Stack Web | Android Developer</h4>
                                    <i id="sd"><b>Competent Programmer</b></i>
                                </span>
                                
                                <span class="col-sm-4 col-md-4 col-lg-3">
                                <img id="im" src={me} class="img-rounded"></img>
                                </span>
                            </div>
                           
                            
                        </div>
                        
                    </div>

                </div>
               
                <div id="story" class="row">
               
                     <span class="col-lg-1"></span>
                     <div class="col-md-12 col-lg-10">
                     
                                <h4 id="on">Love to build stuff, be part of a great work and fulfill my life's purpose</h4>
                                <br></br>
                                <h5 id="tw">"Always a life long learner, believes that expertise comes through practical knowledge and by using them in real world scenerios"</h5>
                                <h5 id="tw">"And always love to code, no matter what!"</h5> 
                     </div>
                           
                </div>
                <br></br><br></br><br></br>
                <div id="experience" class="row">
                     <div class="col-md-12">
                         <h5>Work Experience</h5>
                         <hr></hr>
                         <div id="wokCnt">
                             <span>
                                 <b>StareIn Digital Pvt Ltd.</b>
                                 <b style={{float: 'right'}}>May - June(2019)</b>
                             </span>
                             <div>
                                 Front-End Developer
                             </div>
                              
                             <div id="wokWords">
                                     <ul>
                                      <li>Built an amazing embeddable chat bot from scratch and integrated it with Google Dialog flow platform</li>
                                      <li>Designed and built a sleek and scalable console application.</li>
                                     </ul>  
                             </div>
                             
                             <div class="wokImg">
                                 Testig
                             </div>
                         </div>
                     </div>
                </div>
                <br></br><br></br><br></br>
            
            </div>
            
        )
    }
}

export default Content      