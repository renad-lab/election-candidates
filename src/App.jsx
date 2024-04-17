import React from "react";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Card from "./components/Card";
import "./App.css";

const candidateNames = [
  "William Cotter",
  "Patrick Denman",
  "George Devolder-Santos",
  "Ryan Kalata",
  "John Avlon",
  "Saint Jermaine Endeley",
  "Nancy Goroff",
  "Nicholas J. LaLota",
  "Rob Lubin",
  "Andrew Garbarino",
  "Daniel Goldman",
  "Yvette D. Clarke",
  "Nicole Malliotakis",
  "Alexandria Ocasio-Cortez",
  "Jerrold Nadler",
  "Tom Suozzi",
  "Grace Meng",
  "Hakeem Jeffries",
  "Ritchie Torres",
  "Jamaal Bowman",
  "Mondaire Jones",
  "Lee Zeldin",
  "Kathleen Rice",
  "Paul Tonko",
  "Elise Stefanik",
  "Mike Lawler",
  "Antonio Delgado",
  "Sean Patrick Maloney",
  "Chris Jacobs",
  "Joe Morelle",
];

function App() {
  return (
    <div>
      <Navbar />
      <h1>People</h1>
      <div className="Card-container">
        {candidateNames.map((name, index) => (
          <Card key={index} name={name} image="../assets/person.jpg" />
        ))}
      </div>
      <h1>Candidate Names List</h1>
      <List names={candidateNames} />
    </div>
  );
}

export default App;
