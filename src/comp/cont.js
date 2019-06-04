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
                                
                                <span id="desg" class="col-md-7 col-lg-8">
                                    <h4>Full Stack Web | Android Developer</h4>
                                    <i id="sd"><b>Competent Programmer</b></i>
                                </span>
                                <span class="col-md-4 col-lg-3">
                                <img id="im" src={me} class="img-rounded" ></img>
                                </span>
                            </div>
                            
                        </div>
                        
                    </div>

                </div>
            
            </div>
        )
    }
}

export default Content      