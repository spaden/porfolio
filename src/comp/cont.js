import React from 'react'
import '../styles/cont.css'
import me from '../images/itme.jpg'
import chat from '../images/chatbot.png'
class Content extends React.Component {

    render(){

        return (
            <div>
                <div id="about" class="row">
                    <span class="col-lg-2"></span>
                    <div class="col-md-12 col-sm-12 col-lg-8">
                        <div id="titl">
                            <div class="row">
                                
                                <span id="desg" class="col-md-7 col-lg-7">
                                    <h4>Full Stack Web | Android Developer</h4>
                                    <i id="sd"><b>Competent Programmer</b></i>
                                </span>
                                
                               <span class="col-sm-4 col-xs-3 col-md-3 col-lg-4">
                               <img id="im" src={me} class="img-rounded"></img>
                                
                               </span>
                                
                            </div>
                           
                            
                        </div>
                        
                    </div>

                </div>
               
                <div id="story" class="row">
               
                     <span class="col-lg-1"></span>
                     <div class="col-md-12 col-lg-10">
                     
                                <h4 id="on">Love to build stuff, and be a part of making this world a better place cliche!</h4>
                                <br></br>
                                <h5 id="tw">Always a life long learner, believes that expertise comes through practical knowledge and by using them in real world scenerios</h5>
                                <h5 id="tw">And always love to code, no matter what!</h5> 
                     </div>
                           
                </div>
                <br></br><br></br><br></br>
                <div id="experience" class="row">
                     <div class="col-md-12">
                         <h5>Work Experience</h5>
                         <hr></hr>
                         <div id="wokCnt">
                             <span>
                                 <b>StareIn Digital Pvt Ltd. | Dilegence IR</b>
                                 <b style={{float: 'right'}}>May - June(2019)</b>
                             </span>
                             <div>
                                 Front-End Developer
                             </div>
                             
                             <div id="wokWords">
                                     <ul>
                                      <li>Built an amazing embeddable chat bot from scratch and integrated it with Google Dialog flow platform</li>
                                      <li>Used Chart.js library for live data visualization from websocket.</li>

                                      <li>Designed and built a sleek (scalable) console application.</li>
                                      <li><a target="_blank" href="https://drive.google.com/open?id=1a8btDCnt-KNhCoamTcaOgF1BAz4Y7b0g">Check out more</a></li>
                                     </ul>  
                             </div>
                             
                             <div class="wokImg">
                                 <img id="wokProf" class="img img-rounded" src={chat}></img>
                             </div>
                         </div>
                         <hr></hr>
                         <div id="wokCnt">
                             <span>
                                 <b>Online Marketing Platform</b>
                                 <b style={{float: 'right'}}>June - September(2018)</b>
                             </span>
                             <div>
                                 Creator | Full Stack Web and Android Developer
                             </div>
                             
                             <div id="wokWords">
                                     <ul>
                                      <li>Collaborated the project with five team managers and 60+ project interns.</li>
                                      <li>Designed a sleek UI in the Android App for elegant reading experience, and a newsfeed feature like Reddit in the website.</li>
                                      <li>Figured out an algorithm to detect fake downloads and users.</li>
                                      <li><a target="_blank" href="https://github.com/spaden/themisfits">Check out more</a></li>
                                     </ul>  
                             </div>
                             
                             <div class="wokImg">
                                 <img id="wokProf" class="img img-rounded" src="https://lh3.googleusercontent.com/qj9E9zmRUEihPR2yHYRUtHiDec5Z9CKnvsmwJprtz3wUtKQkAsilefFKZAhTRTD3X6NM=w1366-h695-rw"></img>
                             </div>
                             <br></br>
                         </div>
                         <hr></hr>
                         
                         <div id="wokCnt">
                             <span>
                                 <b>FirstSkool.org</b>
                                 <b style={{float: 'right'}}>March(2018)</b>
                             </span>
                             <div>
                                 Content Writer
                             </div>
                             
                             <div id="wokWords">
                                     <ul>
                                      <li>Submitted and reviewed articles for their startup website, worked with a group of eleven members.</li>
                                      <li>Used plausible words to coerce readers and site visitors to try the product.</li>
                                      <li><a target="_blank" href="https://lovemyselfs.wordpress.com/2018/02/27/internship-google-how/">Check out more</a></li>
                                     </ul>  
                             </div>
                             
                             <div class="wokImg">
                             <img id="wokProf" class="img img-rounded" src="https://contentwriters.com/blog/wp-content/uploads/content-writer-750x500.jpg"></img>

                             </div>
                         </div>
                        <hr></hr>
                        <div id="wokCnt">
                             <span>
                                 <b>YT Ads Agency</b>
                                 <b style={{float: 'right'}}>Summer (2016)</b>
                             </span>
                             <div>
                                 Public Relations Intern
                             </div>
                             
                             <div id="wokWords">
                                     <ul>
                                      <li>Enrolled 40 three wheeler drivers in Hyderabad (India) to be a part of this project by displaying project Ads on the rear part of their vehicles.</li>
                                      <li>Collected and analyzed information provided by three wheeler drivers.</li>
                                      <li>Learned what it is like to managing small group of people.</li>
                                      
                                     </ul>  
                             </div>
                             
                             <div class="wokImg">
                                 <img id="wokProf" class="img img-rounded" src="http://phillyprgirl.com/wp-content/uploads/2014/10/tumblr_mf1qiy47rz1qjqmwa-300x215.jpg"></img>
                             </div>
                         </div>
                     </div>
                </div>
                <br></br>
                <div id="projects">
                    <h5>Projects</h5><hr></hr>
                    <div class="projCont">
                        <div class="projHd">
                            <b>Social Network (IIT BHU Hackathon)</b>
                            <b style={{float: 'right'}}>September 2018</b>
                        </div>
                        <div class="projPnt">
                            <ul>
                                <li>Created a social network like reddit and sarahah with additioinal exclusive features</li>
                                <li>Built it in two days of constant coding</li>
                                <li>As an additional feature users can create a completely annonymous group chat with unique access link</li>
                                
                                <li><a href="https://github.com/spaden/socialnetwork">Check out the code</a></li>
                            </ul>

                        </div>
                    </div>
                    <br></br>
                    <div class="projCont">
                        <div class="projHd">
                            <b>I am Woman</b>
                            <b style={{float: 'right'}}>December 2017</b>
                        </div>
                        <div class="projPnt">
                            <ul>
                                <li>Woman safety app with features like spontaneous location sharing through SMS service</li>
                                <li>Implemented an home screen widget for ease of access in emergency situations.</li>
                                <li><a href="https://apkgk.com/com.womansafety.kalyan.testing">Check out the app</a></li>
                            </ul>

                        </div>
                    </div>

                    <br></br>
                    <div class="projCont">
                        <div class="projHd">
                            <b>ECE Freaks</b>
                            <b style={{float: 'right'}}>September 2017</b>
                        </div>
                        <div class="projPnt">
                            <ul>
                                <li>Real time grop chat android app</li>
                                <li>Used firebase real time database to store the chat data.</li>
                                <li><a href="https://apkgk.com/com.bignerdranch.android.classece">Check out the app</a></li>
                            </ul>

                        </div>
                    </div>
                    <br></br>
                    <div class="projCont">
                        <div class="projHd">
                            <b>spaden2</b>
                            <b style={{float: 'right'}}>July 2017</b>
                        </div>
                        <div class="projPnt">
                            <ul>
                                <li>An android app to help you learn 500+ vocabulary words in an easy manner.</li>
                                <li>Inbuilt text to speech service for word pronounciation.</li>
                                <li>All the content organized in a lucid way to expedite the daily learning progress</li>
                                <li><a href="https://play.google.com/store/apps/details?id=www.spadenhacks.wordpress.com&hl=en_US">Check out the app</a></li>
                            </ul>

                        </div>
                    </div>
                    <br></br>
                    <div class="projCont">
                        <div class="projHd">
                            <b>CrazyGame.io</b>
                            <b style={{float: 'right'}}>March 2019</b>
                        </div>
                        <div class="projPnt">
                            <ul>
                                <li>Created a web app consisting of four different games and organized the game during college annual feast.</li>
                                <li>Built the project using AngularJS and even used some of design techniques to attract the crowd.</li>
                                <li>Games consisted of betting to predicting your future soul mate.</li>
                                <li><a href="https://github.com/spaden/crazygame.github.io">Check out the code</a></li>
                            </ul>

                        </div>
                    </div>

                </div>
                <br></br>
                <div id="skills">
                    <h5>Skills</h5><hr></hr>
                    <div class="skillSet">
                        <b>Programming Languages :</b> <i>Java, Python, C, C++</i>  
                        <br></br><br></br>
                        <b>Web Development :</b>
                        <ul>
                            <li>
                                <b>Front End :</b>   Html, Css, JavaScript, ReactJS, AngularJS, BootStrap
                            </li>
                            <li>
                                <b>Backend Technologies: </b> Php, MySql, Sql, MongoDb(basics), nodeJs(basics)
                            </li>
                        </ul>
                        <b>Android App Developement :</b> Android Sdk, Android Studio, Java, Kotlin (basics), Jetpack(basics), Xml, SQLITE
                    </div>
                </div>

                <br></br>
                <div id="education">

                    
                        <h5>Education</h5><hr></hr>
                        <div class="edu">
                        <span>
                                    <b>Bachelors Degree </b>
                                    <b style={{float: 'right'}}>2016 - 2020</b>
                        </span>
                        
                        <div>
                            <ul>
                                <li>Pursuing Electronics and Communication Engineering from <u>Malla Reddy College of Engineering and Technology, Hyderabad, India</u></li>
                                <li>GPA 7.1/10</li>
                            </ul>
                             
                        </div>
                    </div>



                </div>
                <br></br>
                <div id="awards">
                   <h5>Awards and Hackathons</h5>
                    <hr></hr>
                    <div class="awd">
                        <ol>
                            <li>
                                <b>TCS Codevita (2019) : </b>
                                Secured 1304 All India Rank and qualified round one of <a href="https://drive.google.com/file/d/1qKAKAYY_dYeU0Gjez0Jj9itSeRC-l-S0/view?usp=sharing">Codevita</a> organized by Tata Consultancy Services.  </li>
                            <br></br>
                            <li>
                                <b>TechTrix, Code Marathon (March, 2019) : </b>
                                Won <a href="https://drive.google.com/file/d/1d2qXLJ0w5-zBi5vTK-BMNBJQcrl8jlSj/view?usp=sharing">Second price</a> in an annual coding competition organized by our college. </li>
                            <br></br>
                            <li>
                                <b>Societe Generale Brainwaves Hackathon (January 2019): </b> Made a concise <a href="https://github.com/spaden/Brainwaves-Hackathon-2019">webpage</a> to quickly visualize stock data of
different companies in the stock market and made the cut to the finals.
                            </li>
                            <br></br>
                            <li>
                                <b>ThoughtWorks Hackathon (2018)</b>
                                Submitted the Online shopping <a href="https://github.com/spaden/thoughtworks-hackathon-final-app">app</a> with all the mentioned features within a time limit of 12 hours. Implemented an advanced search feature to ease the process for users.
                            </li>
                            <br></br>
                            <li>
                                <b>Wissen Technology Frontend Challenge (2018)</b> 
                                Created a movies list <a href="https://github.com/spaden/wissentech.github.io">webpage</a> like IMDB with simple features like search (3-5 categories) and dark mode and uploaded within 2 hours.
                            </li>
                        </ol>
                    </div>
                        
                    
                </div>

                <br></br>

                <div id="thank">
                <b>It means a lot to me, if you made it this far. Thanks!</b>

                </div>

                <br></br><br></br>
                <h4>Hobbies</h4><hr></hr>
                <div id="hobbies" class="hobb">
                    
                   <div id="hobbOut">
                        <ul>
                                <li><a href="https://lovemyselfs.wordpress.com/">Blogging</a> sometimes about life and stuff!</li>
                                <li>Intense PC gaming to improve my quick decision making skills that lead to feasible and tenable end results</li>
                                <li>BasketBall in the early mornings just so not to be termed as a couch potato</li>
                                <li>Reading books. Favorite ones 
                                    <br></br><br></br>
                                    <ol>
                                        <li>'The Alchemist'</li>
                                        <li>'Start with why'</li>
                                        <li>'Crush IT'</li>
                                        <li>'Rich dad poor dad'</li>
                                    </ol>
                                </li>
                                <li>Love to watch SciFi,Thriller, Documentary, Biography and Horror movies and few T.V series.<br></br><p></p><b>Favoratie T.V Series:</b> 
                                    <br></br>
                                    <ol>
                                        <li>Silicon Valley</li>
                                        <li>13 Reasons Why</li>
                                        <li>Chernobyl</li>
                                    </ol>
                                    <br></br>
                                    <b>Favoraite Movies:</b>
                                    <ol>
                                    <li>The Social Network</li>
                                    <li>Arrival</li>
                                    <li>The Martian</li>
                                    <li>Gravity</li>
                                    <li>Big fan of the Conjuring Universe</li>
                                    <li>Train to Busan</li>
                                    <li>A walk to remember</li>
                                    </ol> 
                                </li>
                            </ul>
                   </div>
                   
                   
                </div>
            </div>
            
        )
    }
}

export default Content      