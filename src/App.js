import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Intro from './Intro'
import Survey from './Survey'
import Results from './Results'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/survey-sample" element={<>
          <p><Link to="/survey-sample/intro">intro</Link></p>
          <p><Link to="/survey-sample/survey">survey</Link></p>
          <p><Link to="/survey-sample/results">results</Link></p>
        </>} />
        <Route path="/survey-sample/intro" element={<Intro />} />
        <Route path="/survey-sample/survey" element={<Survey />} />
        <Route path="/survey-sample/results" element={<Results />} />
      </Routes>
    </div>
  );
}