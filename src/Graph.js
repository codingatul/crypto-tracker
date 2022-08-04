import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { chartDays } from "./data";
import SelectButton from "./SelectButton";

function Graph({ coinName }) {
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);

  const url = `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=${days}`;

  useEffect(() => {
    setInterval(() => {
      axios
        .get(url)
        .then((response) => {
          // console.log(response.data.prices);
          setHistoricData(response.data.prices);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 5000);
  }, [days]);

  return (
    <>
      <Line
        data={{
          labels: historicData.map((coin) => {
            let date = new Date(coin[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;

            return days === 1 ? time : date.toLocaleDateString();
          }),

          datasets: [
            {
              data: historicData.map((coin) => coin[1]),
              label: `Price(Past ${days} Days) in USD`,
              borderColor: "#EEBC1D",
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />

      <div
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {chartDays.map((day) => {
          return (
            <SelectButton
              key={day.value}
              onClick={() => setDays(day.value)}
              selected={day.value === days}
            >
              {day.label}
            </SelectButton>
          );
        })}
      </div>
    </>
  );
}

export default Graph;
