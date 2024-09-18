import { useQuery } from "@tanstack/react-query";
import fetchCoinHistoricData from "../../services/fecthCoinHistoricData";
import CurrencyStore from "../../Store/CurrencyStore";
import { useState } from "react";
import CoinLineChart from "./CoinLineChart";
import Alert from "../Alert/Alert";

function CoinLineChartContainer({ coinId }){
    const {currency} = CurrencyStore()
    const [days, setDays] = useState('1')
    const [interval, setCharInterval] = useState('')

    const {data: historicData, isLoading, isError} = useQuery({
        queryKey: ["coinChartData", coinId, days, interval ,currency, interval],
        queryFn: () => fetchCoinHistoricData(coinId, currency, days, interval),
        cacheTime: 1000 * 2 * 60,
        staleTime: 1000 * 2 * 60
    })

    if (isLoading) {
        return <div>Loading Chart...</div>
    }

    if(historicData) {
        console.log(historicData);
        
    }

    if (isError) {
        return <Alert message={"error fecthing Char details"} type={"error"} />
        
    }

    return (
        <CoinLineChart 
            historicData={historicData}
            currency={currency}
            days={days}
            setChartInterval={setCharInterval}
            setDays={setDays}
        />
    )
}

export default CoinLineChartContainer;