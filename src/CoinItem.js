import React, { useState } from "react";
import "./Coins.css";

function CoinItem(props) {
  const [market_cap, setMarket_cap] = useState(false);
  const [total_vol, setTotal_vol] = useState(false);

  return (
    <div className="coin-row">
      <div
        className="coinRow-content"
        style={{
          flex: 0.3,
        }}
      >
        <p>{props.coins.market_cap_rank}</p>
      </div>
      <div className="img-symbol">
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>

      <div
        className="coinRow-content"
        style={{
          flex: 0.7,
        }}
      >
        <p>${props.coins.current_price.toLocaleString()}</p>
      </div>

      <div
        className="coinRow-content"
        style={{
          flex: 0.5,
        }}
      >
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      </div>

      <div
        className="coinRow-content"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <p
          className="hide-mobile"
          onMouseEnter={(e) => setTotal_vol(true)}
          onMouseLeave={(e) => setTotal_vol(false)}
        >
          $
          {!total_vol &&
            props.coins.total_volume.toLocaleString().toString().slice(0, 6) +
              "..."}
          {total_vol && props.coins.total_volume}
        </p>
      </div>

      <div
        className="coinRow-content"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <p
          className="hide-mobile"
          onMouseEnter={(e) => setMarket_cap(true)}
          onMouseLeave={(e) => setMarket_cap(false)}
        >
          $
          {!market_cap &&
            props.coins.market_cap.toLocaleString().toString().slice(0, 7) +
              "..."}
          {market_cap && props.coins.market_cap}
        </p>
      </div>
    </div>
  );
}

export default CoinItem;
