// App.js
import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/header";
import SideBar from "./Components/sideBar";
import Footer from "./Components/footer";
import Loader from "./pages/Loader";
// import Announcements from "./Components/Announcements";
import DashboardAnalytics from "./Components/DashboardAnalytics";

// Your existing pages
import Overall from "./pages/Overall";
import Genre1 from "./pages/Genre1";
import Genre2 from "./pages/Genre2";
import Genre3 from "./pages/Genre3";
import Genre4 from "./pages/Genre4";
import Gc from "./pages/Gc";
import Dashboard from "./Components/Dashboard";
import { GC_Genre1, GC_Genre2, GC_Genre3, GC_Genre4 } from "./pages/Gclist";
import Hostlellist from "./pages/hostellist";
import Instuctions from "./pages/instuctions";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingComplete(true);
    }, 3000);
  }, []);

  return (
    <Router>
      <div>
        {loadingComplete ? (
          <>
            <Header />

            {/* FLEX CONTAINER for Sidebar + Main Content */}
            <div style={{ display: "flex" }}>
              {/* SIDEBAR on the left */}
              <SideBar />

              {/* MAIN CONTENT on the right */}
              <div style={{ flex: 1 }}>
                {/* <Announcements /> */}

                <Routes>
                  <Route path="/" element={<Overall />} />
                  <Route path="/Overall" element={<Overall />} />
                  <Route path="/Genre1" element={<Genre1 />} />
                  <Route path="/Genre2" element={<Genre2 />} />
                  <Route path="/Genre3" element={<Genre3 />} />
                  <Route path="/Genre4" element={<Genre4 />} />
                  <Route path="/GC/Genre1/:name" element={<Gc />} />
                  <Route path="/GC/Genre2/:name" element={<Gc />} />
                  <Route path="/GC/Genre3/:name" element={<Gc />} />
                  <Route path="/GC/Genre4/:name" element={<Gc />} />
                  <Route path="/GC/Genre1" element={<GC_Genre1 />} />
                  <Route path="/GC/Genre2" element={<GC_Genre2 />} />
                  <Route path="/GC/Genre3" element={<GC_Genre3 />} />
                  <Route path="/GC/Genre4" element={<GC_Genre4 />} />
                  <Route path="/instuctions" element={<Instuctions />} />
                  <Route path="/hostels" element={<Hostlellist />} />
                  <Route path="/Dashboard/:name" element={<Dashboard />} />
                  <Route path="/analytics" element={<DashboardAnalytics />} />
                </Routes>
              </div>
            </div>

            <Footer />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </Router>
  );
}

export default App;
