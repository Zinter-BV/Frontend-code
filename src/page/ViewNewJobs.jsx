import React, { useState } from "react";
import "./viewNewJobs.css"
import RichTextEditor from "../components/RichTextEditor";
import ZinterHeaderPartner from "../components/ZinterHeaderPartner";
import arrowBack from "../Assets/arrow-back-btn.svg"
import dot from "../Assets/Dot.svg"
import movingFromIcon from "../Assets/point-a.svg"
import MovementMap from "../components/GoogleMapMove";
import displayPicture from "../Assets/avatar-icon.svg"
import sofaIcon from "../Assets/sofa-03.svg"
import floorLampIcon from "../Assets/lamp.svg"
import clockIcon from "../Assets/vintage-clock.svg"
import tableIcon from "../Assets/table-01.svg"
import poolTable from "../Assets/pool-table.svg"
import radioIcon from "../Assets/radio.svg"
import tvStandIcon from "../Assets/television-table.svg"
import remoteControl from "../Assets/remote-control.svg"
import magazineRack from "../Assets/bookshelf-02.svg"
import indoorPlant from "../Assets/flower-pot.svg"
import kingSizeBed from "../Assets/bed-double.svg"
import babyBedIcon from "../Assets/baby-bed-02.svg"
import curtains from "../Assets/curtains.svg"
import bookShelf from "../Assets/bookshelf-02.svg"
import monitorIcon from "../Assets/modern-tv.svg"
import chairIcon from "../Assets/chair-02.svg"
import closeIcon from "../Assets/close-modal-icon.svg"
import locationIcon from "../Assets/location-icon.svg"
import destinationIcon from "../Assets/destination-icon.svg"
import dropdown from "../Assets/arrow-down-dropdown.svg"
import sucessIcon from "../Assets/success-good-tick.svg"

import { useNavigate } from "react-router-dom";



