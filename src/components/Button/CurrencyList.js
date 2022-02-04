import axios from "axios";
import React, { useState, useEffect } from "react";

function CurrencyList() {
  const [currencyList, setList] = useState([]);

  const fetchList = async () => {
    const { data } = await axios.get(
      "https://api.nbp.pl/api/exchangerates/tables/a/"
    );
    const currencyList = data[0].rates;
    let rates = data[0].rates;

    let currencyValue = rates.map((rates) => {
      return rates.mid;
    });

    setList(currencyList);
    console.log(currencyValue);
  };

  let [number, setNumber] = useState(0);

  const getNumber = (event) => {
    number = event.target.value;
    setNumber(number);
  };

  let [mid, setMid] = useState(0);

  const getName = (event) => {
    mid = event.target.value;
    setMid(mid);
  };

  const checkNumber = () => {
    return number * mid;
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="row">
      <div className="col">
        <input onChange={getNumber} type="number" />
      </div>
      <div className="col">
        <select onChange={getName}>
          {currencyList.map((currencyList) => (
            <option key={currencyList.mid} value={currencyList.mid}>
              {currencyList.code}
            </option>
          ))}
        </select>
      </div>
      <div className="col">
        <div>{checkNumber()}</div>
      </div>
    </div>
  );
}

export default CurrencyList;
