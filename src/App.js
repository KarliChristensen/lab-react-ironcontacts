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

  const sortByName = () => {
    const sortedN = [...state].sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setState(sortedN);
  };

  const sortByPopularity = () => {
    const sortedP = [...state].sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      } else if (a.popularity < b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    setState(sortedP);
  };

  const deleteCeleb = () => {
    const newCelebs = [...state].filter((celeb) => {
      return celeb.name !== state[0].name;
    });
    setState(newCelebs);
  };

  return (
    <div className="App">
      <h1>Ironhack Contacts</h1>
      <button onClick={findRandomCeleb}>Add Random celeb</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
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
                <td>
                  <button onClick={deleteCeleb}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
