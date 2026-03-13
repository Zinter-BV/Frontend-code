import React, { useEffect, useState } from "react";
import { getAllStaff } from "../api/staff";
import Loader from "./loader";
// import { Loader } from "lucide-react";

const Users = ({ onUsersCountChange }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const handleAllUsers = async () => {
        try {
            // debugger
            setLoading(true)
            const response = await getAllStaff()
            // console.log(response)
            setLoading(false)
            if (response.responseStatus) {
                setUsers(response.result)
                onUsersCountChange(response.result.length);

            } else {
                return
            }
        } catch (e) {
            console.log(e)
        }
        sessionStorage.removeItem('userName')
        sessionStorage.removeItem('phoneNumber')
        sessionStorage.removeItem('emailValues')
        sessionStorage.removeItem("selectedRoleId")
        sessionStorage.removeItem("selectedRoleName")
    }

    useEffect(() => {
        handleAllUsers();
    }, []);
    return (
        <div className="user_details_container_all">
            {users.map((user) => (
                <div className="user_details_container" key={user.id}>
                    <div className="user_details">
                        <span className="user_details_name">{user.name}</span>
                        <span className="user_details_role">Driver</span>
                    </div>

                    <div className="user_details">
                        <span className="user_details_phone">{user.phone}</span>
                        <span className="user_details_email">{user.email}</span>
                    </div>

                    <div className="user_details">
                        <span className="user_details_date_name">Date created</span>
                        <span className="user_details_date">
                            {new Date(user.createdOn).toLocaleString()}
                        </span>
                    </div>

                    <div>
                        <span
                            className={user.isActive ? "user_status" : "user_status_red"}
                        >
                            {user.isActive ? "Active" : "Inactive"}
                        </span>
                    </div>
                </div>
            ))}
            {loading && <Loader />}
            {/* <div className="container-logout-background">
                <div className="container-view-more">
                    <div className="container-view-more-btn">
                        <img src="/images/close-x-btn.svg" alt="" />
                    </div>
                    <div>
                        <div className="">
                            <img src="" alt="" />
                        </div>
                        <div>
                            <div>Lasisi Wasiu</div>
                            <div>
                                <span></span>
                                <span>Driver</span>
                                <span>08106879478</span>
                                <span>Lasisi@gmail.com</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>DEACTIVE USER</span>
                                <span> <img src="/images/left-arrow-black.svg" alt="" /> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Users