const ViewNewJobs = () => {
    const navigate = useNavigate()

    const handdleGoBack = () => {
        navigate("/jobs")
    }
    const [selectedProvinces, setSelectedProvinces] = useState([]);
    const [showProvideQuote, setShowProvideQuote] = useState(false)
    const [showSuccessQuote, setshowSuccessQuote] = useState(false)

    const toggleProvince = (province) => {
        if (selectedProvinces.includes(province)) {
            setSelectedProvinces(selectedProvinces.filter(p => p !== province));
        } else {
            setSelectedProvinces([...selectedProvinces, province]);
        }
    };

   const handleSuccess = () => {
        setShowProvideQuote(true)   
    }

    const handleClose = () => {
        setShowProvideQuote(false)
        setshowSuccessQuote(true)
    }

    const handleAllClose = () => {
        setShowProvideQuote(false)
        setshowSuccessQuote(false)
    }
    const removeProvince = (province) => {
        setSelectedProvinces(selectedProvinces.filter(p => p !== province));
    };
    const [showDropdown, setShowDropdown] = useState(false);
    const [allProvinces] = useState([
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]);
    return (
        <div>
            <div>
                <ZinterHeaderPartner />
            </div>
            <div className="new_jobs_container">
                <div className="new_jobs_header">
                    <button onClick={handdleGoBack}>
                        <span>New Jobs</span>
                        <img src={arrowBack} alt="" />
                    </button>
                    <span className="new_jobs_head_text">View Job Details</span>
                </div>
                <div className="user_details_new_job">
                    <div>
                        <div className="header_job_details">
                            <div>
                                <img src={displayPicture} alt="" />
                            </div>
                            <div className="header_job_details_user">
                                <h2>Anna van Dijk</h2>
                                <div>
                                    <div className="header_job_detail_new">
                                        <span><img src={dot} alt="" /></span>
                                        <span>New Request</span>
                                    </div>
                                    <span className="header_user_job_email">AnnaVanDijk@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="location_job_details">
                            <div className="">
                                <img src={movingFromIcon} alt="" />
                                <div className="location_from">
                                    <span>Moving From</span>
                                    <span>Keizersgracht 123, 1015 CJ Amsterdam</span>
                                </div>
                            </div>
                            <div>
                                <img src={movingFromIcon} alt="" />
                                <div className="location_from">
                                    <span>Moving To</span>
                                    <span>Rozengracht 55, 1016 LZ Amsterdam</span>
                                </div>
                            </div>
                        </div>
                        <div className="map_job_details">
                            <MovementMap />
                        </div>
                        <div className="more_jobs_details">
                            <div className="first_tab_job">
                                <div className="move_tab_details">
                                    <span>Move Date</span>
                                    <span> 22 March, 2025</span>
                                </div>
                                <div className="move_tab_details">
                                    <span>Day</span>
                                    <span> Tuesday</span>
                                </div>
                                <div className="move_tab_details">
                                    <span>Move Time</span>
                                    <span>10:00 AM</span>
                                </div>
                            </div>
                            <div className="second_tab_job">
                                <div className="move_tab_details">
                                    <span>Move SIze</span>
                                    <span>House - 3 Bedrooms</span>
                                </div>
                                <div className="move_tab_details">
                                    <span>Living Room</span>
                                    <span>20 Items Selected</span>
                                </div>
                                <div className="move_tab_details">
                                    <span>Bedroom 1</span>
                                    <span>12 Items Selected</span>
                                </div>
                            </div>
                            <div className="second_tab_job_sub">
                                <div className="move_tab_details">
                                    <span>Move SIze</span>
                                    <span>House - 3 Bedrooms</span>
                                </div>
                                <div className="move_tab_details">
                                    <span>Living Room</span>
                                    <span>20 Items Selected</span>
                                </div>
                                <div className="move_tab_details">
                                    <span>Bedroom 1</span>
                                    <span>12 Items Selected</span>
                                </div>
                            </div>
                            <div className="first_tab_job">
                                <div className="move_tab_details">
                                    <span>Move Date</span>
                                    <span> 22 March, 2025</span>
                                </div>
                                <div className="move_tab_details">
                                    <span>Day</span>
                                    <span> Tuesday</span>
                                </div>
                                <div className="move_tab_details">
                                    <span>Move Time</span>
                                    <span>10:00 AM</span>
                                </div>
                            </div>
                            <div className="inventory_tab_job">
                                <div className="inventory_tab_job_head">
                                    <h3>Living Room Inventory List</h3>
                                </div>
                                <div className="inventory_tab_job_body">
                                    <div className="move_tab_details">
                                        <span>Large Sofa</span>
                                        <span> <img src={sofaIcon} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Elegant Floor Lamp</span>
                                        <span> <img src={floorLampIcon} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Vintage Clock</span>
                                        <span> <img src={clockIcon} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Coffee Table</span>
                                        <span> <img src={tableIcon} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Pool Table</span>
                                        <span> <img src={poolTable} alt="" /> </span>
                                    </div>
                                </div>
                                <div className="inventory_tab_job_body">
                                    <div className="move_tab_details">
                                        <span>Radio</span>
                                        <span> <img src={radioIcon} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>TV Stand</span>
                                        <span> <img src={tvStandIcon} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Remote Control</span>
                                        <span> <img src={remoteControl} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Magazine Rack</span>
                                        <span> <img src={magazineRack} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Indoor Plants</span>
                                        <span> <img src={indoorPlant} alt="" /> </span>
                                    </div>
                                </div>
                            </div>
                            <div className="inventory_tab_job">
                                <div className="inventory_tab_job_head">
                                    <h3>Bedroom Inventory List</h3>
                                </div>
                                <div className="inventory_tab_job_body">
                                    <div className="move_tab_details">
                                        <span>King Size Bed</span>
                                        <span> <img src={kingSizeBed} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Baby Bed</span>
                                        <span> <img src={babyBedIcon} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Lamp</span>
                                        <span> <img src={floorLampIcon} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Curtains</span>
                                        <span> <img src={curtains} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Book Shelf</span>
                                        <span> <img src={bookShelf} alt="" /> </span>
                                    </div>
                                </div>
                                <div className="inventory_tab_job_body">
                                    <div className="move_tab_details">
                                        <span>Dell Monitor</span>
                                        <span> <img src={monitorIcon} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Work Chair</span>
                                        <span> <img src={chairIcon} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>FLower Vase</span>
                                        <span> <img src={indoorPlant} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Magazine Rack</span>
                                        <span> <img src={magazineRack} alt="" /> </span>
                                    </div>
                                    <div className="move_tab_details">
                                        <span>Indoor Plants</span>
                                        <span> <img src={indoorPlant} alt="" /> </span>
                                    </div>
                                </div>
                            </div>
                            {/* <table className="table_jobs">
                                <thead>
                                    <tr className="move_jobs_head">
                                        <th>Move Date</th>
                                        <th>Day</th>
                                        <th>Move Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>22 March, 2025</td>
                                        <td> Tuesday </td>
                                        <td>10:00 AM </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <thead>
                                    <tr className="">
                                        <th>Move SIze</th>
                                        <th>Living Room</th>
                                        <th>Bedroom 1</th>
                                    </tr>
                                    <tr>
                                        <th>Bedroom 2</th>
                                        <th>Dining Room</th>
                                        <th>Kitchen</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>House - 3 Bedrooms</td>
                                        <td> 20 Items Selected </td>
                                        <td>12 Items Selected</td>
                                    </tr>
                                    <tr>
                                        <td>7 items selected</td>
                                        <td> 6 Items Selected </td>
                                        <td>18 Items Selected  </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <div>Living Room Inventory List</div>
                                <thead>
                                    <tr>
                                        <th>Large Sofa</th>
                                        <th>Elegant Floor Lamp</th>
                                        <th>Vintage Clock</th>
                                        <th> Coffee Table </th>
                                        <th>Pool Table</th>
                                    </tr>
                                    <tr>
                                        <th>Radio</th>
                                        <th>TV Stand</th>
                                        <th>Remote Control</th>
                                        <th>Magazine Rack</th>
                                        <th> Indoor Plants </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> <img src="" alt="" /></td>
                                        <td> <img src="" alt="" /> </td>
                                        <td><img src="" alt="" /></td>
                                        <td><img src="" alt="" /></td>
                                        <td><img src="" alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td><img src="" alt="" /></td>
                                        <td> <img src="" alt="" /> </td>
                                        <td><img src="" alt="" />  </td>
                                        <td><img src="" alt="" />  </td>
                                        <td><img src="" alt="" />  </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <div>Bedroom Inventory List</div>
                                <thead>
                                    <tr>
                                        <th>King Size Bed</th>
                                        <th>Baby Bed</th>
                                        <th>Lamp</th>
                                        <th> Curtains </th>
                                        <th>Book Shelf</th>
                                    </tr>
                                    <tr>
                                        <th>Dell Monitor</th>
                                        <th>Work Chair</th>
                                        <th>FLower Vase</th>
                                        <th>Magazine Rack</th>
                                        <th> Indoor Plants </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> <img src="" alt="" /></td>
                                        <td> <img src="" alt="" /> </td>
                                        <td><img src="" alt="" /></td>
                                        <td><img src="" alt="" /></td>
                                        <td><img src="" alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td><img src="" alt="" /></td>
                                        <td> <img src="" alt="" /> </td>
                                        <td><img src="" alt="" />  </td>
                                        <td><img src="" alt="" />  </td>
                                        <td><img src="" alt="" />  </td>
                                    </tr>
                                </tbody>
                            </table> */}
                        </div>
                    </div>
                </div>
                <div className="footer_view_jobs">
                    <button>REJECT</button>
                    <button onClick={handleSuccess}>PROVIDE QUOTE</button>
                </div>
            </div>
            {showProvideQuote &&
                <div className="provide_quote_container">
                    <div className="provide_quote_body">
                        <div className="header_quote">
                            <img src={closeIcon} alt="" />
                            <span>Provide Quote</span>
                        </div>
                        <div className="body_quote_container">


                            <div className="body_quote">
                                <div className="body_quote_first">
                                    <div>
                                        <img src={displayPicture} alt="" />
                                    </div>
                                    <div className="body_quote_details">
                                        <h2>Anna van Dijk</h2>
                                        <div className="body_quote_details_sub">
                                            <span className="">AnnaVanDijk@gmail.com</span>
                                            <span>+123 456 7892</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="body_quote_location_items">
                                    <div className="body_quote_location">
                                        <div className="body_quote_start">
                                            <img src={locationIcon} alt="" />
                                            <span>Keizersgracht 123, 1015 CJ Amsterdam</span>
                                        </div>
                                        <div className="body_quote_start">
                                            <img src={destinationIcon} alt="" />
                                            <span>Rozengracht 55, 1016 LZ Amsterdam</span>
                                        </div>
                                    </div>
                                    <div className="body_quote_items">
                                        <span>22 miles away</span>
                                        <span>2 Bedroom Apartment</span>
                                        <span>Pickup & delivery included</span>
                                    </div>
                                </div>
                            </div>
                            <div className="body_quote_sub">
                                <div className="input_multiple" onClick={() => setShowDropdown(!showDropdown)}>
                                    <span>Availability</span>

                                    <div className="tag_input_wrapper_view">
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

                                    <img className="img_view" src={dropdown} alt="" onFocus={() => setShowDropdown(true)} />

                                    {showDropdown && (
                                        <div className="dropdown_list_view">
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
                                <div className="body_quote_sub_amount">
                                    <span>How much do you want to charge</span>
                                    <input type="number" name="" id="" placeholder="Enter a competitive quote" />
                                </div>
                                <div className="body_quote_sub_text">
                                    <span>Additional Comment</span>
                                    <RichTextEditor />
                                </div>
                            </div>
                        </div>
                        <div className="body_quote_footer">
                            <button> GO BACK</button>
                            <button onClick={handleClose}> CONTINUE</button>
                        </div>
                    </div>
                </div>
            }

            {showSuccessQuote &&
                <div className="provide_quote_container">
                    <div className="provide_quote_body">
                        <div className="header_quote">
                            <img src={closeIcon} alt="" />
                            {/* <span>Provide Quote</span> */}
                        </div>
                        <div className="body_quote_container">

                            <div className="success_quote">
                                <img src={sucessIcon} alt="" />
                                <h1>Quote successfully provided</h1>
                                <span>A notification will be sent to the customer’s email to make payment</span>
                            </div>
                            <div className="body_quote">
                                <div className="body_quote_first">
                                    <div>
                                        <img src={displayPicture} alt="" />
                                    </div>
                                    <div className="body_quote_details">
                                        <h2>Anna van Dijk</h2>
                                        <div className="body_quote_details_sub">
                                            <span className="">AnnaVanDijk@gmail.com</span>
                                            <span>+123 456 7892</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="body_quote_location_items">
                                    <div className="body_quote_location">
                                        <div className="body_quote_start">
                                            <img src={locationIcon} alt="" />
                                            <span>Keizersgracht 123, 1015 CJ Amsterdam</span>
                                        </div>
                                        <div className="body_quote_start">
                                            <img src={destinationIcon} alt="" />
                                            <span>Rozengracht 55, 1016 LZ Amsterdam</span>
                                        </div>
                                    </div>
                                    <div className="body_quote_items">
                                        <span>Quote</span>
                                        <span>$456</span>
                                        <span>Pickup & delivery included</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="body_quote_footer_success">
                            {/* <button> GO BACK</button> */}
                            <button onClick={handleAllClose}> CONTINUE</button>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default ViewNewJobs