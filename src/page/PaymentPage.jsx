import React, { useEffect, useState } from "react";
import "./paymentPage.css"
import SideBar from "../components/SideBar";
import searchIcon from "../Assets/search-01.svg"
import filterIcon from "../Assets/filter-horizontal.svg"
import refreshIcon from "../Assets/refresh (1).svg"
import arrowDown from "../Assets/arrow-down-02.svg"
import viewMore from "../Assets/Eye.svg"
import dot from "../Assets/Dot.svg"
import { getEarnings } from "../api/agentApi";
import Loader from "../components/loader";

const Payment = () => {
    // const provincesData = [
    //     { name: 'Drenthe', amount: '$12,000' },
    //     { name: 'Flevoland', amount: '$78,000' },
    //     { name: 'Friesland', amount: '$33,000' },
    //     { name: 'Gelderland', amount: '$78,000' },
    //     { name: 'Gelderland', amount: '$78,000' },
    // ];
    const moveData = [
        {
            amount: '$100',
            name: 'Anna van Dijk',
            house: '3 Bedroom House',
            route: 'Amsterdam (Damrack - Hilversum)',
            date: '29/03/2025, 10:18AM',
        },
        {
            amount: '$250',
            name: 'Bram Jansen',
            house: '2 Bedroom Apartment',
            route: 'Rotterdam (Blaak - Delft)',
            date: '30/03/2025, 11:30AM',
        },
        {
            amount: '$180',
            name: 'Clara de Groot',
            house: '4 Bedroom Villa',
            route: 'Utrecht (Centrum - Zeist)',
            date: '01/04/2025, 09:45AM',
        },
        {
            amount: '$120',
            name: 'Daan Visser',
            house: 'Studio Apartment',
            route: 'Eindhoven (Strijp - Veldhoven)',
            date: '02/04/2025, 02:20PM',
        },
        {
            amount: '$300',
            name: 'Eva Smit',
            house: '5 Bedroom Mansion',
            route: 'The Hague (Centrum - Scheveningen)',
            date: '03/04/2025, 04:10PM',
        },
        {
            amount: '$90',
            name: 'Finn Bakker',
            house: '1 Bedroom Loft',
            route: 'Maastricht (Binnenstad - Heer)',
            date: '04/04/2025, 08:00AM',
        },
        {
            amount: '$220',
            name: 'Gwen Meijer',
            house: '3 Bedroom Townhouse',
            route: 'Groningen (Centrum - Haren)',
            date: '05/04/2025, 06:45PM',
        },
    ];


    const [moveDatas, setMoveDatas] = useState([])
    const [provincesData, setProvinceData] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMoves = moveDatas.filter(
        (move) =>
            move.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            move.moveCode.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatWithComma = (number) => {
        if (!number && number !== 0) return ""; // handle null/undefined
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };


    const handlePayment = async () => {
        try {
            setLoading(true)
            const response = await getEarnings()

            if (response.responseStatus) {
                // debugger

                // total + province cards
                // setProvinceData(firstItem)

                // // table data
                // setMoveDatas(firstItem.jobSummaries.items)

                setProvinceData(response.result)
                setMoveDatas(response.result.jobSummaries?.items ?? [])
            }

            setLoading(false)
        } catch (e) {
            setLoading(false)
        }
    }

    useEffect(() => {
        handlePayment()
    }, [])

    // return (
    //     <div>
    //         <div>
    //             <SideBar />
    //         </div>
    //         <div className="container_payment">
    //             <div className="container_payment_header">
    //                 <div className="container_total_revenue">

    //                     <span>Total Revenue</span>
    //                     <span> ${provincesData.overallEarnings} </span>
    //                 </div>

    //                 <div className="container_earnings_province">
    //                     <div>Earnings by Province</div>
    //                     <div className="container_provinces">
    //                         {provincesData?.provinceSummaries?.map((province, index) => (
    //                             <div className="provinces" key={index}>
    //                                 <span>{province.province}</span>
    //                                 <span>{province.earnings}</span>
    //                                 {!province.isCovered && (
    //                                     <span>Not covering here</span>
    //                                 )}
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="table_container_payment">
    //                 <div className="table_header">
    //                     <div className="left_table_head">
    //                         <h1>Earning History</h1>
    //                     </div>
    //                     <div className="right_table_head">
    //                         <div className="search_icon">
    //                             <input type="text" placeholder="Search"
    //                                 value={searchTerm}
    //                                 onChange={(e) => setSearchTerm(e.target.value)} />

    //                             <img src={searchIcon} alt="" />
    //                         </div>
    //                         <div className="filter_con">
    //                             <img src={filterIcon} alt="" />
    //                             <span>Filter</span>
    //                         </div>
    //                         <div className="refresh">
    //                             <img src={refreshIcon} alt="" />
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="table_section">
    //                     <table>
    //                         <thead>
    //                             <tr>
    //                                 <th>
    //                                     <div>
    //                                         <span>Amount</span>
    //                                         <img src={arrowDown} alt="" />
    //                                     </div>
    //                                 </th>
    //                                 <th>
    //                                     <div>
    //                                         <span>Move Summary</span>
    //                                         <img src={arrowDown} alt="" />
    //                                     </div>
    //                                 </th>
    //                                 <th>
    //                                     <div>
    //                                         <span>Status</span>
    //                                         <img src={arrowDown} alt="" />
    //                                     </div>
    //                                 </th>
    //                                 <th>
    //                                     <div>
    //                                         <span>Date & Time</span>
    //                                         <img src={arrowDown} alt="" />
    //                                     </div>
    //                                 </th>
    //                                 <th></th>
    //                             </tr>
    //                         </thead>
    //                         {/* <tbody>
    //                             {moveDatas.map((move, index) => (
    //                                 <tr key={index}>
    //                                     <td className="td_payment_table">
    //                                         <div className="move_summary td">
    //                                             <span>{move.moveCode}</span>
    //                                             <span>{move.fullName}</span>
    //                                         </div>
    //                                     </td>

    //                                     <td className="td_payment_table">
    //                                         <div className="move_summary td">
    //                                             <span>{move.numberOfRooms} rooms</span>
    //                                             <span>{move.address}</span>
    //                                         </div>
    //                                     </td>

    //                                     <td className="td_payment_table">
    //                                         <div className="status td">
    //                                             <span>
    //                                                 <img src={dot} alt="" />
    //                                             </span>
    //                                             <span>{move.status}</span>
    //                                         </div>
    //                                     </td>

    //                                     <td className="date_time td_payment_table">
    //                                         <span>{move.province}</span>
    //                                     </td>

    //                                     <td className="view td_payment_table">
    //                                         <img src={viewMore} alt="view more" />
    //                                     </td>
    //                                 </tr>
    //                             ))}
    //                         </tbody> */}
    //                         <tbody>
    //                             {moveDatas.length > 0 ? (
    //                                 moveDatas.map((move, index) => (
    //                                     <tr key={index}>
    //                                         <td className="td_payment_table">
    //                                             <div className="move_summary td">
    //                                                 <span>{move.moveCode}</span>
    //                                                 <span>{move.fullName}</span>
    //                                             </div>
    //                                         </td>

    //                                         <td className="td_payment_table">
    //                                             <div className="move_summary td">
    //                                                 <span>{move.numberOfRooms} rooms</span>
    //                                                 <span>{move.address}</span>
    //                                             </div>
    //                                         </td>

    //                                         <td className="td_payment_table">
    //                                             <div className="status td">
    //                                                 <span>
    //                                                     <img src={dot} alt="" />
    //                                                 </span>
    //                                                 <span>{move.status}</span>
    //                                             </div>
    //                                         </td>

    //                                         <td className="date_time td_payment_table">
    //                                             <span>{move.province}</span>
    //                                         </td>

    //                                         <td className="view td_payment_table">
    //                                             <img src={viewMore} alt="view more" />
    //                                         </td>
    //                                     </tr>
    //                                 ))
    //                             ) : (
    //                                 <tr>
    //                                     <td colSpan={5} style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
    //                                         No data available
    //                                     </td>
    //                                 </tr>
    //                             )}
    //                         </tbody>
    //                     </table>
    //                 </div>
    //             </div>
    //         </div>
    //         {loading && <Loader />}
    //     </div>
    // )
    return (
        <div>
            <SideBar />
            <div className="container_payment">
                <div className="container_payment_header">
                    <div className="container_total_revenue">
                        <span>Total Revenue</span>
                        <span>${provincesData.overallEarnings}</span>
                    </div>

                    <div className="container_earnings_province">
                        <div>Earnings by Province</div>
                        <div className="container_provinces">
                            {provincesData?.provinceSummaries?.map((province, index) => (
                                <div className="provinces" key={index}>
                                    <span>{province.province} ({province.isCovered ? "Coverage available" : "Coverage unavailable"})</span>
                                    <span>${formatWithComma(province.earnings)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="table_container_payment">
                    <div className="table_header">
                        <div className="left_table_head">
                            <h1>Earning History</h1>
                        </div>
                        <div className="right_table_head">
                            <div className="search_icon">
                                <input
                                    type="text"
                                    placeholder="Search by Name or Move Code"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <img src={searchIcon} alt="search" />
                            </div>
                            <div className="filter_con">
                                <img src={filterIcon} alt="" />
                                <span>Filter</span>
                            </div>
                            <div className="refresh">
                                <img src={refreshIcon} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="table_section">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <div>
                                            <span>Amount</span>
                                            <img src={arrowDown} alt="" />
                                        </div>
                                    </th>
                                    <th>
                                        <div>
                                            <span>Move Summary</span>
                                            <img src={arrowDown} alt="" />
                                        </div>
                                    </th>
                                    <th>
                                        <div>
                                            <span>Status</span>
                                            <img src={arrowDown} alt="" />
                                        </div>
                                    </th>
                                    <th>
                                        <div>
                                            <span>Date & Time</span>
                                            <img src={arrowDown} alt="" />
                                        </div>
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredMoves.length > 0 ? (
                                    filteredMoves.map((move, index) => (
                                        <tr key={index}>
                                            <td className="td_payment_table">
                                                <div className="move_summary td">
                                                    <span>{move.moveCode}</span>
                                                    <span>{move.fullName}</span>
                                                </div>
                                            </td>

                                            <td className="td_payment_table">
                                                <div className="move_summary td">
                                                    <span>{move.numberOfRooms} rooms</span>
                                                    <span>{move.address}</span>
                                                </div>
                                            </td>

                                            <td className="td_payment_table">
                                                <div className="status td">
                                                    <span>
                                                        <img src={dot} alt="" />
                                                    </span>
                                                    <span>{move.status}</span>
                                                </div>
                                            </td>

                                            <td className="date_time td_payment_table">
                                                <span>{move.province}</span>
                                            </td>

                                            <td className="view td_payment_table">
                                                <img src={viewMore} alt="view more" />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} style={{ textAlign: "center", padding: "20px", color: "#888" }}>
                                            No data found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {loading && <Loader />}
        </div>
    );

}


export default Payment