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

import React, { useEffect, useRef, useState } from "react";
import "./sideBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import overviewIcon from "../Assets/dasboard-icon.svg";
import overviewIconActive from "../Assets/overview-active-icon.svg"
import calendarIcon from "../Assets/calendar-icon.svg";
import calenarIconActive from "../Assets/calendar-active-icon.svg"
import jobsIcon from "../Assets/jobs-icon.svg";
import jobsIconActive from "../Assets/jobs-active-icon.svg"
// import supportIcon from "../Assets/support-icon.svg";
// import sidebarIcon from "../Assets/sidebar-icon.svg";
import settingIcon from "../Assets/settings-icon.svg"
import settingActiveIcon from "../Assets/settings-active-icon.svg"
import resolutionIcon from "../Assets/resolutionIcon.svg"
import resolutionIconActive from "../Assets/resolutionIconActive.svg"
import transactionIcon from "../Assets/credit-card.svg"
import transactionIconActive from "../Assets/credit-card-active.svg"
import LogoutModal from "./Logout";
// import logoAndText from "../Assets/logo-text.svg";
// import notificationLogo from "../Assets/notification-03.svg";
// import logoAndTextNew from "../Assets/new-logo-zinter-complete.svg"
// import helpLogo from "../Assets/help-circle.svg";
// import logoMobileScreen from "../Assets/logo_mobile_screen.svg"
// import hamburgerBtn from "../Assets/hamburger_btn.svg"


