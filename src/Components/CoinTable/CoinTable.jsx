
import { FetchCoinData } from "../../services/FetchCoinData";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import CurrencyStore from "../../Store/CurrencyStore";
import { useNavigate } from "react-router-dom";
import MyBulletListLoader from "../Loaders/BulletListLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import Alert from "../Alert/Alert";
import { useState } from "react";

function CoinTable(){

    
    const {currency} = CurrencyStore();
    const navigate = useNavigate();
    const [searchItems, setSearchItems] = useState('');


    function handleCoinDetailsRedirect(id) {
        navigate(`/details/${id}`)
    }

    const{data, 
        fetchNextPage, 
        hasNextPage, 
        isFetchingNextPage,
        isLoading, 
        isError, 
        error, } = useInfiniteQuery({
        queryKey : ['coins' , currency],
        queryFn : ({ pageParam = 1 }) => FetchCoinData(pageParam, currency),
        getNextPageParam : (lastPage , allPages) => !lastPage || lastPage.length == 0 ? undefined : allPages.length + 1,
        cacheTime : 1000 * 60 * 2,
        staleTime : 1000 * 60 * 2,
    })

    
    const filteredItems = data?.pages.flat().filter((item) => {
        let coinId = `${item.id}`
        if(coinId.toLowerCase().includes(searchItems.toLowerCase())){
            return item;
        }
    })


    if (isError) {
        return <Alert message={"Error Fetching Table Details" } type={"error"}/>;
        
    }

    

    return(
        
            
            <div className="flex flex-col items-center justify-center w-[80vw] my-5 mx-auto">
                
            <input 
                type="text"
                value={searchItems}
                placeholder="Search Coins here..."
                onChange={(event) => {
                    console.log(event.target.value);
                    setSearchItems(event.target.value);
                }}
                className="mb-5 p-3 border border-gray-300 rounded" 
            />

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

                <InfiniteScroll
                    dataLength={data ? data.pages.flat().length : 0} 
                    next={fetchNextPage}
                    hasMore={hasNextPage}
                    endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                    }
                >
                <div className="flex flex-col items-center justify-center w-[80vw] my-5 mx-auto">
                    {filteredItems && filteredItems.length > 0 ? (filteredItems.map((coin) => {
                        return (
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
                    })) : (<div>No Coin Found</div>) }
                    
                    {isLoading && <MyBulletListLoader/>}
        
                </div>
                </InfiniteScroll>
            </div>

    )
}

export default CoinTable;