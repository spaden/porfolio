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
                      
                      <div style={{marginLeft: "2.3em"}} class="col-md-6 col-sm-12 col-lg-5 col-xl-5">
                        <Content/>
                      </div>
                      <span class="col-md-1 col-lg-4"></span>
                      <div  class="col-md-4 col-lg-2">
                        <Menu/>  
                      </div> 
                      
                    </div>

                   </div>
                
      </div>
              
    )
  }
}


export default App;
