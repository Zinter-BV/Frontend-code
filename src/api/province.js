import api from "./baseUrl";

export const getAllJobs =  async (PageNumber, NumberOfRecords) => {
   const response = await api.get(`Province/GetRequestHistory?PageNumber=${PageNumber}&NumberOfRecords=${NumberOfRecords}`)
   return response.data
}


