import React, { useState } from "react";

function InterestCalculator() {
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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Interest Calculator</h1>

      <div>
        <input
          type="number"
          placeholder="Principal Amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="Rate of Interest (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="Time (years)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="simple"
            checked={interestType === "simple"}
            onChange={(e) => setInterestType(e.target.value)}
          />
          Simple Interest
        </label>

        <label>
          <input
            type="radio"
            value="compound"
            checked={interestType === "compound"}
            onChange={(e) => setInterestType(e.target.value)}
          />
          Compound Interest
        </label>
      </div>

      <button onClick={calculateInterest}>Calculate Interest</button>

      {result !== null && (
        <h2>
          The calculated {interestType} interest is: ₹{result}
        </h2>
      )}
    </div>
  );
}

export default InterestCalculator;
