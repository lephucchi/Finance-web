import React from "react";
import { createContext ,useState ,useEffect} from "react";
import axios from "axios";

export const CoinContext = createContext();

const CoinContextProvider = (props)=>{
    
    const [allCoin , setAllCoin] = useState([]);
    const [currency , setCurrency] = useState({
        name: "USD",
        sumbol: "$",

    })

    const fetchAllCoin = async ()=>{     
        const options = {
            method: 'GET',
            url: 'https://api.coingecko.com/api/v3/coins/markets',
            params: {vs_currency: currency.name},
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-zhj2SacmhjLvTA2SAnkzXmnh'}
        };
        
        axios
            .request(options)
            .then(res => setAllCoin(res.data))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchAllCoin();
    },[currency])

    const contextValue={
        allCoin, currency , setCurrency
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;