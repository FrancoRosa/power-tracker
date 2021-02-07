import { useEffect, useState } from "react";

const Time = () => {
  const [date, setDate] = useState({});
  
  const getTime = () => {
    const now = Date().toLocaleUpperCase().split(' ');
    setDate({
      time: now[4],
      date: [now[2],now[1],now[3]].join(' ')
    })
  }
  useEffect(() => {
    setInterval(getTime, 1000);
  },[])


  return (
    <p className="time">{date.date} {date.time}</p>
  )
}
export default Time;