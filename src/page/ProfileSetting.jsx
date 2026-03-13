import React, { useEffect, useState } from "react";
import "./ProfileSetting.css"
import { getProfileSetting, updateAccountDetails } from "../api/agentApi";
import Toast from "../components/toast";
import Loader from "../components/loader";
import UpdatedProfileSuccess from "../components/ProfileUpdated";
import { useNavigate } from "react-router-dom";

export const ProfileSetting = () => {

    const [activeTab, setActiveTab] = useState("profile")
    const [showSuccess, setShowSuccess] = useState(false)
    const [iban, setIban] = useState("")
    const [bankName, setBankName] = useState("")
    const [accountName, setAccountName] = useState("")
    const [toast, setToast] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [users, setUsers] = useState({
        companyName: '',
        email: '',
        accountName: '',
        overview: '',
        image: '',
        bankName: '',
        iban: '',
        coveredProvinces: []
    })
    const goBack = () => {
        navigate('/overview')
    }

    const handleProfileChange = async () => {
        try {
            setLoading(true)
            const response = await getProfileSetting()
            setLoading(false)
            if (response.responseStatus) {
                setUsers(response.result)
                console.log(response)
                console.log(users)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        handleProfileChange()
    }, [])

    useEffect(() => {
        console.log("Users updated:", users)
    }, [users])

    const handleProfile = async () => {
        if (users.accountName.trim() === '' || users.bankName.trim() === '' || users.iban.trim() === '') {
            setToast({
                message: `Please fill in all fields`,
                type: "error"
            })
            return
        }
        try {
            setLoading(true)
            const response = await updateAccountDetails({
                accountName: users.accountName,
                bankName: users.bankName,
                iban: users.iban
            })
            setLoading(false)

            if (response.responseStatus) {
                setShowSuccess(true)
            } else {
                setToast({
                    message: `${response.responseMessage}` || `Couldn't update profile`,
                    type: "error"
                })
            }
        } catch (err) {
            setToast({
                message: `Couldn't update profile`,
                type: "error"
            })
        }
    }


    return (
        <div>
            <div className="profile_head">
                <div className="profile_head_first">
                    <div>
                        <img src="/images/new-logo-zinter-complete.svg" alt="" />
                    </div>
                    <div>
                        <span>Profile settings</span>
                    </div>
                </div>
                <div className="profile_close" onClick={goBack}>
                    <img src="../images/cancel-profile.svg" alt="" />
                </div>
            </div>
            <div>
                <div className="details_tabs">
                    <div className={activeTab === "profile" ? "profile_tab_active" : "account_tab"}
                        onClick={() => setActiveTab("profile")}>
                        <span>Profile details</span>
                    </div>
                    <div className={activeTab === "account" ? "profile_tab_active" : "account_tab"}
                        onClick={() => setActiveTab("account")}>
                        <span>Account details</span>
                    </div>
                </div>
            </div>
            {activeTab === "profile" && (
                <div className="profile_details">
                    <div className="movers_profile_image"
                        style={{
                            backgroundImage: users.image ? `url(${users.image})` : "none"
                        }}>

                    </div>
                    <div className="movers_details">
                        <div className="mover_details_icon"
                            style={{
                                backgroundImage: users.image ? `url(${users.image})` : "none"
                            }}>
                        </div>
                        <div className="movers_details_more">
                            <div className="movers_details_name">
                                <span className="movers_details_name1" >{users.companyName}</span>
                                <div className="movers_details_name2">
                                    <span className="movers_details_email"> {users.email} </span>
                                    <span className="movers_date_registered">
                                        <span>Reg:</span>
                                        <span>DEC 2025</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mover_details_sub">
                        <div className="email_details">
                            <label htmlFor="">Email address</label>
                            <input className="email_details_input" type="text" readOnly value={users.email} />
                        </div>
                        <div className="province_details">
                            <label htmlFor="">Provinces</label>
                            <div className="tag_input_wrapper">
                                {users.coveredProvinces.map((province, idx) => (
                                    <div className="tag_item" key={idx}>
                                        <span>{province.provinceName}</span>
                                        <button
                                            className="remove_btn"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="email_details">
                            <label htmlFor="">Overview</label>
                            <textarea name="" id="" readOnly value={users.overview}></textarea>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'account' && (
                <div className="account_detail_input">
                    <div className="movers_details">
                        <div className="mover_details_icon">
                        </div>
                        <div className="movers_details_more">
                            <div className="movers_details_name">
                                <span className="movers_details_name1" >{users.companyName}</span>
                                <div className="movers_details_name2">
                                    <span className="movers_details_email"> {users.email} </span>
                                    <span className="movers_date_registered">
                                        <span>Reg:</span>
                                        <span>DEC 2025</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="company_account_details_step">
                        <div className="company_account_details_inner">
                            <div className="account_details_last">
                                <label htmlFor="">IBAN</label>
                                <input type="text" value={users.iban} onChange={(e) =>
                                    setUsers({
                                        ...users,
                                        iban: e.target.value
                                    })
                                } placeholder="Enter account number" />
                            </div>
                            <div className="account_details_last">
                                <label htmlFor="">Bank name</label>
                                <input type="text" value={users.bankName} onChange={(e) =>
                                    setUsers({
                                        ...users,
                                        bankName: e.target.value
                                    })
                                } placeholder="Enter bank name" />
                            </div>
                        </div>

                        <div className="account_details_last">
                            <label htmlFor=""> Account name</label>
                            <input type="text" value={users.accountName} onChange={(e) =>
                                setUsers({
                                    ...users,
                                    accountName: e.target.value
                                })
                            } className="profile_setting_account" placeholder="Enter account name" />
                        </div>
                    </div>
                </div>
            )}


            <div className="footer">
                <button onClick={handleProfile}>Publish changes</button>
            </div>
            {toast && <Toast
                className="toast-container"
                message={toast.message}
                type={toast.type}
                duration={7000}
                onClose={() => setToast(null)}
            />}
            {loading && <Loader />}
            {showSuccess && <UpdatedProfileSuccess />}
        </div>
    )
}