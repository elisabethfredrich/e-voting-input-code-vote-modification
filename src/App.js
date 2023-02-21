import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BulletinBoard from "./BulletinBoard/BulletinBoard";
import Confirmation from "./Confirmation/Confirmation";
import InputCode from "./InputCode/InputCode";
import Navbar from "./Navbar/Navbar";
import VotingScheme from "./VotingScheme/VotingScheme";
import Survey from "./Survey/Survey"
import Welcome from "./Welcome/Welcome"
import Break from "./BreakPage/Break"
import Parse from 'parse';
import { useState } from "react";

const PARSE_APPLICATION_ID = 'UVxMd3c4qbO9uVtFvStqUEgJSIjMJWYaVZfKL6sL';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'S1tyiUfA5PBsAiER8l8K7YqpPXVg1wpCbQ1F7gty';

Parse.initialize(
  PARSE_APPLICATION_ID, 
  PARSE_JAVASCRIPT_KEY
  );

Parse.serverURL = PARSE_HOST_URL;


function App() {
 
  return (
    <div className="App">
      <div id="app-main">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Navigate
                  to="/welcome" /* Should be referencing the main screen */
                />
              }
            />
            <Route path="/inputcode" element={<InputCode />} />
            <Route path="/voting" element={<VotingScheme />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/bulletinboard" element={<BulletinBoard />} />
            <Route path="/survey" element={<Survey/>}/>
            <Route path="/welcome" element={<Welcome/>}/>
            <Route path="/break" element={<Break/>}/>

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
