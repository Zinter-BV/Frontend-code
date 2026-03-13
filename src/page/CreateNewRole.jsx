import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import Toast from "../components/toast";

const CreateNewRole = () => {

    const navigate = useNavigate()
    const [toast, setToast] = useState(null);
    const handleView = () => {
        if (!roleName?.trim()) {
            setToast({
                message: `Enter the role name!`,
                type: "error"
            })
        } else {
            navigate('/view-summary-role')
        }

    }
    const handleRole = (e) => {
        sessionStorage.setItem("role", e.target.value)
    }
    const handleDescription = (e) => {
        sessionStorage.setItem("roleDesc", e.target.value)
    }

    const roleName = sessionStorage.getItem("role")
    const roleDesc = sessionStorage.getItem("roleDesc")
    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div className="input_users_container">
                <div className="input_user_step">
                    <div className="input_user_first">
                        <img src="/images/good-tick-green.svg" alt="" />
                        <span>Role Details</span>
                    </div>
                    <div className="input_user_second">
                        <img src="/images/note-second-step.svg" alt="" />
                        <span>Summary</span>
                    </div>
                </div>
                <div className="input_users">
                    <div>
                        <input className="input_role" value={roleName} onChange={handleRole} type="text" placeholder="Enter Role Name" />
                    </div>
                    <div>
                        <textarea className="textarea_role" value={roleDesc} onChange={handleDescription} name="" id="" placeholder="Describe the function of this role"></textarea>
                    </div>

                </div>
            </div>
            <div className="footer_user_btn">
                <button type="submit" onClick={handleView} >View Summary</button>
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

export default CreateNewRole