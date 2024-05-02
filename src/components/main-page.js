
import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
import { CiLocationOn,CiMail,CiPhone } from "react-icons/ci";
import "./assets/css/main-page.css"



import myImage1 from './assets/images/11.jpg';
import myImage2 from './assets/images/88.jpg';
import myImage3 from './assets/images/121.jpg';
import myImage4 from './assets/images/1001.jpg';
import myImage5 from './assets/images/mo.jpg';
import myImage6 from './assets/images/robert1.jpg';
import myImage7 from './assets/images/11.jpg';




import "./cv-template/css/base.css"
import "./cv-template/css/main.css"
import "./cv-template/css/vendor.css"





  function Mainpage() {

    const services = [
      { title: 'Create CV', icon: 'service-icon-02.png', description: 'Craft a professional CV effortlessly with our intuitive tools' },
      { title: 'CV Template', icon: 'service-icon-01.png', description: 'Choose from diverse templates for a standout curriculum vitae' },
      { title: 'Create Online Meeting', icon: 'service-icon-04.png', description: 'Facilitate seamless virtual connections for efficient communication' },
      { title: 'Find Job', icon: 'service-icon-03.png', description: 'Discover tailored job opportunities with our comprehensive search functionality' },
      { title: 'Chatbot', icon: 'Beige Butterfly Flower Shop Logo(3).png', description: 'Instant HR assistance, answering queries and providing real-time support' },
      { title: 'Feedback', icon: 'service-icon-02.png', description: 'Share your insights, contributing to continuous improvement and excellence' }
    ];



    


    return (

<div className="mainpage">



  <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <a href="" class="logo">
              <img src="assets/logo.png"/>
            </a>
            <ul class="nav">
              <li class="scroll-to-section"><a href="#">Home</a></li>
              <li class="scroll-to-section"><a href="#services">Services</a></li>
              <li class="scroll-to-section"><a href="#portfolioo">Portfolio</a></li>
              <li class="scroll-to-section"><a href="#about">About</a></li>
              <li class="scroll-to-section"><a href="#portfolio">Team</a></li> 
              <li class="scroll-to-section"><div class="main-red-button-hover"><Link to="/log">Sign up Now</Link></div></li> 
            </ul>        
            <a class='menu-trigger'>
                <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>




  <div class="main-banner" id="top">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
                <div class="item header-text">
                  <h6>Welcome to HRBOTIX</h6>
                  <h2>Find <em>A jop</em> smoothly and easily in <span>HRBOTIX</span></h2>
                  <div class="down-buttons">
                    <div class="main-blue-button-hover">
                    <Link to="/log">Sign up Now</Link>
                    </div>
                  </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>












  <div id="services" className="our-services section">
      <div className="services-right-dec">
        <img src="assets/images/services-right-dec.png" alt="" />
      </div>
      <div className="container">
        <div className="services-left-dec">
          <img src="assets/images/services-left-dec.png" alt="" />
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>We <em>Provide</em> The Best Service With <span>Our Tools</span></h2>
              <span>Our Services</span>
            </div>
          </div>
        </div>

        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <h5>{service.title}</h5>
              <div className="icon"><img src={`assets/images/${service.icon}`} alt="" /></div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>














  <div id="portfolioo" class="our-portfolio section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading  wow bounceIn" >
            <h2>See What Our Agency <em>Offers</em> &amp; What We <span>Provide</span></h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <a href="#">
            <div class="item wow bounceInUp" >
              <div class="hidden-content">
                <h5>Recruitment Solutions</h5>
                <p>AI-driven tools for efficient screening, matching, and tracking in hiring processes.</p>
              </div>
              <div class="showed-content">
                <img src="assets/images/portfolio-image.png" alt=""/>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-3">
          <a href="#">
            <div class="item wow bounceInUp" >
              <div class="hidden-content">
                <h5>Employee Management</h5>
                <p>HRMS platform enhancing engagement and productivity monitoring for employees.</p>
              </div>
              <div class="showed-content">
                <img src="assets/images/portfolio-image.png" alt=""/>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-3">
          <a href="#">
            <div class="item wow bounceInUp" >
              <div class="hidden-content">
                <h5>Create CV</h5>
                <p>Empower users to craft professional resumes with user-friendly tools and guidance.</p>
              </div>
              <div class="showed-content">
                <img src="assets/images/portfolio-image.png" alt=""/>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-3">
          <a href="#">
            <div class="item wow bounceInUp" >
              <div class="hidden-content">
                <h5>CV Template</h5>
                <p>Diverse templates catering to various industries for visually appealing and effective resumes.</p>
              </div>
              <div class="showed-content">
                <img src="assets/images/portfolio-image.png" alt=""/>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

















<div id="about" class="about-us section">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 align-self-center">
        <div class="left-image">
          <img src="assets/images/about-left-image.png" alt="Two Girls working together" id="about-us-image"/>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="section-heading">
          <h2>Unlock the future of <em> HR </em>with our <span> AI-powered HRMS platform (HRPOTIX)</span></h2>
          <p>HRMS empowers businesses with AI, streamlining HR processes for efficient management. Elevate success with advanced tools, from recruitment to performance management.</p>
          <div class="row">
            <div class="col-lg-4">
              <div class="fact-item">
                <div class="count-area-content">
                  <div class="icon">
                    <img src="assets/images/service-icon-02.png" alt=""/>
                  </div>
                  <div class="count-digit">320</div>
                  <div class="count-title">CTEATING CV</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="fact-item">
                <div class="count-area-content">
                  <div class="icon">
                    <img src="assets/images/service-icon-01.png" alt=""/>
                  </div>
                  <div class="count-digit">640</div>
                  <div class="count-title">Recruitment process</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="fact-item">
                <div class="count-area-content">
                  <div class="icon">
                    <img src="assets/images/service-icon-04.png" alt=""/>
                  </div>
                  <div class="count-digit">120</div>
                  <div class="count-title">Online Meeting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>











        
<section id="portfolio">

<div class="row section-intro">
   <div class="col-twelve">
     <h5>Team members</h5>
   </div>   		
 </div> 

 <div class="row portfolio-content">

   <div class="col-twelve">

       <div id="folio-wrapper" class="block-1-2 block-mob-full stack">

         <div class="bgrid folio-item">
             <div class="item-wrap">
             <img src={myImage1} alt="Liberty"/>
                <a href="#modal-01" class="overlay">	                  	           
                   <div class="folio-item-table">
                     <div class="folio-item-cell">
                      <h3 class="folio-title">Hossam Sayed</h3>	     					    
                      <span class="folio-types">
                      Front end
                      </span>
                      <div className="social1">
                    <a href="https://www.facebook.com/profile.php?id=61558865784354"><FontAwesomeIcon icon={faFacebook} className='fas'/></a>
                    <a href="https://twitter.com/HBotix13985"><FontAwesomeIcon icon={faTwitter} className='fas'/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className='fas'/></a>
                    <a href="https://www.youtube.com/channel/UCrEDZ1Cx6qj-wHDTGei2tbA"> <FontAwesomeIcon icon={faYoutube} className='fas'/></a>
                </div>
                  </div>	                      	
                   </div>                    
                </a>
             </div>	               
          </div> 

          <div class="bgrid folio-item">
             <div class="item-wrap">
             <img src={myImage2} alt="Shutterbug"/>
               <a href="#modal-02" class="overlay">              		                  
                   <div class="folio-item-table">
                     <div class="folio-item-cell">
                       <h3 class="folio-title">Sayed Mohamed</h3>	     					    
                     <span class="folio-types">
                     Machine Learning
                     </span>	
                     <div className="social1">
                    <a href="https://www.facebook.com/profile.php?id=61558865784354"><FontAwesomeIcon icon={faFacebook} className='fas'/></a>
                    <a href="https://twitter.com/HBotix13985"><FontAwesomeIcon icon={faTwitter} className='fas'/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className='fas'/></a>
                    <a href="https://www.youtube.com/channel/UCrEDZ1Cx6qj-wHDTGei2tbA"> <FontAwesomeIcon icon={faYoutube} className='fas'/></a>
                </div>	     		
                  </div> 	                      	
                   </div>                    
                </a>
             </div>
          </div>

          <div class="bgrid folio-item">
             <div class="item-wrap">
             <img src={myImage6}alt="Clouds"/>
                <a href="#modal-03" class="overlay">             		                  
                   <div class="folio-item-table">
                     <div class="folio-item-cell">
                       <h3 class="folio-title">Robert Kamal</h3>	     					    
                     <span class="folio-types">
                     Machine Learning
                     </span>	
                     <div className="social1">
                    <a href="https://www.facebook.com/profile.php?id=61558865784354"><FontAwesomeIcon icon={faFacebook} className='fas'/></a>
                    <a href="https://twitter.com/HBotix13985"><FontAwesomeIcon icon={faTwitter} className='fas'/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className='fas'/></a>
                    <a href="https://www.youtube.com/channel/UCrEDZ1Cx6qj-wHDTGei2tbA"> <FontAwesomeIcon icon={faYoutube} className='fas'/></a>
                </div>	     		
                  </div> 	                      	
                   </div>                    
                </a>
             </div>
          </div> 

          <div class="bgrid folio-item">
             <div class="item-wrap">
             <img src={myImage4} alt="Beetle"/>
                <a href="#modal-04" class="overlay">                  	                 
                   <div class="folio-item-table">
                     <div class="folio-item-cell">
                       <h3 class="folio-title">Amir Salama</h3>	     					    
                     <span class="folio-types">
                     Back end
                     </span>		
                     <div className="social1">
                    <a href="https://www.facebook.com/profile.php?id=61558865784354"><FontAwesomeIcon icon={faFacebook} className='fas'/></a>
                    <a href="https://twitter.com/HBotix13985"><FontAwesomeIcon icon={faTwitter} className='fas'/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className='fas'/></a>
                    <a href="https://www.youtube.com/channel/UCrEDZ1Cx6qj-wHDTGei2tbA"> <FontAwesomeIcon icon={faYoutube} className='fas'/></a>
                </div>     		
                  </div>  	                      	
                   </div>                    
                </a>
             </div>
          </div>     

          <div class="bgrid folio-item">
             <div class="item-wrap">
             <img src={myImage3} alt="Lighthouse"/>
                <a href="#modal-05" class="overlay">             		                  
                   <div class="folio-item-table">
                     <div class="folio-item-cell">
                       <h3 class="folio-title">Kerolos Magdy</h3>	     					    
                     <span class="folio-types">
                     Back end
                     </span>		  
                     <div className="social1">
                    <a href="https://www.facebook.com/profile.php?id=61558865784354"><FontAwesomeIcon icon={faFacebook} className='fas'/></a>
                    <a href="https://twitter.com/HBotix13985"><FontAwesomeIcon icon={faTwitter} className='fas'/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className='fas'/></a>
                    <a href="https://www.youtube.com/channel/UCrEDZ1Cx6qj-wHDTGei2tbA"> <FontAwesomeIcon icon={faYoutube} className='fas'/></a>
                </div>   		
                  </div> 	                      	
                   </div>                    
                </a>
             </div>
          </div>
          <div class="bgrid folio-item">
             <div class="item-wrap">
             <img src={myImage5} alt="Lighthouse"/>
                <a href="#modal-05" class="overlay">             		                  
                   <div class="folio-item-table">
                     <div class="folio-item-cell">
                       <h3 class="folio-title">Mohamed Sayed</h3>	     					    
                     <span class="folio-types">
                     Back end
                     </span>		     		
                     <div className="social1">
                    <a href="https://www.facebook.com/profile.php?id=61558865784354"><FontAwesomeIcon icon={faFacebook} className='fas'/></a>
                    <a href="https://twitter.com/HBotix13985"><FontAwesomeIcon icon={faTwitter} className='fas'/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className='fas'/></a>
                    <a href="https://www.youtube.com/channel/UCrEDZ1Cx6qj-wHDTGei2tbA"> <FontAwesomeIcon icon={faYoutube} className='fas'/></a>
                </div>
                  </div> 	                      	
                   </div>                    
                </a>
             </div>
          </div>
          <div class="bgrid folio-item">
             <div class="item-wrap">
             <img src={myImage7} alt="Salad"/>
                <a href="#modal-06" class="overlay">
                   <div class="folio-item-table">
                     <div class="folio-item-cell">
                       <h3 class="folio-title">Kerolos Medhat</h3>	     					    
                     <span class="folio-types">
                     Back end
                     </span>		
                     <div className="social1">
                    <a href="https://www.facebook.com/profile.php?id=61558865784354"><FontAwesomeIcon icon={faFacebook} className='fas'/></a>
                    <a href="https://twitter.com/HBotix13985"><FontAwesomeIcon icon={faTwitter} className='fas'/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className='fas'/></a>
                    <a href="https://www.youtube.com/channel/UCrEDZ1Cx6qj-wHDTGei2tbA"> <FontAwesomeIcon icon={faYoutube} className='fas'/></a>
                </div>     		
                  </div>	                      	
                   </div>                    
                </a>
             </div>
          </div>   











      

           





       </div> 

   </div>   

 </div> 

</section>







  
<div id="contact11">
    <div className="main-content1">
        <div className="left box1">
            <h2>About us</h2>
            <div className="content1">
              HRMS empowers businesses with AI, streamlining HR processes for efficient management. Elevate success with advanced tools, from recruitment to performance management.
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=61558865784354"><FontAwesomeIcon icon={faFacebook} className='fas'/></a>
                    <a href="https://twitter.com/HBotix13985"><FontAwesomeIcon icon={faTwitter} className='fas'/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className='fas'/></a>
                    <a href="https://www.youtube.com/channel/UCrEDZ1Cx6qj-wHDTGei2tbA"> <FontAwesomeIcon icon={faYoutube} className='fas'/></a>
                </div>
            </div>
        </div>
        <div className="center box1">
          <h2>Address</h2>
          <div className="content1">
              <div className="place">
              <CiLocationOn icon={ CiLocationOn } className='fas'/>
                  <span className="text1">Assuit&Sohag, Egypt</span>
              </div>
              <div className="phone">
              <CiPhone  icon={ CiPhone  } className='fas'/>
                  <span className="text1">+201033239589</span>
              </div>
              <div className="email">
              <CiMail  icon={ CiMail  } className='fas'/>
                  <span className="text1">hrbotix@gmail.com</span>
              </div>
          </div>
      </div>
      <div className="right box1">
          <h2>Contact us</h2>
          <div className="content1">
              <form action="#">
                  <div className="email">
                      <div className="text1">Email *</div>
                      <input type="email" required/>
                  </div>
                  <div className="msg">
                      <div className="text1">Messsage *</div>
                      <textarea name="" id="" cols="25" rows="2" required></textarea>
                  </div>
                  <div className="btn">
                      <button type="submit">Send</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
  <div className="bottom">
      <center>
          <span className="credit">Created By <a href="https://img.youm7.com/large/20180921014209429.jpg">Emam Ashour</a> | </span>
          <span className="far fa-copyright"></span><span> 2024 All rights reserved.</span>
      </center>
  </div>
</div>


</div>  

);
}

export default Mainpage;


