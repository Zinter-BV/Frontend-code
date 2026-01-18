import React, { useEffect, useState } from "react";
import { getAllRole } from "../api/staff";
import Loader from "./loader";

const Roles = ({ onRolesCountChange }) => {
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true)

    const handleAllRole = async () => {
        try {
            setLoading(true)
            const response = await getAllRole()
             setLoading(false)
            if (response.responseStatus) {
                setRoles(response.result)
                onRolesCountChange(response.result.length)
            } else {
                return
            }

           
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        handleAllRole()
    }, [])

    return (
        <div className="roles_details_container">
            {roles.map((role, index) => (
                <div className="roles_details" key={role.id}>
                    <span className="role_number">{index + 1}</span>
                    <span className="role_name">{role.roleName}</span>
                </div>
            ))}
            {loading && <Loader />}
        </div>

    )
}

export default Roles