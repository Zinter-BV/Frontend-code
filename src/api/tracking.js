import api from './baseUrl'

// export const logArrival = async (code) => {
//     const response = await api.get(`Tracking/LogArrival?bookingCode=${code}`)
//     return response.data
// }

// import api from "./api";
import axios from "axios";

export const logArrival = async (code) => {
    try {
        const response = await api.get(`Tracking/LogArrival?bookingCode=${code}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 401) {
                throw new Error("You don't have access to this page");
            }

            throw new Error(
                error.response?.data?.message || "Something went wrong"
            );
        }

        throw new Error("Network error");
    }
};

export const startMove = async (code) => {
    const response = await api.get(`Tracking/BeginMove?authCode=${code}`)
    return response.data
}

export const endMove = async (code) => {
    const response = await api.get(`Tracking/EndMove?authCode=${code}`)
    return response.data
}

export const createPayment = async (ref) => {
    const response = await api.get(`MoveRequest/CreatePaymentIntent?amount=${ref}`)
    return response.data
}