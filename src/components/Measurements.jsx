import { rtdb, db } from '../firebase';
import { useEffect, useState } from 'react';
import Variable from './Variable';
import Time from './Time';
import Timestamp from './Timestamp';

const Measurement = () => {
  const [measurement, setMeasurement] = useState({})
  const savedData = rtdb.ref('measurements');

  useEffect(() => {
    console.log('>>> Use effect');
    savedData.on('value', snapshot => {
      if (snapshot.exists()) {
        setMeasurement(snapshot.val());
      }
    })
  },[])

  return (
    <div>
      <Time />
      <Timestamp timestamp={measurement.timestamp}/>
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
