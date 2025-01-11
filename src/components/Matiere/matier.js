import React from "react";
import "./matier.css";

const Matiere = ({ matiere }) => {
  const students = {
    3: [
      { nom: "Dupont", prenom: "Pierre", classe: "3eme" },
      { nom: "Durand", prenom: "Marie", classe: "2eme" },
    ],
    4: [
      { nom: "Lemoine", prenom: "Sophie", classe: "1er annes " },
      { nom: "Martin", prenom: "Jean", classe: "4eme annes " },
    ],
    5: [
      { nom: "Leclerc", prenom: "Antoine", classe: "7eme annes " },
      { nom: "Petit", prenom: "Alice", classe: "8eme annes " },
    ],
    6: [
      { nom: "Bernard", prenom: "Claire", classe: "4eme annes " },
      { nom: "Gautier", prenom: "Louis", classe: "9eme annes " },
    ],
    7: [
      { nom: "Dumas", prenom: "Julien", classe: "3eme annes " },
      { nom: "Dupuis", prenom: "Emma", classe: "2eme annes" },
    ],
  };

  return (
    <div className="table-container">
      <h1>
        {matiere === "3" && "Math"}
        {matiere === "4" && "Physique"}
        {matiere === "5" && "Anglais"}
        {matiere === "6" && "Français"}
        {matiere === "7" && "Informatique"}
      </h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Classe</th>
          </tr>
        </thead>
        <tbody>
          {students[matiere]?.map((student, index) => (
            <tr key={index}>
              <td>{student.nom}</td>
              <td>{student.prenom}</td>
              <td>{student.classe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Matiere;
