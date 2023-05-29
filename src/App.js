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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Ironhack Contacts</h1>
        <button
          onClick={findRandomCeleb}
          className="px-4 py-2 mt-4 mr-2 text-white bg-blue-500 rounded"
        >
          Add Random celeb
        </button>
        <button
          onClick={sortByName}
          className="px-4 py-2 mt-4 mr-2 text-white bg-blue-500 rounded"
        >
          Sort by name
        </button>
        <button
          onClick={sortByPopularity}
          className="px-4 py-2 mt-4 mr-2 text-white bg-blue-500 rounded"
        >
          Sort by popularity
        </button>
        <table className="w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2">Picture</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Popularity</th>
              <th className="px-4 py-2">Won Oscar</th>
              <th className="px-4 py-2">Won Emmy</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.map((contact, index) => {
              return (
                <tr key={index}>
                  <td className="px-4 py-2">
                    <img
                      src={contact.pictureUrl}
                      className="rounded-full border border-gray-200 w-12 h-12 object-cover"
                      alt="Celebrity"
                    />
                  </td>
                  <td className="px-4 py-2">{contact.name}</td>
                  <td className="px-4 py-2">{contact.popularity}</td>
                  <td className="px-4 py-2">
                    {contact.wonOscar ? "🏆" : null}
                  </td>
                  <td className="px-4 py-2">
                    {contact.wonEmmy ? "🏆" : null}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={deleteCeleb}
                      className="px-4 py-2 text-white bg-red-500 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
