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
        <p className="value">{value || "Aucune donnée"}</p>
        {change !== null && (
          <p
            className={`change ${
              changeType === "increase" ? "positive" : "negative"
            }`}
          >
            {changeType === "increase" ? "+" : "-"} {change}% Par rapport au
            mois dernier
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
        title="Total des Étudiants"
        value="0"
        icon={<span className="icon">👩‍🎓</span>}
        change={null}
        changeType={null}
      />
      <Card
        title="Étudiants Payés"
        value="0"
        icon={<span className="icon">💰</span>}
        change={null}
        changeType={null}
      />
      <Card
        title="Étudiants Non Payés"
        value="0"
        icon={<span className="icon">❌</span>}
        change={null}
        changeType={null}
      />
      <Card
        title="Nombre de Classes"
        value="0"
        icon={<span className="icon">🏫</span>}
        change={null}
        changeType={null}
      />
    </div>
  );
};

export default Cards;
