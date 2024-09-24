import { useNavigate } from "react-router-dom";
import React from 'react'

function SearchItem({coinData}) {
    
    const navigate = useNavigate()

    function handleCoinDetailsRedirect(id){
        navigate(`/details/${id}`)
    }

    return (
        <li className="w-full hover:bg-black rounded-lg">
            <a href={`/details/${coinData.id}`} className="flex justify-between items-center h-12 cursor-pointer p-5 ">
                <img className="h-8" src={coinData.thumb}  alt={coinData.name}/>
                <p className="font-semibold">{coinData.name} - <span className="font-thin">{coinData.symbol}</span></p>
                <p>Rank <span className="text-yellow-500">{coinData.market_cap_rank}</span></p>
            </a>
        </li>
    )
}


export default SearchItem;