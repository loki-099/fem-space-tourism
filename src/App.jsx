import React, { useState, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './styles/links.css'

// PAGES
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Slider from "./components/Slider";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

export const Context = React.createContext()

function App() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  useLayoutEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <Context.Provider value={[isOpen, setIsOpen]}>
      <div className="relative">
        <Slider isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/destination" element={<Destination/>}/>
          <Route path="/crew" element={<Crew/>}/>
          <Route path="/technology" element={<Technology/>}/>
        </Routes>
      </div>
    </Context.Provider>
  )
}

export default App
