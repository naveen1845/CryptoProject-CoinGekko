import { useFetchCoinSearchData } from "../../Hooks/useFetchCoinSearchData";
import SearchItem from "./SearchItem";

function SearchBox() {
    const {data ,isError, error , isLoading, searchText, setSearchText, debounceValue} = useFetchCoinSearchData()
    

    return (
        <div className="parent">
            <div className="dropdown dropdown-end">
                <input 
                    tabIndex={0}
                    type="text"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="Search"
                    className="input input-bordered w-24 md:w-auto"
                />

                {debounceValue && <ul
                    tabIndex={0} 
                    className="dropdown-content flex flex-col justify-center items-center bg-base-200 mt-3 rounded-box z-[1] w-72 md:w-96 left-[-160px] p-2 shadow"
                >
                    {isLoading && <span className="loading loading-dots loading-lg"></span>}
                    {(data && data.length == 0) && <li>No Coin Found</li>}
                    {isError && <span>Error Fetching Data</span>}
                    {data && data?.map(item => <div className='mb-2 w-full' key={item.id}><SearchItem setSearchText={setSearchText}  coinData={item}/></div>)}
                </ul>}
            </div>
        </div>
    )
}

export default SearchBox