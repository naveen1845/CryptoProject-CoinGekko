import { useEffect, useState} from "react";
import { FetchCoinData } from "../../services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";
import CurrencyStore from "../../Store/CurrencyStore";
import { useNavigate } from "react-router-dom";
import MyBulletListLoader from "../Loaders/BulletListLoader";

function CoinTable(){

    const [page , setPage] = useState(1);
    const {currency} = CurrencyStore();
    const navigate = useNavigate();

    function handleCoinDetailsRedirect(id) {
        navigate(`/details/${id}`)
    }

    const { data, isLoading , error, isError} = useQuery({
        queryKey: ['coins', page, currency], // Use 'queryKey' instead of positional argument
        queryFn: () => FetchCoinData(page, currency), // Use 'queryFn' instead of positional argument
        cacheTime: 1000 * 2 * 60, // Still part of the options
        staleTime: 1000 * 2 * 60, // Still part of the options
    });

    // if (isLoading) {
    //     return <div>Loading....</div>
    // }

    if (isError) {
        console.log(error);
        
    }

    if(data){
        console.log(data);
        
    }

    return(
        <div>
            
            <div className="flex flex-col items-center justify-center w-[80vw] my-5 mx-auto">
                <div className="flex items-center justify-center bg-yellow-400 w-full gap-3 py-5 px-5 font-semibold text-2xl text-black text-center ">
                    <div className="basis-[35%]">
                        Coin
                    </div>
                    <div className="basis-[20%]">
                        Price <span className="uppercase">({currency})</span>
                    </div>
                    <div className="basis-[20%]">
                        Low 24h
                    </div>
                    <div className="basis-[20%]">
                        High 24h
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-[80vw] my-5 mx-auto">
                    {isLoading && <MyBulletListLoader/>}
                    {data && data.map(coin => {
                        return(
                            <div key={coin.id} onClick={() => handleCoinDetailsRedirect(coin.id)} className="flex items-center justify-center w-full gap-3 py-5 px-5 cursor-pointer">
                                <div className="flex gap-5 basis-[35%]">
                                    <div className="w-[5rem] h-[5rem]">
                                        <img src={coin.image} alt="" className="w-full h-full"/>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-3xl font-bold">{coin.name}</div>
                                        <div>{coin.symbol}</div>
                                    </div>
                                </div>

                                <div className="text-2xl text-center basis-[20%]">
                                    {coin.current_price}
                                </div>
                                <div className="text-2xl text-center basis-[20%]">
                                    {coin.low_24h}
                                </div>
                                 <div className="text-2xl text-center basis-[20%]">
                                    {coin.high_24h}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex items-center justify-center gap-5  w-[80vw] my-5 mx-auto">
                <button
                disabled = {page === 1}
                onClick={() => {
                    setPage(page - 1)
                }} 
                className="py-5 px-20 bg-blue-700 text-white">
                    Prev
                </button>
                <button onClick={() => {
                    setPage(page + 1)
                }} 
                className="py-5 px-20 bg-green-700 text-white">
                    Next
                </button>
            </div>
        </div>

    )
}

export default CoinTable;