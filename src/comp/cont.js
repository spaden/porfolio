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
               
                     <span class="col-lg-2"></span>
                     <div class="col-md-12 col-lg-8">
                     
                                <h4 id="on">Love to build stuff, be part of a great work and fulfill my life's purpose</h4>
                                <br></br>
                                <h5 id="tw">"Always a life long learner, believes that expertise comes through practical knowledge and by using them in real world scenerios"</h5>
                                <h5 id="tw">"And always love to code, no matter what."</h5> 
                     </div>
                           
                </div>
                <br></br><br></br><br></br>
                <div class="experience">
                    Testing
                </div>
            
            </div>
            
        )
    }
}

export default Content      