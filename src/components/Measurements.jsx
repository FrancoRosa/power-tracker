import { rtdb, db } from '../firebase';
import { useEffect, useState } from 'react';
import Variable from './Variable';
import Time from './Time';

const Measurement = () => {
  const [measurement, setMeasurement] = useState({})
  const savedData = rtdb.ref('measurements');

  const getData = () => {
    savedData.once('value').then(snapshot => {
      setMeasurement(snapshot.val())
    })
  };

  savedData.on('child_changed', () => {
    getData();
  })

  useEffect(() => {
    getData();
  },[])

  return (
    <div>
      <Time />
      <div className="variables_container">
        <div className="variables">
          <Variable name='Vrs' value={measurement.Vrs} unit='V'/>
          <Variable name='Vrt' value={measurement.Vrt} unit='V'/>
          <Variable name='Vst' value={measurement.Vst} unit='V'/>
        </div>
        <div className="variables">
          <Variable name='Ir' value={measurement.Ir} unit='A'/>
          <Variable name='Is' value={measurement.Is} unit='A'/>
          <Variable name='It' value={measurement.It} unit='A'/>
        </div>
        <div className="variables">
          <Variable name='Prs' value={measurement.Wrs} unit='W'/>
          <Variable name='Prt' value={measurement.Wrt} unit='W'/>
          <Variable name='Pst' value={measurement.Wst} unit='W'/>
        </div>
        <div className="variables">
          <Variable name='F' value={measurement.F} unit='Hz'/>
        </div>
      </div>
      
    </div>
  );
} 

export default Measurement
