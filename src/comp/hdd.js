import React from 'react'
import '../styles/hdd.css'
class Heading extends React.Component {
    render(){

       return (
           <div id="hdOut" class="col-md-12 col-xs-12 col-sm-12 col-lg-12 col-xl-12">
                <div class="row">
                    <div id="nm" class="col-md-3">
                        Dheshoju Kalyan Kumar
                    </div>
                    <span  class="col-md-5 col-lg-5 col-xl-5 col-sm-3"></span>
                         
                    <i class="col-md-2 col-sm-8 col-xs-8 col-lg-1 col-xl-2 fas fa-phone"> +91-6300269132</i>
                        

                    <i class="col-md-2 col-sm-8 col-xs-8 col-lg-2 col-xl-2 fas fa-envelope"> kalyanspade.n@gmail.com</i>
                        


                    
                </div>


           </div>
       )


    }
}

export default Heading