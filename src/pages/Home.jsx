import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl">Overview of Vietnam stock market</h1>
      <p className="text-1xl">Welcome to the best scam investment website ever</p>
      <form className="flex">
        <input 
          type="text" 
          placeholder="Search your stock" 
          className="border border-gray"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      <div className="crypto-table">
        <div className="grid grid-cols-5 text-center border-b border-gray-300 py-2">
          <p>#</p>
          <p>Stock</p>
          <p>Price</p>
          <p>24hChange</p>
          <p>Market</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
