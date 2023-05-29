import { useState } from "react";
import "./App.css";
import Contacts from "./contacts.json";

function App() {
  const [state, setState] = useState(Contacts.slice(0, 5));

  const findRandomCeleb = () => {
    const randomNumber = Math.floor(Math.random() * Contacts.length);
    const randomCeleb = Contacts[randomNumber];
    setState((prevState) => [...prevState, randomCeleb]);
  };

  return (
    <div className="App">
      <h1>Ironhack Contacts</h1>
      <button onClick={findRandomCeleb}>Add Random</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {state.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    style={{ width: "50px" }}
                    alt="Celebrity"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : null}</td>
                <td>{contact.wonEmmy ? "🏆" : null}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
