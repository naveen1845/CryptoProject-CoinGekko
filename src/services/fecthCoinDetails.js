import axiosInstance from "../helpers/axiosInstace";

export async function FetchCoinDetails(id){
    try {
        const result = await axiosInstance.get(`/coins/${id}`)
        return result.data;
    } catch (error) {
        console.log(error);
        
    }
}