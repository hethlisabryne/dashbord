import React from "react";
import "./classe.css";

const Classe = ({ currentClass }) => {
  const studentsData = {
    8: [
      { nom: "Dupont", prenom: "Pierre", section: "///" },
      { nom: "Martin", prenom: "Paul", section: "////" },
    ],
    9: [
      { nom: "Lemoine", prenom: "Marie", section: "//////" },
      { nom: "Bernard", prenom: "Jean", section: "//////" },
    ],
    10: [
      { nom: "Durand", prenom: "Lucie", section: "//////" },
      { nom: "Petit", prenom: "Luc", section: "///////" },
    ],
    11: [
      { nom: "Michel", prenom: "Isabelle", section: "///////" },
      { nom: "Gauthier", prenom: "Claude", section: "//////" },
    ],
    12: [
      { nom: "Dumas", prenom: "Charlotte", section: "eco & gestion" },
      { nom: "Robert", prenom: "Alex", section: "eco & gestion" },
    ],
    13: [
      { nom: "Carrière", prenom: "David", section: "Informatique" },
      { nom: "Leclerc", prenom: "Sophie", section: "Math" },
    ],
    14: [
      { nom: "Garnier", prenom: "Vincent", section: "Science" },
      { nom: "Thomas", prenom: "Julie", section: "Informatique" },
    ],
  };

  return (
    <div className="table-container">
      <h1>
        {currentClass === "8" && "  Liste des étudiants en 7ème années"}
        {currentClass === "9" && "  Liste des étudiants en 8ème années"}
        {currentClass === "10" && " Liste des étudiants en 9ème années"}
        {currentClass === "11" && " Liste des étudiants en 1ère années"}
        {currentClass === "12" && " Liste des étudiants en 2ème années"}
        {currentClass === "13" && " Liste des étudiants en 3ème années"}
        {currentClass === "14" && " Liste des étudiants en 4ème années"}
      </h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {studentsData[currentClass]?.map((student, index) => (
            <tr key={index}>
              <td>{student.nom}</td>
              <td>{student.prenom}</td>
              <td>{student.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Classe;
