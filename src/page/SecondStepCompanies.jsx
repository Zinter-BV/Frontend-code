import React, { useState } from "react";
import FirstCardToggle from "../components/FirstCardToggle";
import VerifyTokenModal from "../components/VerifyToken";
import SuccessMessage from "../components/SuccessModal";
import stepperIconSecond from "../Assets/second-step.svg"
import "./firstStepCompanies.css"
import "./secondStepCompanies.css"
import { useNavigate } from "react-router-dom";

const SecondStepCompanies = () => {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [showVerifyEmail, setShowVerifyEmail] = useState(false)
    const [showSucessModal, setSuccessModal] = useState(false)
    const handlePrevious = () => {
        navigate("/get-started")
    }

    
    const handleContinue = () => {
        setShowVerifyEmail(true)
    }

    const handleBtnInOtherPage = () => {
        setSuccessModal(true)
        setShowVerifyEmail(false)
    }

    const closeModal = () => {
        setShowVerifyEmail(false)
    }
    return (
        <div className="container_firstStep">
            <div>
                <FirstCardToggle />
            </div>
            <div className="first_company_card">
                <div>
                    <img src={stepperIconSecond} alt="" />
                </div>
                <div className="company_header">
                    <h1>Email Verification</h1>
                    <p>Please provide your basic Information</p>
                </div>
                <div className="company_input_reg">
                    <label>Email Address</label>
                    <input type="text" placeholder="Enter Email" />
                </div>

                <div className="company_input_reg_pass">
                    <label>Enter Password</label>
                    <input type={showPassword ? "text" : "password"} value={password} placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)} />
                    <div>Password must be 8 characters long</div>
                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? "HIDE" : "SHOW"}
                    </span>
                </div>

                <div className="company_policy">
                    <span>
                        By creating account you accept our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                    </span>

                </div>
                <div className="company_firststep_btn_second">
                    <button onClick={handlePrevious}>Go Back</button>
                    <button onClick={handleContinue}>Continue</button>
                </div>

            </div>

            {showVerifyEmail &&
                <div className="verify_component" >
                    <VerifyTokenModal handleSubmit={handleBtnInOtherPage} closeModal={closeModal} />
                </div>}
            {showSucessModal &&
                <div className="verify_component">
                    <SuccessMessage />
                </div>}


        </div>
    )
}

export default SecondStepCompanies