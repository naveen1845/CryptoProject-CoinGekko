import axiosInstance from "../helpers/axiosInstace";

export async function FetchCoinData(page = 1 , currency){
    const perPage = 5;
    try {
        const result = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}`)
        return result.data;
        
    } catch (error) {
        console.error(error);
        return null;
    }
}