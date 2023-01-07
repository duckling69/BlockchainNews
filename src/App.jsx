import React, { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"

import { useAuth0 } from "@auth0/auth0-react";
import News from "./pages/News"
import Forms from "./components/Forms"
import FactCheckerPortal from "./pages/FactCheckerPortal"
import NewsDetails from "./pages/NewsDetails"
import Footer1 from "./components/Footer1"




function App() {
  const { isAuthenticated } = useAuth0();
  const [loggedIn, useloggedIn] = useState(true);

  if (!isAuthenticated) {
    return (<div className="App">
      <Navbar></Navbar>
      <div>
        <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/addforms' element={<Forms/>}></Route>
        {/* <Route path='/about' element={<About/>}></Route>
        <Route path='/features' element={<Features/>}></Route> */}
        <Route path='/about' element={<About/>}></Route>
        {/* <Route path='/features' element={<Features/>}></Route> */}
        

        <Route path='/dashboard' element={<FactCheckerPortal/>}></Route>
        <Route path='/news/:id' element={<NewsDetails/>}></Route>

        </Routes>
      </div>
      {/* <Footer1 className = 'fixed bottom-0'/> */}
    </div>)
  //
  }
  else {
    return (<div className="App">
    <Navbar></Navbar>
    <div>
      <Routes>
      <Route path='/' element={<FactCheckerPortal/>}></Route>
      <Route path='/news' element={<News/>}></Route>
      <Route path='/addforms' element={<Forms/>}></Route>
      {/* <Route path='/about' element={<About/>}></Route>
      <Route path='/features' element={<Features/>}></Route> */}
      <Route path='/about' element={<About/>}></Route>
      {/* <Route path='/features' element={<Features/>}></Route> */}
      

      <Route path='/dashboard' element={<FactCheckerPortal/>}></Route>
      <Route path='/news/:id' element={<NewsDetails/>}></Route>

      </Routes>
    </div>

  </div>)
  }
  

}

export default App
