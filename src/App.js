
import React from 'react'
import {Routes, Route } from 'react-router-dom';
import DetailsFillingPage from './components/DetailsFillComponents/DetailsFillingPage';
import Homeee from './components/HomePage/Home'
import MyResume from './components/ResumeDisplay/MyResume';
import './App.css';
import Search from "./searchActive";
import Log from "./components/LOG";
import Mainpage from "./components/main-page";
import Home from "./components/Home";
import Createcv from "./components/creat-cv";
import Cvreview from "./components/cv-review";
import ContextWrapper from "./context/ContextWrapper";
import Calendar from "./calendar";


function App() {
  return (
    <div>

        
        <div>
            <Routes>
                  <Route exact path="/homeee" element={<Homeee/>}></Route>
                  <Route path="/detailsfillingpage/*" element ={<DetailsFillingPage />}></Route> 
                  <Route path="/myresume" element={<MyResume/>}></Route>
                  <Route path="/calendar" exact element={<ContextWrapper><Calendar /></ContextWrapper>} />
                  <Route path="/search" exact element={<Search />} />
                  <Route path="/log" element={<Log />} />
                  <Route path="/" element={<Mainpage />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/createcv" element={<Createcv />} />
                  <Route path="/cvreview" element={<Cvreview />} />
            </Routes> 
        </div>
    </div>
  )
}


export default App