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
                  <div class="row">
                        <Heading/>
                    </div>
                </div>

                <div class="container">
                    
                    <br></br>
                    <div class="row">
                      <div class="col-md-6">
                        <Content/>
                      </div>
                      <div class="col-md-3">
                        <Menu/>
                      </div>
                    </div>
                </div>
      </div>
              
    )
  }
}


export default App;
