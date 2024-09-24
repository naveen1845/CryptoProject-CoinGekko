import axiosInstance from "../helpers/axiosInstace";

export async function FetchAllCoinData(){
    try {
        const result = await axiosInstance.get(`/coins/markets?vs_currency=inr`)
        return result.data;
        
    } catch (error) {
        console.error(error);
        return null;
    }
}