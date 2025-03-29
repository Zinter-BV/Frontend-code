import React from "react";
import { Link, useLocation, Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import GetQuote from "./page/GetQuote";
import AboutUs from "./page/AboutUs";
import FirstStepCompanies from "./page/FirstStepCompanies";
import Overview from "./page/OverviewPage";
import CalendarPage from "./page/calendarPage";
import JobsPage from "./page/jobsPage";

import SideBar from "./components/SideBar";  // Import Sidebar

function App() {
  // debugger
  const location = useLocation()
  console.log(location)
  const { pathname } = location

  // const { hash, pathname, search } = location;

  return (



    <div className="app-container">
       {/* { pathname === '/overview' && <SideBar /> } */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<GetQuote />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/get-started" element={<FirstStepCompanies />} />
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        
        {/* Sidebar should only be visible on Overview & Calendar */}

      </Routes>
    </div>

  );
}

export default App;
