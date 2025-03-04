import React, { useEffect, useState , useContext } from "react";
import { CoinContext } from "../context/CoinContext";

const Home = () => {

  const {allCoin , currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input , setInput] = useState('');

  const inputHandler = (event)=>{
    setInput(event.target.value);
    if(event.target.value ===""){
      setDisplayCoin(allCoin);
    }
  }
  const searchHandler = async (event)=>{
    event.preventDefault();
    const coins = await allCoin.filter((item)=>{
      return item.name.toLowerCase().includes(input.toLowerCase())
    });
    setDisplayCoin(coins);
  }

  useEffect(()=>{
    setDisplayCoin(allCoin);
  } , [allCoin])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">Overview of Vietnam Stock Market</h1>
      <p className="text-1xl">
        Welcome to the best scam investment website ever
      </p>
      <form className="flex" onSubmit={searchHandler}>
        <input
          onChange={inputHandler}
          value = {input}
          type="text"
          placeholder="Search your stock"
          className="flex-grow border"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>
      <div className="w-full max-w-4xl overflow-hidden">
        <div className="grid grid-cols-5 text-center text-2xl">
          <p>#</p>
          <p>Stock</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center text-center py-3 border-b hover:bg-gray-100 transition"
          >
            <p>{item.market_cap_rank}</p>
            <div className="flex items-center gap-2 justify-center">
              <img
                className="h-8 w-8 rounded-full"
                src={item.image}
                alt={item.name}
              />
              <p className="font-medium">{item.name.toUpperCase()} ({item.symbol.toUpperCase()})</p>
            </div>

            <p className="font-semibold">{currency.symbol} {item.current_price.toLocaleString()}</p>
            <p className={item.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}>
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p>{item.market_cap.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
