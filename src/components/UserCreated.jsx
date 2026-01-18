import React from "react";
import successIcon from "../Assets/success-good-tick.svg"
import { useNavigate } from "react-router-dom";

const UserCreatedSuccess = () => {
    const navigate = useNavigate()

    const handleToAdmin = () => {
        navigate('/admin')

    }

    return (
        <div className="success_modal_background">
            <div className="success_modal_container">
                <div className="success_modal_upper">
                    <div>
                        <img src={successIcon} alt="" />
                    </div>
                    <div className="success_modal_upper_text">
                        <h2> Successfully</h2>
                        <span>User successfully created</span>
                    </div>
                </div>
                <div className="border-btn">
                    <button onClick={handleToAdmin}>OK, GOT IT</button>
                </div>
            </div>
        </div>
    )
}

export default UserCreatedSuccess