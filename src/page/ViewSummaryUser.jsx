import React, { useEffect, useState } from "react"
import SideBar from "../components/SideBar"
import UserCreatedSuccess from "../components/UserCreated"
// import { registerAgent } from "../api/agentApi"
import { getAllRole, registerStaff } from "../api/staff"
import Loader from "../components/loader"
import Toast from "../components/toast"



const ViewSummaryUser = () => {

    const [showSuccess, setShowSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        role: 0
    })
    const [loading, setLoading] = useState(false)
    const [roles, setRoles] = useState([]);
    const [error, setError] = useState(null)
    const [toast, setToast] = useState(null);
    // const [driverRoleId, setDriverRoleId] = useState(null);
    // const [selectedRoleId, setSelectedRoleId] = useState("");
    const userName = sessionStorage.getItem("userName")
    const phoneNumber = sessionStorage.getItem("phoneNumber")
    const email = sessionStorage.getItem("emailValues")
    const selectedRoleId = sessionStorage.getItem("selectedRoleId")
    const selectedRoleName = sessionStorage.getItem("selectedRoleName")


    // const handleCreate = () => {
    //     setShowSuccess(true)


    // }


    const handleCreate = async () => {
        try {
            setLoading(true)

            const response = await registerStaff({
                name: userName,
                phoneNumber: phoneNumber,
                email: email,
                role: selectedRoleId

            })

            if (response.responseStatus) {
                setShowSuccess(true)
                sessionStorage.removeItem('userName')
                sessionStorage.removeItem('phoneNumber')
                sessionStorage.removeItem('emailValues')
            } else {
                setToast({
                    message: `Couldn't add user`,
                    type: "error"
                })
            }

        } catch (err) {
            setToast({
                message: `Couldn't add user`,
                type: "error"
            })

        } finally {
            setLoading(false)

        }
    }

    // const handleAllRole = async () => {
    //     try {
    //         setLoading(true)
    //         const response = await getAllRole()
    //         setLoading(false)
    //         if (response.responseStatus) {
    //             setRoles(response.result)
    //             onRolesCountChange(response.result.length)
    //         } else {
    //             setToast({
    //                 message: `Couldn't get role`,
    //                 type: "error"
    //             })
    //             return
    //         }


    //     } catch (e) {
    //         console.log(e)
    //     }
    // }



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
                    <div className="input_user_first">
                        <img src="/images/good-tick-green.svg" alt="" />
                        <span>Summary</span>
                    </div>
                </div>
                <div className="input_users">
                    <div className="input_users_name">
                        <span>User Name</span>
                        <span>{userName}</span>
                    </div>
                    <div className="input_users_name">
                        <span>User Phone</span>
                        <span>{phoneNumber}</span>
                    </div>
                    <div className="input_users_name">
                        <span>User Email</span>
                        <span>{email}</span>
                    </div>

                    <div className="input_users_name">
                        <span>Role selected</span>
                        <span>{selectedRoleName}</span>
                    </div>


                </div>



            </div>
            <div className="footer_user_btn">
                <button onClick={handleCreate}>Create user</button>
            </div>
            <div className="modal_middle">
                {showSuccess && <UserCreatedSuccess />}
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

export default ViewSummaryUser