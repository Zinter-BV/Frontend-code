import React, { useEffect, useState } from "react"
import "./adminLogin.css"
import VerifyTokenModal from "../components/VerifyToken";
import SuccessMessage from "../components/SuccessModal";
import SuccessMessageAdmin from "../components/SucessModalAdmin";
import { useQuery } from "@tanstack/react-query";
import { loginAgent } from "../api/agentApi";
import { useNavigate } from "react-router-dom";
import Toast from "../components/toast";
import Loader from "../components/loader";
import FirstCardToggle from "../components/FirstCardToggle";
// import LanguageSwitcher from "./LanguageSwitcher"
// import "../components/toast.css"
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLocation } from "react-router-dom";

const VendorLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [language, setLanguage] = useState("EN");
    const [password, setPassword] = useState("");
    const [user, setEmail] = useState("")
    const location = useLocation();
    const [inactivityLogout, setInactivityLogout] = useState(false);
    const [showVerifyEmail, setShowVerifyEmail] = useState(false)
    const [showSucessModal, setSuccessModal] = useState(false)
    const [toast, setToast] = useState(null);
    const navigate = useNavigate()
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["loginVendor", user, password],
        queryFn: () => loginAgent({ user, password }),
        enabled: false,
        refetchOnWindowFocus: false,
    });

    // useEffect(() => {
    //     if(data?.result) {
    //         console.log(data.result.responseMessage)
    //     } else {
    //         console.log(data.result.responseMessage)
    //     }
    // })



    useEffect(() => {
        if (error) {
            console.error('Couldn\'t login', error)
        }
        // if(data.responseStatus === false ) {
        //     console.log(data.responseMessage)
        // } else {
        //     console.log(data.responseMessage)

        // }
    })

    const handleBtnInOtherPage = () => {
        setSuccessModal(true)
        setShowVerifyEmail(false)
    }

    const closeModal = () => {
        setShowVerifyEmail(false)
    }

    const handleContinue = async () => {
        // debugger

        if (user && password) {
            const result = await refetch()
            const data = result?.data
            if (data?.responseStatus === false) {
                console.log(data.responseMessage)
                setToast({
                    message: data.responseMessage || "Something went wrong",
                    type: "error"
                });
            } else {
                console.log(data.responseMessage)
                console.log(data.result)
                sessionStorage.setItem('token', data.result.jwtToken)
                sessionStorage.setItem('name', data.result.name)
                sessionStorage.setItem('companyImage', data.result.image)
                navigate("/overview")
            }
        } else {
            setToast({
                message: "Please enter email and password",
                type: "warning"
            });
        }
    }

    const handleSignUp = async () => {
        navigate("/get-started")
    }


    useEffect(() => {
        if (location.state?.inactivity) {
            setInactivityLogout(true);
        }
    }, [location]);



    return (
        <div className="container_firstStep">
            <div className="card_toggle">
                <FirstCardToggle />
            </div>
            <div className="admin_login_container_vendor">
                {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <LanguageSwitcher language={language} setLanguage={setLanguage} />
                </div> */}

                <div>
                    {/* {language} */}
                </div>
                <div className="admin_login_header">
                    <h3>{language === "EN" ? "Vendor Login" : "Leverancier Login"}</h3>
                    <span>{language === "EN"
                        ? "Please enter your login credentials"
                        : "Voer uw inloggegevens in"}</span>
                </div>
                <div className="admin_login_input">
                    <div className="admin_login_email">
                        <label>Email Address</label>
                        <input type="text" value={user} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                    </div>
                    <div className="admin_login_password">
                        <label>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} value={password} placeholder="Password" />
                        <span className="admin_forgot_pass" ></span>
                        <span className="admin_login_pass_btn" onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? "HIDE" : "SHOW"}
                        </span>
                    </div>
                    <div className="no_account_section">
                        <span>Don't have an account?</span>   <a onClick={handleSignUp} href="#">Sign up</a>
                    </div>
                </div>

                <div className="admin_footer_btn_vendor">
                    <button onClick={() => handleContinue()}>CONTINUE</button>
                </div>

                {isLoading && <Loader />}



            </div>
            {toast && (
                <Toast
                    className="toast-container"
                    message={toast.message}
                    type={toast.type}
                    duration={5000}
                    onClose={() => setToast(null)}
                />
            )}
            {inactivityLogout && (
                <div className="logout_overlay">
                    <div className="logout_modal">
                        <p>You were logged out due to inactivity. Kindly log back in.</p>

                        <button
                            className="logout_btn"
                            onClick={() => setInactivityLogout(false)}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VendorLogin 