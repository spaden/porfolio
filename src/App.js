import React from 'react';
import './styles/App.css';
import Content from './comp/cont'
import Heading from './comp/hdd'
import Menu from './comp/men'

class App extends React.Component {
 
  render(){
    
    return(
      <div>
                <div id="nv" class="container-fluid">
                  <div class="row ">
                        <Heading/>
                    </div>
                </div>
                <div class="container">
                     <div class="row">
                       <br></br><br></br><br></br><br></br><br></br>
                       </div>  
                </div> 
                <div  class="container-fluid">
                   
                   
                    <div class="row">
                      <span class="col-lg-1 col-xl-1"></span>
                      <div id="cont"  class="col-md-7 col-sm-12 col-lg-7 col-xl-7">
                        <Content/>
                      </div>
                      <span class="col-md-1 col-lg-1"></span>
                      <div  class="col-md-3 col-lg-2">
                        <Menu/>  
                      </div> 
                      
                    </div>

                </div>
                <hr></hr>
                <div className="container">
                  <div className="row">
                    <span className="col-md-2"></span>
                    <div>
                      <h3 styles={{marginLeft: '2%'}}>Made in <i class="fa fa-heart" aria-hidden="true"></i> with ReactJS </h3>
                    </div>
                  </div>
                </div>
                
      </div>
              
    )
  }
}


export default App;
