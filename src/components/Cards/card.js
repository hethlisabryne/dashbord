import React from "react";
import "../Cards/card.css";

const Card = ({ title, value, icon, change, changeType }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        {icon}
      </div>
      <div className="card-body">
        <p className="value">{value || "No Data"}</p>
        {change !== null && (
          <p
            className={`change ${
              changeType === "increase" ? "positive" : "negative"
            }`}
          >
            {changeType === "increase" ? "+" : "-"} {change}% Since last month
          </p>
        )}
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="cards-container">
      <Card
        title="Total Students"
        value="0"
        icon={<span className="icon">👩‍🎓</span>}
        change={null}
        changeType={null}
      />
      <Card
        title="Paid Students"
        value="0"
        icon={<span className="icon">💰</span>}
        change={null}
        changeType={null}
      />
      <Card
        title="Unpaid Students"
        value="0"
        icon={<span className="icon">❌</span>}
        change={null}
        changeType={null}
      />
    </div>
  );
};

export default Cards;
