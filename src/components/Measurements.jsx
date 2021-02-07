import { rtdb, db } from '../firebase';
import { useEffect, useState } from 'react';
import Variable from './Variable';
import Time from './Time';

const Measurement = () => {
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
    <div>
      <Time />
      <div className="variables_container">
        <div className="variables">
          <Variable name='Vr' value="22.1" unit='V'/>
          <Variable name='Vs' value="12.1" unit='V'/>
          <Variable name='Vt' value="22.1" unit='V'/>
        </div>
        <div className="variables">
          <Variable name='Ir' value="22.1" unit='I'/>
          <Variable name='Is' value="12.1" unit='I'/>
          <Variable name='It' value="22.1" unit='I'/>
        </div>
        <div className="variables">
          <Variable name='Pr' value="22.1" unit='W'/>
          <Variable name='Ps' value="12.1" unit='W'/>
          <Variable name='Pt' value="22.1" unit='W'/>
        </div>
      </div>
      <div className="variables_one">
        <Variable name='F' value="22.1" unit='Hz'/>
      </div>
    </div>
  );
} 

export default Measurement
