import { addRole } from "../api/staff"
import RoleCreatedSuccess from "../components/RoleCreated"
import SideBar from "../components/SideBar"
import React, { useState } from "react"
import Toast from "../components/toast"
import Loader from "../components/loader"

const ViewSummaryRole = () => {

    const [showSuccess, setShowSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [toast, setToast] = useState(null);
    const roleName = sessionStorage.getItem("role")
    const roleDesc = sessionStorage.getItem("roleDesc")


    const createRole = async () => {
        try {
            setLoading(true)
         
            const response = await addRole(roleName)

            if (response.responseStatus) {
                setLoading(false)
                setShowSuccess(true)
                sessionStorage.removeItem('role')
                sessionStorage.removeItem('roleDesc')
            } else {
                setToast({
                    message: `Couldn't create role`,
                    type: "error"
                })
            }

        } catch (err) {
            setToast({
                message: `Couldn't create role`,
                type: "error"
            })
            throw err
        } finally {
            setLoading(false)


        }

    }
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
                    <div className="input_user_first">
                        <img src="/images/good-tick-green.svg" alt="" />
                        <span>Summary</span>
                    </div>
                </div>
                <div className="input_users">
                    <div className="input_users_name">
                        <span>Role name</span>
                        <span>{roleName} </span>
                    </div>
                    <div className="input_users_name">
                        <span>Role Description</span>
                        <span>{roleDesc}</span>
                    </div>

                </div>



            </div>
            <div className="footer_user_btn">
                <button onClick={createRole}>Create role</button>
            </div>

            <div className="modal_middle">
                {showSuccess && <RoleCreatedSuccess />}
            </div>

            {loading && <Loader />}
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

export default ViewSummaryRole