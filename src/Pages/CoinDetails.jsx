import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FetchCoinDetails } from "../services/fecthCoinDetails";
import parse from 'html-react-parser';
import CurrencyStore from "../Store/CurrencyStore";
import MyCustomLoader from "../Components/Loaders/MyCustomLoader";
import CoinLineChartContainer from "../Components/CoinLineChart/CoinLineChartContainer";
import Alert from "../Components/Alert/Alert";

function CoinDetails() {

    const { coinId } = useParams()
    const { currency } = CurrencyStore()

    const {data: coin , isLoading , isError} = useQuery({
        queryKey: ['coin', coinId],
        queryFn: () => FetchCoinDetails(coinId),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2
    })

    if(isLoading){
        return <MyCustomLoader/>
    }

    if(isError){
        return <Alert message={"error Fecthing Coin details"} type={"error"} />
    }

    return(
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-1/3 md:border-slate-400 md:border-r-2">
                <div className="flex flex-row gap-5 items-center justify-center my-5 px-10">
                    <div>
                        <img 
                        src={coin?.image?.large} 
                        />
                    </div>
                    <div>
                        <h1 
                        className="text-5xl font-bold">
                            {coin.name}
                        </h1>
                        <p 
                        className="text-2xl">
                            {coin.symbol}
                        </p>
                    </div>
                </div>

                <div>
                    <p 
                    className="py-2 px-5 text-justify">
                        {parse(coin?.description?.en)}
                    </p>
                </div>

                <div className="flex flex-col justify-around py-2 px-5">
                    <div className="flex flex-row gap-2">
                        <h1 className="text-2xl font-bold text-yellow-500">Rank:</h1>
                        <p className="text-2xl font-bold">{coin.market_cap_rank}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <h1 className="text-2xl font-bold text-green-500">Current Price:</h1>
                        <p className="text-2xl font-bold">{coin?.market_data?.current_price?.[currency]}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full md:2/3">
                <CoinLineChartContainer coinId={coinId}/>
            </div>
        </div>
    )
}

export default CoinDetails;