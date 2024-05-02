


  import './home/css/bootstrap.min.css'
  import './home/css/unicons.css'
  import './cv-review/css/style.css'
  
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
  import { CiLocationOn,CiMail,CiPhone,CiChat1,CiCloud } from "react-icons/ci";
  import { FaBolt } from "react-icons/fa6";
  import { GrLanguage } from "react-icons/gr";
  import { LuPalette } from "react-icons/lu";
  import { IoMdCheckmark } from "react-icons/io";
  import {Link} from 'react-router-dom'


  import React, { useEffect, useState } from 'react';




  function Cvreview() {


    const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    /**
     * Everytime checked changes, update the property data-theme in the
     * HTML so it uses the theme we have in localStorage
     */
    useEffect(() => {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
    }, [checked]);
  
    /**
     * Update the state of checked and the content of our theme object
     * in localStorage based on the checkbox toggle
     */
    const toggleThemeChange = () => {
      if (checked === false) {
        localStorage.setItem("theme", "dark");
        
        setChecked(true);
      } else {
        localStorage.setItem("theme", "light");
  
        setChecked(false);
      }
    }
  


    const [fileName, setFileName] = useState('Select file..');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image')) {
        setFileName(`${file.name}`);
      } else if (file.type === 'application/pdf') {
        setFileName(`${file.name}`);
      } else {
        setFileName(file.name);
      }
    } else {
      setFileName('Select file..');
    }
  };
      
  
  
    
  
    return (


  <div classNameName='cvreview'>
    
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
          <a className="navbar-brand" href=""><i className='uil uil-user'></i> HRBOTIX</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
          </button>

              <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                      <Link to="/home" className="nav-link"><span data-hover="Home">Home</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/search" className="nav-link"><span data-hover="Jops">Find Jop</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/homeee" className="nav-link"><span data-hover="CVs">Create CV</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link" id="acctive"><span data-hover="Review">CV Review</span></Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/calendar" className="nav-link"><span data-hover="Meeting">Meeting scheduling</span></Link>
                  </li>
              </ul>

              <ul className="navbar-nav ml-lg-auto">
                  <div className="ml-lg-4">
                    <div className="color-mode d-lg-flex justify-content-center align-items-center">
                    <div className="checkbox">
                        <input type="checkbox"    defaultChecked={checked}   onChange={() => toggleThemeChange()}  id="themeToggle" />
                        <label htmlFor="themeToggle"></label>
                        <span className="color-mode-text">Color Mode</span>
                       </div>
                    </div>
                  </div>
              </ul>
          </div>
  </nav>

  

 




    <section className='cvreview11'>
      <div className="main-text112">Let your CV stand out from the crowd!</div>
      
      <ul className="boxes wide">
        <li className="horizontal">
          <div className="rounded-icon">
          <CiChat1  icon={ CiChat1   } className='fassa' />
          </div>
          <div className="text">
            <h5>Get suggestions</h5>
            <div>See what you could write in a better way to present yourself as a true professional.</div>
          </div>
        </li>
        <li className="horizontal">
          <div className="rounded-icon">
          <IoMdCheckmark  icon={ IoMdCheckmark   } className='fassa' />
          </div>
          <div className="text">
            <h5>Find grammar mistakes</h5>
            <div>See typos and where your wording isn't exactly the best.</div>
          </div>
        </li>
        <li className="horizontal">
          <div className="rounded-icon">
          <LuPalette  icon={ LuPalette   } className='fassa' />
          </div>
          <div className="text">
            <h5>Get design tips</h5>
            <div>Tips how to style your CV to be more profesionally looking.</div>
          </div>
        </li>
        <li className="horizontal">
          <div className="rounded-icon">
          <GrLanguage  icon={ GrLanguage   } className='fassa' />
          </div>
          <div className="text">
            <h5>Speaks your language</h5>
            <div>Get the feedback no matter what language your CV is in.</div>
          </div>
        </li>
        <li className="horizontal">
          <div className="rounded-icon">
          <CiCloud  icon={ CiCloud   } className='fassa' />
          </div>
          <div className="text">
            <h5>Powered by AI</h5>
            <div>Feedback is delivered based on the machine learning from the thousands of CVs.</div>
          </div>
        </li>
        <li className="horizontal">
          <div className="rounded-icon">
          <FaBolt  icon={ FaBolt } className='fassa' />
          </div>
          <div className="text">
            <h5>Extremly fast</h5>
            <div>After you upload your resume, you can expect the feedback on your email in less than 5 minutes.</div>
          </div>
        </li>
      </ul>
      <form action="" method="post" enctype="multipart/form-data">
      <div className="upload">
        <input type="button" className="uploadButton" value="Browse" />
        <input
          type="file"
          name="upload"
          accept="image/*, .pdf"
          id="fileUpload"
          onChange={handleFileChange}
        />
        <span className="fileName">{fileName}</span>
      </div>
      <input type="button" className="uploadButton" value="Upload File" />
    </form>
      
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

export default Cvreview;