import logo from './logo.svg';
import './App.css';
import database from './firebase';
import { useState } from 'react';

const uploadData = () => {
  database.ref('data').set({
    voltage: 190,
    current: 1.1,
    date: Date.call(),
  })
}

const App = () => {
  const [date, setDate] = useState('')
  const savedData = database.ref('data');

  savedData.on('child_changed', snapshot => {
    const record = snapshot.val();
    setDate(record);
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{date}</p>
        <button onClick={uploadData}>
          UploadData
        </button>
      </header>
    </div>
  );
}

export default App;
