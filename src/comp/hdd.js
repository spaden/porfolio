import React from 'react'
import '../styles/hdd.css'
class Heading extends React.Component {
    render(){

       return (
        <nav class="col-md-12 navbar navbar-expand-md navbar-light bg-light">
        <a href="#" class="navbar-brand">
           Dheshoju Kalyan Kumar
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarCollapse">
            
            <div class="navbar-nav ml-auto">
            <i  class="nav-item nav-link navbar-right"><i style={{color: "#787F9B", fontSize:"0.9em"}} class="fa fa-phone" aria-hidden="true"> +91-6300269132</i></i>
            <i  class="nav-item nav-link navbar-right"><i style={{color: "#787F9B", fontSize:"0.9em"}} class="fa fa-envelope" aria-hidden="true"> kalyanspade.n@gmail.com</i></i>
            

            </div>
        </div>
    </nav>
       )


    }
}

export default Heading