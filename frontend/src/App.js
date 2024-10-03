
import React from "react";
import "./App.css";
import SideBar from "./Components/sideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Overall from "./pages/Overall";
import Genre1 from "./pages/Genre1";
import Genre2 from "./pages/Genre2";
import Genre3 from "./pages/Genre3";
import Footer from "./Components/footer";

import Gc from "./pages/Gc";
import Dashboard from "./Components/Dashboard";
import Card from "./Components/Card";
import Card2 from "./Components/Card2";
import Nav from './Components/Nav';
import {GC_Genre1, GC_Genre2, GC_Genre3} from "./pages/Gclist";
import Hostlellist from "./pages/hostellist";
import Instuctions from "./pages/instuctions";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <SideBar>
          <Routes>
            <Route path="/Overall" element={<Overall />} />
            <Route path="/" element={<Overall />} />
            <Route path="/Genre1" element={<Genre1 />} />
            <Route path="/Genre2" element={<Genre2 />} />
            <Route path="/Genre3" element={<Genre3 />} />
            <Route path="/GC/Genre1/:name" element={<Gc />} />
            <Route path="/GC/Genre2/:name" element={<Gc />} />
            <Route path="/GC/Genre3/:name" element={<Gc />} />
            <Route path="/GC/Genre1" element={<GC_Genre1 />} />
            <Route path="/GC/Genre2" element={<GC_Genre2 />} />
            <Route path="/GC/Genre3" element={<GC_Genre3 />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/Card2" element={<Card2 />} />
            <Route path="/Nav" element={<Nav />} />
            <Route path="/instuctions" element={<Instuctions/>}/>
            <Route path="/hostels" element={<Hostlellist />} />
            {/* <Route path="/OngoingGC" element={<OngoingGC />} /> */}
            {/* <Route path="/Hostel" element={<Hostel />} /> */}
            <Route path="/Dashboard/:name" element={<Dashboard />} />
          </Routes>
        </SideBar>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
