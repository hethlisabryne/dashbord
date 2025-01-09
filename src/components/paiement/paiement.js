import React from "react";
import "./paiement.css"; // Import the CSS file

const paiement = () => {
  const students = [
    { nom: "Dupont", prenom: "Jean", classe: "Classe 1", paiement: "payé" },
    {
      nom: "Martin",
      prenom: "Marie",
      classe: "Classe 2",
      paiement: "non payé",
    },
    { nom: "Durand", prenom: "Paul", classe: "Classe 1", paiement: "payé" },
    {
      nom: "Lemoine",
      prenom: "Lucie",
      classe: "Classe 2",
      paiement: "non payé",
    },
  ];

  return (
    <div className="container">
      <h1>Liste des étudiants</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Classe</th>
            <th>Paiement</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.nom}</td>
              <td>{student.prenom}</td>
              <td>{student.classe}</td>
              <td
                className={
                  student.paiement === "payé"
                    ? "payment-paid"
                    : "payment-not-paid"
                }
              >
                {student.paiement}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default paiement;
