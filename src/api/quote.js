import api from "./baseUrl"
const token = sessionStorage.getItem('token')

export const createQuote = async ({ moveId, amount, proposedTime, additonalInformation }) => {
    const response = await api.post(`Quote/CreateQuote`, {
        moveId, amount, proposedTime, additonalInformation
    })
    return response.data
}
