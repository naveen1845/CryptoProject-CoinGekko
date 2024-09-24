import { useEffect, useState } from "react";

export function useDebounce(text , delay){
    const [debounceValue, setDebounceValue] = useState(text);
    useEffect(() => {
        let timer = setTimeout(() => {
            setDebounceValue(text);
        }, delay);

        return () => clearTimeout(timer);

    }, [text, delay])

    return debounceValue;
}