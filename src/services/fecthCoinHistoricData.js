import axiosInstance from "../helpers/axiosInstace";

async function fetchCoinHistoricData(coinId , currency , days , interval ){
    try {
        const result = await axiosInstance.get(`/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`)
        return result.data
    } catch (error) {
        console.log(error);
        
    }
}

export default fetchCoinHistoricData;