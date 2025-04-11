import React, { useState } from "react";
import "./thirdStepCompanies.css"
import FirstCardToggle from "../components/FirstCardToggle";
import RichTextEditor from "../components/RichTextEditor";
import AccountSuccessMessage from "../components/AccountSuccessModal";
import stepperIconSecond from "../Assets/third-stepper-icon.svg"
import dropdown from "../Assets/arrow-down-dropdown.svg"
import imageUpload from "../Assets/image-upload.svg"
import coverPhotoIcon from "../Assets/album-02.svg"
import cancelIcon from "../Assets/cancel-01.svg"
import firstPhoto from "../Assets/cover-photo.svg"
import secondPhoto from "../Assets/cover-photo-second.svg"
import thirdPhoto from "../Assets/cover-photo-third.svg"
import fourthPhoto from "../Assets/cover-photo-four.svg"
import fifthPhoto from "../Assets/cover-photo-five.svg"
import sixthPhoto from "../Assets/cover-photo-six.svg"

const ThirdStepCompanies = () => {
    const [showMoreOptions, setShowOptions] = useState(false)
    const [showCoverPhoto, setShowCoverPhoto] = useState(false)
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [selectedProvinces, setSelectedProvinces] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [allProvinces] = useState([
        'Lagos', 'Abuja', 'Kano', 'Rivers', 'Oyo', 'Kaduna', 'Delta',
    ]);

    const toggleProvince = (province) => {
        if (selectedProvinces.includes(province)) {
            setSelectedProvinces(selectedProvinces.filter(p => p !== province));
        } else {
            setSelectedProvinces([...selectedProvinces, province]);
        }
    };

    const removeProvince = (province) => {
        setSelectedProvinces(selectedProvinces.filter(p => p !== province));
    };

    const openMoreOptions = () => {
        setShowOptions(prev => !prev);
    }

    const openCoverPhoto = () => {
        setShowCoverPhoto(true)
    }

    const hideCoverPhoto = () => {
        setShowCoverPhoto(false)
    }

    const handleCover = (photo) => {
        setCoverPhoto(photo)
        setShowCoverPhoto(false)
        setShowOptions(false)
    }

    const openSuccessMessage = () => {
        setShowSuccessModal(true)
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
                    <h1>Profile Setup</h1>
                    <p>Set up your profile details</p>
                </div>
                <div className="upload_container_all">
                    <div className="upload_container"
                        style={{
                            backgroundImage: coverPhoto
                                ? `url(${coverPhoto})`
                                : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: coverPhoto ? 'transparent' : 'rgba(240, 249, 253, 1)',
                        }}>
                        {!coverPhoto && <button onClick={openMoreOptions}>
                            <img src={imageUpload} alt="" />
                            <span>Upload cover photo</span>

                        </button>}

                        {showMoreOptions &&
                            <div className="choose_photo_container">
                                <div className="choose_photo_btn" onClick={openCoverPhoto}>
                                    <img src={coverPhotoIcon} alt="" />
                                    <span>Choose cover photo</span>
                                </div>
                                <div className="choose_photo_btn">
                                    <img src={imageUpload} alt="" />
                                    <span>Upload from device</span>
                                </div>
                            </div>}
                        {coverPhoto && <div className="inner_upload_section">
                            <button onClick={openMoreOptions}>
                                <img src={imageUpload} alt="" />
                                <span>Change Image</span>
                            </button>

                        </div>}


                    </div>
                    <div className="upload_container_note" >
                        <span>This is the photo users see when you send them a quote</span>
                    </div>
                </div>
                <div className="input_multiple" onClick={() => setShowDropdown(!showDropdown)}>
                    <span>Provinces Covered</span>

                    <div className="tag_input_wrapper">
                        {selectedProvinces.map((province, idx) => (
                            <div className="tag_item" key={idx}>
                                <span>{province}</span>
                                <button className="remove_btn" onClick={(e) => {
                                    e.stopPropagation();
                                    removeProvince(province);
                                }}>×</button>
                            </div>
                        ))}
                        {/* <input
                            type="text"
                            placeholder="Select the Provinces covered"
                            
                        /> */}
                    </div>

                    <img src={dropdown} alt="" onFocus={() => setShowDropdown(true)} />

                    {showDropdown && (
                        <div className="dropdown_list">
                            {allProvinces.map((province, idx) => (
                                <label className="dropdown_item" key={idx}>
                                    <input
                                        type="checkbox"
                                        checked={selectedProvinces.includes(province)}
                                        onChange={() => toggleProvince(province)}
                                    />
                                    <span>{province}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div className="input_multiple">
                    <span>Company Overview</span>
                    <div className="rich_text">
                        <RichTextEditor />
                    </div>
                </div>
                <div className="company_firststep_btn_second">
                    <button>Skip</button>
                    <button onClick={openSuccessMessage}>Continue</button> {/* Add onClick */}
                </div>
            </div>
            {showCoverPhoto &&
                <div className="cover_photo_background">
                    <div className="cover_photo_container">
                        <div className="cover_photo_head">
                            <h2>Select cover photo</h2>
                            <img onClick={hideCoverPhoto} src={cancelIcon} alt="" />
                        </div>
                        <div className="cover_photo_body">
                            <div>
                                <img src={firstPhoto} alt="" onClick={() => handleCover(firstPhoto)} />
                            </div>
                            <div>
                                <img src={secondPhoto} alt="" onClick={() => handleCover(secondPhoto)} />
                            </div>
                            <div>
                                <img src={thirdPhoto} alt="" onClick={() => handleCover(thirdPhoto)} />
                            </div>
                            <div>
                                <img src={fourthPhoto} alt="" onClick={() => handleCover(fourthPhoto)} />
                            </div>
                            <div>
                                <img src={fifthPhoto} alt="" onClick={() => handleCover(fifthPhoto)} />
                            </div>
                            <div>
                                <img src={sixthPhoto} alt="" onClick={() => handleCover(sixthPhoto)} />
                            </div>
                        </div>
                    </div>
                </div>}
            {showSuccessModal &&
                <div className="verify_component">
                    <AccountSuccessMessage />
                </div>}

        </div>
    )
}

export default ThirdStepCompanies