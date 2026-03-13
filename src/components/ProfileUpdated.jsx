import React from "react";
import successIcon from "../Assets/success-good-tick.svg"
import { useNavigate } from "react-router-dom";

const UpdatedProfileSuccess = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/overview')

    }

    return (
        <div className="success_modal_background">
            <div className="success_modal_container">
                <div className="success_modal_upper">
                    <div>
                        <img src={successIcon} alt="" />
                    </div>
                    <div className="success_modal_upper_text">
                        <h2> Successful</h2>
                        <span>Profile successfully updated</span>
                    </div>
                </div>
                <div className="border-btn">
                    <button onClick={handleBack}>OK, GOT IT</button>
                </div>
            </div>
        </div>
    )
}

export default UpdatedProfileSuccess