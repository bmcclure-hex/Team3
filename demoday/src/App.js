import React from 'react'
import Judge from './judgeRedir';
import{ BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div>
        Team 3
        <Routes>
          <Route path="/"/>
          <Route path="/jview" element={<Judge/>}/>

        </Routes>
      </div>
    </Router>
  )
}