const SideBar = ({ adminView }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const [showInactivityModal, setShowInactivityModal] = useState(false);
    // const [companyName, setCompanyName] = useState("")
    const companyName = sessionStorage.getItem("name")
    const companyImage = sessionStorage.getItem('companyImage');

    // const [showBackBtn, setShowBackBtn] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const location = useLocation();
    const navigate = useNavigate()
    const activeTab = location.pathname.includes('create-new-role') || location.pathname.includes('view-summary-role') ? "Create new role" : 'Create new user'

    const logoutTimer = useRef(null);

    const INACTIVITY_LIMIT = 10 * 60 * 1000; // 5 minutes, adjust as needed

    // Function to log out user
    const logoutDueToInactivity = () => {
        sessionStorage.clear();
        setShowLogout(false);
        navigate("/vendor-login", {
            state: { inactivity: true }
        });
    };

    // Reset timer on user activity
    const resetTimer = () => {
        if (logoutTimer.current) clearTimeout(logoutTimer.current);
        logoutTimer.current = setTimeout(logoutDueToInactivity, INACTIVITY_LIMIT);
    };

    useEffect(() => {
        // Start the inactivity timer when component mounts
        resetTimer();

        // Listen to user activity events
        const events = ["keydown", "click"];
        events.forEach((event) => window.addEventListener(event, resetTimer));

        // Cleanup
        return () => {
            if (logoutTimer.current) clearTimeout(logoutTimer.current);
            events.forEach((event) => window.removeEventListener(event, resetTimer));
        };
    }, []);

    const checkLocation = () => {
        const path = location.pathname;

        if (path.includes('create-new-user')) {
            navigate('/admin');
        } else if (path.includes('create-new-role')) {
            navigate('/admin');
        } else if (path.includes('view-summary-user')) {
            navigate('/create-new-user');
        } else if (path.includes('view-summary-role')) {
            navigate('/create-new-role');
        }
    };

    const path = location.pathname;

    const showBackBtn =
        path.includes("create-new-user") ||
        path.includes("create-new-role") ||
        path.includes("view-summary-user") ||
        path.includes("view-summary-role");


    const isAdminActive =
        path === "/admin" ||
        path.includes("create-new-user") ||
        path.includes("create-new-role") ||
        path.includes("view-summary-user") ||
        path.includes("view-summary-role");



    const isAdminPage = location.pathname === "/admin";
    const showAdminUser = isAdminPage && adminView === 'user'
    const showAdminRole = isAdminPage && adminView === 'roles'




    const navItems = [
        { path: "/overview", icon: overviewIcon, activeIcon: overviewIconActive, label: "Overview" },
        { path: "/calendar", icon: calendarIcon, activeIcon: calenarIconActive, label: "Upcoming" },
        { path: "/jobs", icon: jobsIcon, activeIcon: jobsIconActive, label: "Jobs" },
        { path: "/payment", icon: transactionIcon, activeIcon: transactionIconActive, label: "Payment" },
        { icon: resolutionIcon, activeIcon: resolutionIconActive, label: "Resolution" },
        { path: "/admin", icon: settingIcon, activeIcon: settingActiveIcon, label: "Admin" },
        // { path: "/create-new-user", icon: settingIcon, activeIcon: settingActiveIcon, label: "Create new user" },
        // { path: "/create-new-role", icon: settingIcon, activeIcon: settingActiveIcon, label: "Create new role" }
    ];

    const navItemsMobile = [
        { path: "/overview", icon: overviewIcon, activeIcon: overviewIconActive, label: "Overview" },
        { path: "/calendar", icon: calendarIcon, activeIcon: calenarIconActive, label: "Upcoming" },
    ];

    const showLogoutFunc = () => {
        setShowLogout(true)
        setIsOpen(!isOpen);
    }

    const handleCancel = () => {
        setShowLogout(false);
    };

    const handleUser = () => {
        navigate('/create-new-user')

    }

    const handleRole = () => {

        navigate('/create-new-role')


    }

    const navigateToProfile = () => {
        navigate('/profile-setting')
    }

    const handleDeactivate = () => {
        setShowLogout(false);
        navigate('/vendor-login')
        sessionStorage.clear()

    };



    return (
        <div>
            <div className="side_bar_header_container">
                <div className="side_bar_container">
                    {navItems.map(({ path, icon, activeIcon, label }) => {
                        const isActive =
                            label === "Admin"
                                ? isAdminActive
                                : location.pathname === path;

                        return (
                            <Link key={label} to={path}>
                                <div
                                    className={`side_bar_child ${isActive ? "side_bar_child_active" : ""
                                        }`}
                                >
                                    <img src={isActive ? activeIcon : icon} alt={label} />
                                    <span>{label}</span>
                                </div>
                            </Link>
                        );
                    })}
                    <div className="complete_side_bar_bottom">
                        <div className="side_bar_bottom">
                            <div
                                className="company-image"
                                style={{
                                    backgroundImage: companyImage ? `url(${companyImage})` : "none",
                                }}
                            ></div>
                            <div className="side_bar_bottom_text">
                                {/* <span>{companyName}</span> */}
                                <span className="side_bar_bottom_text sidebar_text">{companyName}</span>

                            </div>
                        </div>
                        <div className="side_bar_bottom side_bar_bottom_cursor" onClick={navigateToProfile}>
                            <p className="side_bar_bottom_text"> Profile Settings </p>
                        </div>
                        <div className="side_bar_bottom side_bar_bottom_cursor"
                            onClick={showLogoutFunc}>
                            <img
                                className="logout"

                                src="/images/logout-03.svg"
                                alt=""
                            />
                            <span className="side_bar_bottom_text">Log Out</span>
                        </div>
                    </div>

                </div>

                <div className="header_container">
                    <div className="header_container_left">
                        {/* <img src={logoAndTextNew} alt="" /> */}
                        <img src="/images/new-logo-zinter-complete.svg" alt="" />
                        <div className="header_create">
                            {showBackBtn && (
                                <span><img onClick={checkLocation} src="/images/go-back.svg" alt="" /></span>
                            )}

                            <span>{navItems.find(item => item.path === location.pathname)?.label || activeTab}</span>

                        </div>
                    </div>
                    {!isAdminPage && (
                        <div className="header_container_right">

                        </div>
                    )}

                    {isAdminPage && (
                        <div className="header_container_right">
                            {showAdminUser && (
                                <button className="btn_user" onClick={handleUser} >ADD USER</button>
                            )}
                            {showAdminRole && (
                                <button className="btn_user" onClick={handleRole}>ADD ROLE</button>
                            )}

                        </div>
                    )}
                </div>
                <div className="body_container"></div>
            </div>
            <div className="side_bar_header_mobile">
                <div className="side_bar_mobile">
                    <div onClick={toggleSidebar}>
                        {/* <img src={hamburgerBtn} alt="" /> */}
                        <img src="/images/hamburger_btn.svg" alt="" />
                    </div>
                    <div >
                        <span>{location.pathname === '/overview' ? 'Overview' : 'Upcoming'}</span>
                    </div>
                    <div>

                        <img
                            className="logout"
                            onClick={showLogoutFunc}
                            src="/images/logout-03.svg"
                            alt=""
                        />
                    </div>
                    {/* {navItems.map(({ path, icon, activeIcon, label }) => (
                            <Link key={path} to={path}>
                                <div className={`side_bar_child_mobile ${location.pathname === path ? "side_bar_child_active" : ""}`}>
                                    <img src={location.pathname === path ? activeIcon : icon} alt={label} />
                                    <span src={location.pathname === path}>{location.pathname === ''}</span>
                                </div>
                            </Link>
                        ))} */}




                </div>
                {/* <div className={`side_bar_mobile_all ${isOpen ? "open" : ""}`}>
                    <div className="side_bar_container_mobile">
                        <div onClick={toggleSidebar} className="side_bar_logo_mobile">
                            <img src="/images/logo_mobile_screen.svg" alt="" />

                        </div>
                        {navItemsMobile.map(({ path, icon, activeIcon, label }) => (
                            <Link key={path} to={path}>
                                <div className={`side_bar_child_mobile ${location.pathname === path ? "side_bar_child_active" : ""}`}>
                                    <img src={location.pathname === path ? activeIcon : icon} alt={label} />
                                    <span>{label}</span>
                                </div>
                            </Link>
                        ))}

                        <div className="side_bar_bottom">
                            <div
                                className="company-image"
                                style={{
                                    backgroundImage: companyImage ? `url(${companyImage})` : "none",
                                }}
                            ></div>
                            <div className="side_bar_bottom_text">
                                <span>{companyName}</span>

                            </div>
                        </div>
                    </div>
                </div> */}
                <div className={`side_bar_mobile_all ${isOpen ? "open" : ""}`}>
                    {/* Sidebar */}
                    <div className="side_bar_container_mobile">
                        <div onClick={toggleSidebar} className="side_bar_logo_mobile">
                            <img src="/images/new-logo-zinter-complete.svg" alt="logo" />
                        </div>

                        {navItemsMobile.map(({ path, icon, activeIcon, label }) => (
                            <Link key={path} to={path}>
                                <div
                                    className={`side_bar_child_mobile ${location.pathname === path ? "side_bar_child_active" : ""
                                        }`}
                                >
                                    <img
                                        src={location.pathname === path ? activeIcon : icon}
                                        alt={label}
                                    />
                                    <span>{label}</span>
                                </div>
                            </Link>
                        ))}

                        <div className="side_bar_mobile_bottom">
                            <div className="side_bar_bottom">
                                <div
                                    className="company-image"
                                    style={{
                                        backgroundImage: companyImage ? `url(${companyImage})` : "none",
                                    }}
                                ></div>
                                <div className="side_bar_bottom_text">
                                    <span>{companyName}</span>
                                    {/* <span>Workspace</span> */}
                                </div>
                            </div>
                            <div>
                                <div className="side_bar_bottom side_bar_bottom_cursor"
                                    onClick={showLogoutFunc}>
                                    <img
                                        className="logout"

                                        src="/images/logout-03.svg"
                                        alt=""
                                    />
                                    <span className="side_bar_bottom_text">Log Out</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Overlay (click to close sidebar) */}
                    <div className="sidebar_overlay" onClick={toggleSidebar}></div>
                </div>


            </div>
            <LogoutModal
                showLogout={showLogout}
                onCancel={handleCancel}
                onDeactivate={handleDeactivate}
            />
        </div>
    );
};

export default SideBar;
