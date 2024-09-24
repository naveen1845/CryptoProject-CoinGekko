import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fecthCoinSearchData } from "../services/fetchCoinSearchData";
import { useDebounce } from "./useDebounce";
import { data } from "autoprefixer";

export function useFetchCoinSearchData(){

    const [searchText, setSearchText] = useState('');
    let debounceValue = useDebounce(searchText, 2000);

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["searchCoin", debounceValue],
        queryFn: () => fecthCoinSearchData(debounceValue),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2
    })

    return(
        {
            data,
            isLoading,
            isError,
            searchText,
            setSearchText,
            debounceValue
        }

    )
}