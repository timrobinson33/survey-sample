import React from 'react';
import { Link, Route, Routes, } from "react-router-dom";
import Intro from './Intro'
import Survey from './Survey'
import Results from './Results'

export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<>
          <p><Link to="/intro">intro</Link></p>
          <p><Link to="/survey">survey</Link></p>
          <p><Link to="/results">results</Link></p>
        </>} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}
