import React, {useState } from 'react';
import './App.css';

const initialStuff =[[1,"a","b"], [2,"c","d"], [3,"e","f"]]

function App() {

  const [stuff, setStuff] = useState(initialStuff)

  const updateStuff = () => {
    const newStuff = [[1,"a","b"], [2,"c","d"], [3,"new","new"]]
    setStuff(newStuff)
  }
  return (
    <div className="App">
      <table>
        <tr>
          <th>ID</th>
          <th>First Column</th>
          <th>Second Column</th>
        </tr>
        {
        stuff.map(item => {
          return (
            <tr key={item[0]}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>  
            </tr>
          )
        })
        }
      </table>
      <button onClick={updateStuff}>Update Table</button>
    </div>
  );
}

export default App;
