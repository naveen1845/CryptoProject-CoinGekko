import axios from "axios";
import COINGEKKO_API_URL from "./constants"

const axiosInstance = axios.create({
    baseURL :  COINGEKKO_API_URL,
})

export default axiosInstance