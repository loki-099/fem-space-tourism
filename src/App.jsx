import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/links.css'

// PAGES
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Header from "./components/Header";
import Slider from "./components/Slider";

export const Context = React.createContext()

function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <BrowserRouter>
      <Context.Provider value={[isOpen, setIsOpen]}>
        <div className="relative">
          {/* <Header setIsOpen={setIsOpen}/> */}
          <Slider isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/destination" element={<Destination/>}/>
          </Routes>
        </div>
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App
