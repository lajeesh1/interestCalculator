import React, { useState } from "react";
import "./App.css";

function App() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interestType, setInterestType] = useState("simple");
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);

    if (isNaN(P) || isNaN(R) || isNaN(T)) {
      alert("Please enter valid numbers");
      return;
    }

    let interest = 0;

    if (interestType === "simple") {
      interest = (P * R * T) / 100;
    } else {
      interest = P * Math.pow(1 + R / 100, T) - P;
    }

    setResult(interest.toFixed(2));
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="title">Interest Calculator</h1>
        <div className="form">
          <div className="input amount">
            <p>Principal Amount</p>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>

          <div className="input interest">
            <p>Rate of Interest (%)</p>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>

          <div className="input year">
            <p>Loan Duration (Years)</p>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="radio-buttons">
            <label class="custom-radio">
              <input
                type="radio"
                value="simple"
                checked={interestType === "simple"}
                onChange={(e) => setInterestType(e.target.value)}
              />
              <span class="radio-checkmark"></span>
              Simple Interest
            </label>

            <label class="custom-radio">
              <input
                type="radio"
                value="compound"
                checked={interestType === "compound"}
                onChange={(e) => setInterestType(e.target.value)}
              />
              <span class="radio-checkmark"></span>
              Compound Interest
            </label>
          </div>

          <button className="button" onClick={calculateInterest}>
            Calculate Interest
          </button>
        </div>
        <div className="result-container">
          {result !== null && (
            <p className="result">
              The calculated {interestType} interest is :{" "}
              <span>₹ {result}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
