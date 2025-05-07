import { React } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import FirstCardToggle from "../components/FirstCardToggle";
import stepperIcon from "../Assets/Progress minimal icons connected.svg"
import mobileStepperIcon from "../Assets/mobile-stepper-icon.svg"
import "./firstStepCompanies.css";
import { useState } from "react";
import goodTick from "../Assets/tick-01.svg"
import companyImage from "../Assets/Content.svg"

const FirstStepCompanies = () => {

    const [regNumber, setRegNumber] = useState("");
    const [showError, setShowError] = useState(false);
    const [showTick, setShowTick] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const value = e.target.value;

        // Only digits & max 8 characters
        const sanitizedValue = value.replace(/\D/g, "").slice(0, 8);
        setRegNumber(sanitizedValue);

        if (sanitizedValue.length === 8) {
            if (sanitizedValue === "23456789") {
                setShowTick(true);
                setShowError(false);
            } else {
                setShowTick(false);
                setShowError(true);
            }
        } else {
            setShowTick(false);
            setShowError(false);
        }
    };


    const handleContinue = () => {
        if (regNumber === "23456789") {
            navigate("/email-verification");
        } else {
            return
        }
    };


    return (
        <div className="container_firstStep">
            <div className="card_toggle">
                <FirstCardToggle />
            </div>
            <div className="first_company_card">
                <div className="stepper_icon">
                    <img className="mobile_only_stepper_icon" src={mobileStepperIcon} alt="" />
                    <img className="laptop_only_stepper_icon" src={stepperIcon} alt="" />
                </div>
                <div className="company_header">
                    <h1>Company Information</h1>
                    <p>Please provide company details and list of services you offer</p>
                </div>
                <div className="company_input_reg">
                    <label>Company Registration Number</label>
                    <input type="text"
                        value={regNumber}
                        onChange={handleInputChange}
                        placeholder="Enter Registration Number" />
                    {showTick && <img src={goodTick} alt="Valid" />}
                </div>
                {showError && (
                    <div className="error_message_container">
                        <div className="error_message">
                            <span>Company does not exist</span>
                            <span>
                                Please check if the number inputted is correct or visit the
                                registration body to register your company
                            </span>
                        </div>
                    </div>
                )}
                {showTick && (
                    <div className="good_tick_container">
                        <div className="first_card_good_tick" >
                            <div>
                                <img src={companyImage} alt="" />
                            </div>
                            <div className="movers_details">
                                <div className="movers_details_text">Urban Movers</div>
                                <div className="movers_details_sub">
                                    <span>Registered Company</span>
                                    <span>+31 20-1234567</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mover_details_container">
                                <div className="mover_details_upper">
                                    <div className="user_success_phone">
                                        <span>Phone</span>
                                        <span>+31 20-1234567</span>
                                    </div>
                                    <div className="user_success_phone">
                                        <span>Date of registeration</span>
                                        <span>17th July, 1995</span>
                                    </div>
                                </div>
                                <div className="user_success_phone_last">
                                    <span>Company Address</span>
                                    <span>Keizersgracht 123, 1015 CJ Amsterdam</span>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                )}
                <div className="company_policy">
                    <span>
                        By creating an account, you accept our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                    </span>
                </div>
                <div className="company_firststep_btn">
                    <button>Go Back</button>
                    <button onClick={handleContinue}>Continue</button> {/* Add onClick */}
                </div>
            </div>
        </div>
    );
};

export default FirstStepCompanies;
