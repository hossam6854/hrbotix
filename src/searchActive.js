import { Link } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function SearchActive() {

  const [results, setResults] = useState([]);



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
    <>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <a className="navbar-brand" href="">
            <i className='uil uil-user'></i> HRBOTIX
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>

            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link" >
                  <span data-hover="Home">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link" id="acctive">
                  <span data-hover="Jobs">Find Job</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/homeee" className="nav-link">
                  <span data-hover="CVs">Create CV</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cvreview" className="nav-link">
                  <span data-hover="Review">CV Review</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/calendar" className="nav-link">
                  <span data-hover="Meeting">Meeting scheduling</span>
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-lg-auto">
              <div className="ml-lg-4">
                <div className="color-mode d-lg-flex justify-content-center align-items-center">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      defaultChecked={checked}
                      onChange={() => toggleThemeChange()}
                      id="themeToggle"
                    />
                    <label htmlFor="themeToggle"></label>
                    <span className="color-mode-text">Color Mode</span>
                  </div>
                </div>
              </div>
            </ul>
          </div>
      </nav>

      <div className="App1">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && <SearchResultsList results={results} />}
        </div>
      </div>
    </>
  );
}

export default SearchActive;
