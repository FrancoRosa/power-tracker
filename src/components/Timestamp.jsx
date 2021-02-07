const Timestamp = ({ timestamp }) => {
  const update = Date(timestamp).toLocaleUpperCase().split(' ')
  const date = {
    time: update[4],
    date: [update[2],update[1],update[3]].join(' ')
  }
  return (
    <p className="timestamp">{date.date} {date.time}</p>
  )
}
export default Timestamp;