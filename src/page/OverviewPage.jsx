import React from "react";
// import OSMMap from "../components/OsMap";
// import JobsPage from "./JobsPage";
import SideBar from "../components/SideBar";
import movingForwardIcon from "../Assets/Grade Icon.svg"
import notificationBell from "../Assets/Email-verification-icon.svg"
import userIcon from "../Assets/users-icon.svg"
import viewJobs from "../Assets/View Arrow.svg"
import approvedRequestIcon from "../Assets/approved-request-icon.svg"
import paymentMadeIcon from "../Assets/payment-made-icon.svg"
import upcomingIcon from "../Assets/upcoming-event-icon.svg"
import inTransit from "../Assets/in-transit-icon.svg"
import completedIcon from "../Assets/completed-icon.svg"
import cancalledIcon from "../Assets/cancelled-icon.svg"
import completedSignal from "../Assets/completed-signal.svg"
import cancelledSignal from "../Assets/cancelled-signal.svg"
import searchIcon from "../Assets/search-01.svg"
import filterIcon from "../Assets/filter-horizontal.svg"
import refreshIcon from "../Assets/refresh (1).svg"
import arrowDown from "../Assets/arrow-down-02.svg"
import avatar from "../Assets/Gb-Avatar.svg"
import dot from "../Assets/Dot.svg"
import viewMore from "../Assets/Eye.svg"
import "./overviewPage.css"



const OverviewPage = () => {
    return (

        <div className="overview_sidebar">
            <div>
                <SideBar />
            </div>
            <div className="container_overview_all">
                <div className="container_overview">
                    <div className="container_new_jobs">
                        <div className="moving_truck">
                            <div className="notification_user">
                                <img src={notificationBell} alt="" />
                                <img src={userIcon} alt="" />
                            </div>


                        </div>
                        <div className="view_jobs_container" >
                            <div className="view_jobs_header">
                                <span>Incoming</span>
                            </div>
                            <div className="view_jobs_body">
                                <div className="view_jobs_text">
                                    <span>12 New Jobs</span>
                                    <span>Provide accurate quote</span>
                                </div>
                                <div>
                                    <img src={viewJobs} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map_container">
                        Map is going here
                    </div>
                </div>
                <div className="calendar_container">
                    <div className="first_step">
                        <div className="first_step_arrow">
                            <img src={movingForwardIcon} alt="" />
                            {/* <span>--------------</span> */}
                        </div>
                        <div className="approved_number_text_container">
                            <div>
                                <img src={approvedRequestIcon} alt="" />
                            </div>
                            <div className="approved_number_text">
                                <span>Approved Requests</span>
                                <span>122</span>
                            </div>
                        </div>
                    </div>
                    <div className="first_step">
                        <div className="first_step_arrow">
                            <img src={movingForwardIcon} alt="" />
                            {/* <span>-----------</span> */}
                        </div>
                        <div className="approved_number_text_container">
                            <div>
                                <img src={paymentMadeIcon} alt="" />
                            </div>
                            <div className="approved_number_text">
                                <span>Payments Made</span>
                                <span>98</span>
                            </div>
                        </div>
                    </div>
                    <div className="first_step">
                        <div className="first_step_arrow">
                            <img src={movingForwardIcon} alt="" />
                            {/* <span>----------------</span> */}
                        </div>
                        <div className="approved_number_text_container">
                            <div>
                                <img src={upcomingIcon} alt="" />
                            </div>
                            <div className="approved_number_text">
                                <span>Upcoming Pickups</span>
                                <span>25</span>
                            </div>
                        </div>
                    </div>
                    <div className="first_step">
                        <div className="first_step_arrow">
                            <img src={movingForwardIcon} alt="" />
                            {/* <span>---------</span> */}
                        </div>
                        <div className="approved_number_text_container">
                            <div>
                                <img src={inTransit} alt="" />
                            </div>
                            <div className="approved_number_text">
                                <span>In Transit</span>
                                <span>15</span>
                            </div>
                        </div>
                    </div>
                    <div className="first_step">
                        <div className="first_step_arrow">
                            <img src={completedSignal} alt="" />

                        </div>
                        <div className="approved_number_text_container">
                            <div>
                                <img src={completedIcon} alt="" />
                            </div>
                            <div className="approved_number_text">
                                <span>Completed Moves</span>
                                <span>122</span>
                            </div>
                        </div>
                    </div>
                    <div className="first_step">
                        <div className="first_step_arrow">
                            <img src={cancelledSignal} alt="" />

                        </div>
                        <div className="approved_number_text_container">
                            <div>
                                <img src={cancalledIcon} alt="" />
                            </div>
                            <div className="approved_number_text">
                                <span>Cancelled Moves</span>
                                <span>12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table_container">
                    <div className="table_header">
                        <div className="left_table_head">
                            <h1>All Jobs</h1>
                        </div>
                        <div className="right_table_head">
                            <div className="search_icon">
                                <input type="text" placeholder="Search" />
                                <img src={searchIcon} alt="" />
                            </div>
                            <div className="filter_con">
                                <span>
                                    <img src={filterIcon} alt="" />
                                </span>
                                <span>Filter</span>
                            </div>
                            <div className="refresh">
                                <img src={refreshIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div >
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <div>
                                            <span>Name</span>
                                            <img src={arrowDown} alt="" />
                                        </div>
                                    </th>
                                    <th>
                                        <div>
                                            <span>Move Summary</span>
                                            <img src={arrowDown} alt="" />
                                        </div>
                                    </th>
                                    <th>
                                        <div>
                                            <span>Status</span>
                                            <img src={arrowDown} alt="" />
                                        </div>
                                    </th>
                                    <th>

                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="name_td td">
                                            <div>
                                                <img src={avatar} alt="user-initials" />
                                            </div>
                                            <div className="name_text">
                                                <span>Anna van Dijk</span>
                                                <span>AnnaVanDijk@gmail.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="move_summary td">
                                            <span>3 Bedroom House</span>
                                            <span>Amsterdam (Damrack - Hilversum)</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="status td">
                                            <span>
                                                <img src={dot} alt="" />
                                            </span>
                                            <span>
                                                New Request
                                            </span>
                                        </div>
                                    </td>
                                    <td className="view">
                                        <img src={viewMore} alt="view more" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OverviewPage