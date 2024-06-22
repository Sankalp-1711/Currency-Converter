//hum custom hooks m bhi preassigned hooks ka use kr skte h
import {useEffect, useState} from "react"
function useCurrencyInfo(currency)
{
    const [data, setData] = useState({})
useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))   
    console.log(data);   // yha respnse hume json format m mil chuka 
}, [currency])
console.log(data)
return data
 }
export default useCurrencyInfo;
// pehla humesha callback function hota hai useEffect m
// Hm end m pura method hi return krre h taaki koi bhi data ka access le paaye