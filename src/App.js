import React from "react";
import { Link, useLocation, Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import GetQuote from "./page/GetQuote";
import AboutUs from "./page/AboutUs";
import FirstStepCompanies from "./page/FirstStepCompanies";
import SecondStepCompanies from "./page/SecondStepCompanies";
import ThirdStepCompanies from "./page/ThirdStepCompanies";
import Overview from "./page/OverviewPage";
import CalendarPage from "./page/calendarPage";
import JobsPage from "./page/jobsPage";
import Payment from "./page/PaymentPage";

import SideBar from "./components/SideBar";  // Import Sidebar
import ViewNewJobs from "./page/ViewNewJobs";
import UpcomingJobView from "./page/UpcomingJobView";
import OverviewPageAdmin from "./page/OverviewPageAdmin";
import RequestPage from "./page/RequestPage";
import UsersPage from "./page/UserPageAdmin";
import Transactions from "./page/Transaction";
import AdminLogin from "./page/AdminLogin";
import Resolution from "./page/Resolution"

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
        <Route path="/email-verification" element={<SecondStepCompanies/>}/>
        <Route path="/profile-setup" element={<ThirdStepCompanies/>}/>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/view-new-jobs" element={<ViewNewJobs/>}/>
        <Route path="/upcoming-jobs-view" element={<UpcomingJobView/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/overview-admin" element={<OverviewPageAdmin/>}/>
        <Route path="/request" element={<RequestPage/>}/>
        <Route path="/users" element={<UsersPage/>} />
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/resolution" element={<Resolution/>} />
        
        {/* Sidebar should only be visible on Overview & Calendar */}

      </Routes>
    </div>

  );
}

export default App;
