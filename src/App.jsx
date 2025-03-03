import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StockData() {
  const [data, setData] = useState([]);
  const [symbol, setSymbol] = useState('IBM'); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleSymbolChange = (e) => {
    setSymbol(e.target.value.toUpperCase());
  };


  return (
    <div>
      <input
        type="text"
        value={symbol}
        onChange={handleSymbolChange}
        placeholder="Nhập mã cổ phiếu"
      />
      <table>
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>Mở</th>
            <th>Cao nhất</th>
            <th>Thấp nhất</th>
            <th>Đóng cửa</th>
            <th>Khối lượng</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.time}>
              <td>{entry.time}</td>
              <td>{entry.open}</td>
              <td>{entry.high}</td>
              <td>{entry.low}</td>
              <td>{entry.close}</td>
              <td>{entry.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockData;
