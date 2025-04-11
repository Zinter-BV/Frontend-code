// import React from "react";
// import "./sideBar.css"
// import OverviewPage from "../page/OverviewPage";
// // import CalendarPage from "../page/calendarPage";
// import { Link, useLocation } from "react-router-dom";
// import overviewIcon from "../Assets/dasboard-icon.svg"
// import calendarIcon from "../Assets/calendar-icon.svg"
// import jobsIcon from "../Assets/jobs-icon.svg"
// import supportIcon from "../Assets/support-icon.svg"
// import sidebarIcon from "../Assets/sidebar-icon.svg"
// import logoAndText from "../Assets/logo-text.svg"
// import notificationLogo from "../Assets/notification-03.svg"
// import helpLogo from "../Assets/help-circle.svg"

// const SideBar = () => {
//     const location = useLocation();
//     let headerTitle = "";

//     if (location.pathname === "/overview") {
//         headerTitle = "Overview";
//     }
//     if (location.pathname === "/calendar") {
//         headerTitle = "Calendar";
//     }
//     if (location.pathname === "/jobs") {
//         headerTitle = "Jobs";
//     }
//     if (location.pathname === "/support") {
//         headerTitle = "Support";
//     }
//     return (
//         <div className="side_bar_header_container">
//             <div className="side_bar_container">
//                 <Link to="/overview">
//                     <div className="side_bar_child">

//                         <img src={overviewIcon} alt="" />
//                         <span>Overview</span>

//                     </div>
//                 </Link>
//                 <Link to="/calendar">
//                 <div className="side_bar_child_active">
//                     <img src={calendarIcon} alt="" />
//                     <span>Calendar</span>

//                 </div>
//                 </Link>
//                 <Link to="/jobs"> 
//                 <div className="side_bar_child">
//                     <img src={jobsIcon} alt="" />
//                     <span>Jobs</span>
//                 </div>
//                 </Link>
//                 <Link to="/support">
//                 <div className="side_bar_child">
//                     <img src={supportIcon} alt="" />
//                     <span>Support</span>
//                 </div>
//                 </Link>
//                 <div className="side_bar_bottom">
//                     <div>
//                         <img src={sidebarIcon} alt="" />
//                     </div>
//                     <div className="side_bar_bottom_text">
//                         <span>Urban Movers</span>
//                         <span>Workspace</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="header_container">
//                 <div className="header_container_left">
//                     <img src={logoAndText} alt="" />
//                     <span>{headerTitle}</span>
//                 </div>
//                 <div className="header_container_right">
//                     <img src={helpLogo} alt="" />
//                     <img src={notificationLogo} alt="" />
//                 </div>
//             </div>
//             <div className="body_container">
//                 {/* <OverviewPage/> */}
//             </div>
//         </div>
//     )
// }

// export default SideBar

import React from "react";
import "./sideBar.css";
import { Link, useLocation } from "react-router-dom";
import overviewIcon from "../Assets/dasboard-icon.svg";
import overviewIconActive from "../Assets/overview-active-icon.svg"
import calendarIcon from "../Assets/calendar-icon.svg";
import calenarIconActive from "../Assets/calendar-active-icon.svg"
import jobsIcon from "../Assets/jobs-icon.svg";
import jobsIconActive from "../Assets/jobs-active-icon.svg"
import supportIcon from "../Assets/support-icon.svg";
import sidebarIcon from "../Assets/sidebar-icon.svg";
import logoAndText from "../Assets/logo-text.svg";
import notificationLogo from "../Assets/notification-03.svg";
import helpLogo from "../Assets/help-circle.svg";


const SideBar = () => {
    const location = useLocation();

    const navItems = [
        { path: "/overview", icon: overviewIcon, activeIcon: overviewIconActive, label: "Overview" },
        { path: "/calendar", icon: calendarIcon, activeIcon: calenarIconActive, label: "Calendar" },
        { path: "/jobs", icon: jobsIcon, activeIcon: jobsIconActive, label: "Jobs" },
        { path: "/payment", icon: supportIcon, activeIcon: jobsIconActive,  label: "Payment" },
    ];

    return (
        <div className="side_bar_header_container">
            <div className="side_bar_container">
                {navItems.map(({ path, icon, activeIcon, label }) => (
                    <Link key={path} to={path}>
                        <div className={`side_bar_child ${location.pathname === path ? "side_bar_child_active" : ""}`}>
                            <img src={location.pathname === path ? activeIcon : icon} alt={label} />
                            <span>{label}</span>
                        </div>
                    </Link>
                ))}

                <div className="side_bar_bottom">
                    <div>
                        <img src={sidebarIcon} alt="" />
                    </div>
                    <div className="side_bar_bottom_text">
                        <span>Urban Movers</span>
                        <span>Workspace</span>
                    </div>
                </div>
            </div>
            <div className="header_container">
                <div className="header_container_left">
                    <img src={logoAndText} alt="" />
                    <span>{navItems.find(item => item.path === location.pathname)?.label || ""}</span>
                </div>
                <div className="header_container_right">
                    <img src={helpLogo} alt="" />
                    <img src={notificationLogo} alt="" />
                </div>
            </div>
            <div className="body_container"></div>
        </div>
    );
};

export default SideBar;
