import api from "./baseUrl";

export const moveDetails =  async (code) => {
   const response = await api.get(`MoveRequest/GetMoveDetails?code=${code}`)
   return response.data
}
