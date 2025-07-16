import React, { useEffect, useState } from "react";
import FirstCardToggle from "../components/FirstCardToggle";
import VerifyTokenModal from "../components/VerifyToken";
import SuccessMessage from "../components/SuccessModal";
import stepperMobileSecond from "../Assets/mobile-stepper-icon-second.svg"
// import stepperIcon from "../Assets/Progress minimal icons connected.svg"
import mobileStepperIcon from "../Assets/mobile-stepper-icon.svg"
import stepperIconSecond from "../Assets/second-step.svg"
import "./firstStepCompanies.css"
import "./secondStepCompanies.css"
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getVerificationAgent } from "../api/agentApi";
import Loader from "../components/loader";

const SecondStepCompanies = () => {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [shouldFetch, setShouldFetch] = useState(false);
    const [email,  setEmail] = useState("")
    const [showVerifyEmail, setShowVerifyEmail] = useState(false)
    const [showSucessModal, setSuccessModal] = useState(false)
    const { data, isLoading, error,  refetch } = useQuery({
        queryKey: ["get-verification", email, password],
        queryFn: () => getVerificationAgent({email, password}),
        enabled: false,
        refetchOnWindowFocus: false,
        // enabled: regNumber.length === 8,
    });
    useEffect(() => {
        if (data) {
            if(data.responseStatus === false ) {
                return
            } else {
                console.log(data);
                setShowVerifyEmail(true);
                setShouldFetch(false)
            }
        }
        if (error) {
          console.error( error);
          setShouldFetch(false); // reset even on error
        }
      }, [data, error]);
    const handlePrevious = () => {

        navigate("/get-started")
    }

    
    const handleContinue = () => {
        if (email && password) {
            refetch(); 
          }
     
        // setShowVerifyEmail(true)
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
            <div className="card_toggle"> 
                <FirstCardToggle />
            </div>
            <div className="first_company_card">
                <div className="stepper_icon">
                    <img className="mobile_only_stepper_icon" src={stepperMobileSecond} alt="" />
                    <img className="laptop_only_stepper_icon" src={stepperIconSecond} alt="" />
                </div>
                <div className="company_header">
                    <h1>Email Verification</h1>
                    <p>Please provide your basic Information</p>
                </div>
                <div className="company_input_reg">
                    <label>Email Address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" />
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

                {isLoading && <Loader />}
        </div>
    )
}

export default SecondStepCompanies