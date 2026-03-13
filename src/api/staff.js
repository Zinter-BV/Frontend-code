import api from "./baseUrl"

export const registerStaff = async ({name, phoneNumber, email, role}) => {
    const response = await api.post(`Staff/Register`, {
        name, phoneNumber, email, role
    })
    return response.data
}

export const addRole = async (request) => {
    const response = await api.post(`Staff/Add?request=${request}`)
    return response.data
}

export const getAllStaff = async () => {
    const response = await api.get(`Staff/GetAll`)
    return response.data
}

export const getAllRole = async () => {
    const response = await api.get(`Staff/Get`)
    return response.data
}