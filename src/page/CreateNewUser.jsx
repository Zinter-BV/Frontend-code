import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import { getAllRole, getAllStaff } from "../api/staff";
import Toast from "../components/toast";

const CreateNewUser = () => {

    const navigate = useNavigate()
    const [toast, setToast] = useState(false);
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false)
    const [selectedRoleId, setSelectedRoleId] = useState(
        () => sessionStorage.getItem("selectedRoleId") || ""
    );
    const [selectedRoleName, setSelectedRoleName] = useState(
        () => sessionStorage.getItem("selectedRoleName") || ""
    );

    const handleViewUser = () => {
        if (!userName?.trim() || !phoneNumber?.trim() || !email.trim() || !selectedRoleId) {
            setToast({
                message: `Please fill in all fields!`,
                type: "error"
            })
        } else {
            navigate('/view-summary-user')
        }

    }

    const handleAllRole = async () => {
        try {
            setLoading(true);
            const response = await getAllRole();
            setLoading(false);

            if (response.responseStatus) {
                setRoles(response.result);

            } else {
                setToast({
                    message: "Roles not found",
                    type: "error",
                })
            }
        } catch (e) {
            console.log(e);
        }
    };


    useEffect(() => {
        handleAllRole()
    }, [])

    // const handleAllUsers = async () => {
    //     try {
    //         const response = await getAllStaff()
    //         console.log(response)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // useEffect(() => {
    //     handleAllUsers();
    // }, []);


    const handleUserName = (e) => {
        sessionStorage.setItem("userName", e.target.value)
    }

    const handlePhoneNumber = (e) => {
        sessionStorage.setItem("phoneNumber", e.target.value)
    }

    const handleEmailAddress = (e) => {
        // debugger
        sessionStorage.setItem("emailValues", e.target.value)
    }



    const userName = sessionStorage.getItem("userName")
    const phoneNumber = sessionStorage.getItem("phoneNumber")
    const email = sessionStorage.getItem("emailValues")


    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div className="input_users_container">
                <div className="input_user_step">
                    <div className="input_user_first">
                        <img src="/images/good-tick-green.svg" alt="" />
                        <span>User Details</span>
                    </div>
                    <div className="input_user_second">
                        <img src="/images/note-second-step.svg" alt="" />
                        <span>Summary</span>
                    </div>
                </div>
                <div className="input_users">
                    <div>
                        <input className="input_role" value={userName} type="text" onChange={handleUserName} placeholder="Enter full name" />
                    </div>
                    <div>
                        <input className="input_role" value={phoneNumber} type="text" onChange={handlePhoneNumber} placeholder="Enter phone number" />
                    </div>
                    <div>
                        <input className="input_role" value={email} type="text" onChange={handleEmailAddress}  placeholder="Enter email address" />
                    </div>
                    {/* <div className="select-wrapper">
                        <select
                            className="input_role"
                            value={selectedRoleId}
                            onChange={(e) => {
                                const roleId = e.target.value;
                                const roleName = roles.find((r) => r.id === Number(roleId))?.roleName || "";

                                setSelectedRoleId(roleId);
                                setSelectedRoleName(roleName);

                                sessionStorage.setItem("selectedRoleId", roleId);
                                sessionStorage.setItem("selectedRoleName", roleName);
                            }}
                        >
                            <option value="">Select role</option>
                            {roles.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.roleName}
                                </option>
                            ))}
                        </select>

                        <span className="select-arrow">▼</span>
                    </div> */}

                    <div>
                        <select
                            className="input_role"
                            value={selectedRoleId}
                            onChange={(e) => {
                                const roleId = e.target.value;
                                const roleName = roles.find((r) => r.id === Number(roleId))?.roleName || "";

                                setSelectedRoleId(roleId);
                                setSelectedRoleName(roleName);


                                sessionStorage.setItem("selectedRoleId", roleId);
                                sessionStorage.setItem("selectedRoleName", roleName);
                            }}
                        >
                            <option value="">Select role</option>
                            {roles.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.roleName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>


            </div>
            <div className="footer_user_btn">
                <button onClick={handleViewUser}>View Summary</button>
            </div>

            {toast && <Toast
                className="toast-container"
                message={toast.message}
                type={toast.type}
                duration={7000}
                onClose={() => setToast(null)}
            />}
        </div>
    )
}

export default CreateNewUser