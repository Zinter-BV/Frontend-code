import React from "react";
// import OSMMap from "../components/OsMap";
// import JobsPage from "./JobsPage";
// import SideBar from "../components/SideBar";
// import movingForwardIcon from "../Assets/Grade Icon.svg"
// import notificationBell from "../Assets/Email-verification-icon.svg"
// import userIcon from "../Assets/users-icon.svg"
// import viewJobs from "../Assets/View Arrow.svg"
// import approvedRequestIcon from "../Assets/approved-request-icon.svg"
// import paymentMadeIcon from "../Assets/payment-made-icon.svg"
// import upcomingIcon from "../Assets/upcoming-event-icon.svg"
// import inTransit from "../Assets/in-transit-icon.svg"
// import completedIcon from "../Assets/completed-icon.svg"
// import cancalledIcon from "../Assets/cancelled-icon.svg"
// import completedSignal from "../Assets/completed-signal.svg"
// import cancelledSignal from "../Assets/cancelled-signal.svg"
import searchIcon from "../Assets/search-01.svg"
import filterIcon from "../Assets/filter-horizontal.svg"
import refreshIcon from "../Assets/refresh (1).svg"
import arrowDown from "../Assets/arrow-down-02.svg"
import avatar from "../Assets/Gb-Avatar.svg"
import dot from "../Assets/canceled_dot.svg"
import viewMore from "../Assets/Eye.svg"
import "./cancelledJobs.css"

const CompletedJobs = () => {
    return (
        <div>
                  <div className="table_container">
                    <div className="table_header">
                        <div className="left_table_head">
                            <h1>Cancelled Jobs</h1>
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
                                        <div className="status_cancel td">
                                            <span>
                                                <img src={dot} alt="" />
                                            </span>
                                            <span>
                                                Cancelled
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
    )
}

export default CompletedJobs