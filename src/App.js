import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./Coins";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    setInterval(() => {
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setCoins(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 5000);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
