import React from 'react'
import '../styles/men.css'

class Menu extends React.Component {
    render() {

        return ( 
         <div > 
            <div  class="row">
                 <br></br>
                 <div id="lks" class="col-md-12 col-sm-12 col-xl-12 col-lg-12">
                   <span> 
                   <div>
                     <br></br>
                   <i style={{marginLeft: "10%",  marginRight:"9%"}} class="fab fa-github"> <a href="https://github.com/spaden" target="_blank">Github</a></i>
                   <i class="fa fa-linkedin"><a href="https://www.linkedin.com/in/dheshoju-kalyan-kumar-a26322147/" target="_blank"> LinkedIn</a> </i>
                   </div>
                    <div>
                      <br></br>
                      <a href="https://www.hackerrank.com/kalyanspade_n" target="_blank">
                      <svg role="img" style={{marginLeft: "10%",width: "16px", height: " 16px"}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HackerRank icon</title><path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.11 6.43c-.072.045-.12.126-.12.218 0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492c.142 0 .259-.115.259-.256v-4.004h4.073v4.152h-.699c-.143 0-.256.115-.256.258 0 .092.048.174.119.219l1.579 1.51c.044.061.141.109.225.109.085 0 .159-.045.208-.109l1.679-1.51c.072-.045.12-.127.12-.219 0-.143-.115-.258-.255-.258h-.704l-.007-10.034c0-.145-.114-.26-.255-.26h-1.494v.002z"/></svg>
                      <span style={{fontSize: "0.8em"}}> HackerRank</span>
                      </a>
                      <span>---</span>
                      <a href="https://www.hackerearth.com/@Dheshojukalyan" target="_blank">
                      <span style={{fontSize: "0.9em"}}> HackerEarth</span>
                      </a>
                      <br></br> <br></br>
                       
                      <i style={{marginLeft: "10%",  marginRight:"4%", fontSize:"0.9em"}} class="fa fa-file" aria-hidden="true"><a href="https://drive.google.com/file/d/1XKyfE4_HBA6ZEJJPzYREjqC0kH3ZwQBY/view" target="_blank">  My Resume</a></i>

                       
                    </div> 
                    <div>
                     <br></br>
                    </div>  
                   
                   </span>
                 </div>
            </div>
            <hr></hr>  
            <div id="nb" class="row">
              <span class="col-md-1"></span>
              <div  class="col-md-10 col-sm-10 col-sm-10 col-xl-10 col-lg-10">
                 <div>
                   <a  class="nab" href="#about"><i class="fa fa-binoculars" aria-hidden="true">  About</i></a>
                   <p></p>
                   <a class="nab" href="#experience"><i class="fa fa-industry">  Experience</i></a>
                   <p></p>
                   <a class="nab" href="#projects"><i class="fa fa-rocket">  Projects</i></a>
                   <p></p>
                   <a class="nab" href="#skills"><i class="fa fa-gamepad">  Skills</i></a>
                   <p></p>
                   <a class="nab" href="#education"><i class="fa fa-graduation-cap">  Education</i></a>
                   <p></p>
                   <a class="nab" href="#awards"><i class="fa fa-trophy">  Awards</i></a>
                   <p></p>
                   <a class="nab" href="#hobbies"><i class="fa fa-user-secret">  Hobbies</i></a>
                 </div>
              </div>

            </div>
         </div>
        )
    }
}

export default Menu