import logo from '../logo.svg';
import './App.css';
import { rtdb, db } from '../firebase';
import { useEffect, useState } from 'react';
import Variable from './Variable';

const App = () => {
  const [measurement, setMeasurement] = useState({})
  const savedData = rtdb.ref('measurement');
  

  savedData.on('child_changed', snapshot => {
    const lastMeasurement = snapshot.val();
    setMeasurement(lastMeasurement);
  })

  useEffect(() => {
    savedData.once('value').then(snapshot => {
      setMeasurement(snapshot.val())
      console.log('---> Effect')
      console.log(measurement)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="variables">
          <Variable name='Vr' value="22.1"/>
          <Variable name='Vs' value="12.1"/>
          <Variable name='Vt' value="22.1"/>
          <Variable name='Ir' value="22.1"/>
          <Variable name='Is' value="12.1"/>
          <Variable name='It' value="22.1"/>
        </div>
      </header>
    </div>
  );
}

export default App;
