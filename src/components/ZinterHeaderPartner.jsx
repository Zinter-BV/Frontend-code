import React, { useEffect, useState, useRef } from "react";
import "./zinterHeadPartner.css"
import zinterHead from "../Assets/new-logo-zinter.svg"
import infoIcon from "../Assets/Info-icon.svg"
import { useLocation, useNavigate } from "react-router-dom";

const ZinterHeaderPartner = () => {
    const navigate = useNavigate()

    const logoutTimer = useRef(null);

    const INACTIVITY_LIMIT = 10 * 60 * 1000; // 5 minutes, adjust as needed

    // Function to log out user
    const logoutDueToInactivity = () => {
        sessionStorage.clear();
        
        navigate("/vendor-login", {
            state: { inactivity: true }
        });
    };

    // Reset timer on user activity
    const resetTimer = () => {
        if (logoutTimer.current) clearTimeout(logoutTimer.current);
        logoutTimer.current = setTimeout(logoutDueToInactivity, INACTIVITY_LIMIT);
    };

    useEffect(() => {
        // Start the inactivity timer when component mounts
        resetTimer();

        // Listen to user activity events
        const events = ["keydown", "click"];
        events.forEach((event) => window.addEventListener(event, resetTimer));

        // Cleanup
        return () => {
            if (logoutTimer.current) clearTimeout(logoutTimer.current);
            events.forEach((event) => window.removeEventListener(event, resetTimer));
        };
    }, []);

    return (
        <div className="zinter_head">
            <div>
                <img src={zinterHead} alt="" />
            </div>
            <div className="more_assist">
                <span> <img src={infoIcon} alt="" /></span>
                <span>Need more assistance ?</span>
            </div>
        </div>
    )
}

export default ZinterHeaderPartner