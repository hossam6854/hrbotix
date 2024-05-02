import { Link } from "react-router-dom";

import myImage from './home/images/undraw/undraw_software_engineer_lvl5.svg';
import './home/css/style.css'

import React, { useEffect, useState } from 'react';


  function Home() {

    const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);

   
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
  

    return (
  <div className='home'>
  
  <div>

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
                        <Link to="" className="nav-link" id="acctive"><span data-hover="Home">Home</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/search" className="nav-link"><span data-hover="Jops">Find Jop</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/homeee" className="nav-link"><span data-hover="CVs">Create CV</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cvreview" className="nav-link"><span data-hover="Review">CV Review</span></Link>
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


    





    <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                    <div className="about-text">
                        <small className="small-text111">Welcome to <span className="mobile-block">HRBOTIX website!</span></small>
                        <h1 className="animated animated-text">
                            <span className="lier">Hey folks, happy to help you to</span>
                                <div className="animated-info">
                                    <span className="animated-item">Find a job</span>
                                    <span className="animated-item">Creat CVs</span>
                                    <span className="animated-item">Make a CV Review</span>
                                </div>
                        </h1>

                        <p>Create a Attractive CV is a challenge. We are very active in creating and designing CVs and recruiting job seekers</p>
                        
                        <div className="custom-btn-group mt-4">
                          <a href="/search" className="btn custom-btn custom-btn-bg custom-btn-link">Find a job</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-12 col-12">
      <div className="about-image1 svg">
      <img src={myImage} className="img-fluid" alt="Software Engineer Illustration" />
      </div>
    </div>

            </div>
        </div>
    </section>

    



    



  </div>
  </div>
);
}

export default Home;