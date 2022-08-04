import React from "react";
import { Link } from "react-router-dom";
import CoinItem from "./CoinItem";
import "./Coins.css";
import Coin from "./routes/Coin";

function Coins(props) {
  return (
    <div className="cointainer">
      <div className="heading">
        <div
          style={{
            display: "flex",
            flex: 0.4,
          }}
        >
          <p>#</p>
        </div>
        <div
          style={{
            display: "flex",
            flex: 0.7,
          }}
        >
          <p>Coin</p>
        </div>
        <div
          style={{
            display: "flex",
            flex: 0.7,
          }}
        >
          <p>price</p>
        </div>
        <div
          style={{
            display: "flex",
            flex: 0.5,
          }}
        >
          <p>24h</p>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <p className="hide-mobile">volume</p>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <p className="hide-mobile">Mkt Cap</p>
        </div>
      </div>

      {props.coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            <CoinItem coins={coins} />
          </Link>
        );
      })}
    </div>
  );
}

export default Coins;
