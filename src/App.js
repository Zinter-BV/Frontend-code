import React from "react";
import { Link, useLocation, Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import GetQuote from "./page/GetQuote";
import AboutUs from "./page/AboutUs";
import Movers from "./page/Movers";
import EnterTrackCode from "./page/EnterTrackCode";
import "./App.css";
import MakeAReport from "./page/MakeAReport";
import TrackReport from "./page/TrackReport";
import Faq from "./page/Faq";
import PrivacyPolicy from "./page/PrivacyPolicy";
import TermsAndCondition from "./page/TermsAndCondition";
import FirstStepCompanies from "./page/FirstStepCompanies";
import SecondStepCompanies from "./page/SecondStepCompanies";
import ThirdStepCompanies from "./page/ThirdStepCompanies";
import Overview from "./page/OverviewPage";
import CalendarPage from "./page/calendarPage";
import JobsPage from "./page/jobsPage";
import Payment from "./page/PaymentPage";

import SideBar from "./components/SideBar"; // Import Sidebar
import ViewNewJobs from "./page/ViewNewJobs";
import UpcomingJobView from "./page/UpcomingJobView";
import OverviewPageAdmin from "./page/OverviewPageAdmin";
import RequestPage from "./page/RequestPage";
import UsersPage from "./page/UserPageAdmin";
import Transactions from "./page/Transaction";
import AdminLogin from "./page/AdminLogin";
import Resolution from "./page/Resolution";
import VendorLogin from "./page/VendorLogin";
import Stripe from "./page/Stripe";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import StripeComponent from "./StripeComponent";

const stripePromise = loadStripe(
  "pk_test_51O2JovLw5fKJMXx3zvARABxAlQpptJi9aO6gPkcbH9lFFCfJXV8rgAw170q4wt3CHz00uDfGtPqKmvdvPFWQqNMc00c3Dqphpr"
);

function App() {
  return (
    <div className="app-container">
      <Elements stripe={stripePromise}>
        <Stripe />
      </Elements>
      {/* { pathname === '/overview' && <SideBar /> } */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/quote" element={<GetQuote />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/get-started" element={<FirstStepCompanies />} />
        <Route path="/email-verification" element={<SecondStepCompanies />} />
        <Route path="/profile-setup" element={<ThirdStepCompanies />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/view-new-jobs" element={<ViewNewJobs />} />
        <Route path="/upcoming-jobs-view" element={<UpcomingJobView />} />
        <Route path="/movers" element={<Movers />} />
        <Route path="/track-code" element={<EnterTrackCode />} />
        <Route path="/make-report" element={<MakeAReport />} />
        <Route path="/track-report" element={<TrackReport />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/overview-admin" element={<OverviewPageAdmin />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/resolution" element={<Resolution />} />
        <Route path="/stripe" element={<Stripe />} />

        {/* Sidebar should only be visible on Overview & Calendar */}
      </Routes>
    </div>
  );
}

export default App;
