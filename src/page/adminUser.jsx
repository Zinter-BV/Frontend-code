import React, { useState } from "react";
import SideBar from "../components/SideBar";
import "./adminUser.css"
import Users from "../components/Users";
import Roles from "../components/Roles";

const AdminUser = () => {
    const [activeTab, setActiveTab] = useState("user")
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalRole, setTotalRole] = useState(0)

    return (
        <div>
            <div>
                <SideBar adminView={activeTab} />
            </div>
            <div className="admin_users_container">
                <div className="">
                    <div className="job_header">
                        <div className={activeTab === "user" ? "job_header_text_active" : "job_header_text"}
                            onClick={() => setActiveTab("user")}>
                            <span>Users</span>
                            <span> {totalUsers} </span>
                        </div>
                        <div className={activeTab === "roles" ? "job_header_text_active" : "job_header_text"}
                            onClick={() => setActiveTab("roles")}>
                            <span>Roles</span>
                            <span> {totalRole} </span>
                        </div>
                    </div>
                </div>
                <div className="">
                    {activeTab === "user" && <Users onUsersCountChange={setTotalUsers} />}
                    {activeTab === "roles" && <Roles onRolesCountChange={setTotalRole}  />}
                </div>
            </div>


        </div>
    )
}

export default AdminUser