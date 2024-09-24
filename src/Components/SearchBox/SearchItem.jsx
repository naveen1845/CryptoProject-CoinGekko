import { useNavigate } from "react-router-dom";
import React from 'react'

function SearchItem({coinData}) {
    
    const navigate = useNavigate();

    console.log(coinData.id);
    

    function handleCoinDetailsRedirect(id) {
        console.log('Navigating to:', `/details/${id}`);
        navigate(`/details/${id}`);
    }

    return (
        <li className=' w-full hover:bg-black cursor-pointer rounded-lg' onClick={() => handleCoinDetailsRedirect(coinData.id)}>
        <a className='flex justify-between items-center h-12 cursor-pointer p-5'>
            <img src={coinData.thumb} className='h-8' alt={coinData.name} />
            <p className='font-semibold'>{coinData.name} - <span className='font-thin'>{coinData.symbol}</span></p>
            <p className='text-yellow-500'>👑{coinData.market_cap_rank}</p>
        </a>
    </li>
    )
}


export default SearchItem;