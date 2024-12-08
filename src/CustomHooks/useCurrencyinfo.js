import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5050/api/currency-exchange-rate`)
        .then((res) => res.json())
        .then((res) => setData(res))
    }, [currency])
    console.log("here is data:",data);
    return data
}

export default useCurrencyInfo;