import { Result } from "postcss";
import axiosInstance from "../helpers/axiosInstace";

export async function fecthCoinSearchData(searchText){
    try {
        if (searchText == '') {
            return [];
        }
        const result = await axiosInstance.get(`/search?query=${searchText}`)
        const data = result.data.coins;   
        const coinData = data.length > 8 ? data.slice(0,8) : data;
        console.log(coinData);
        return coinData



    } catch (error) {
        console.log(error.message);
        return [];
    }
}