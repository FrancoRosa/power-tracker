const Variable = ({name, value}) => {
  return (
    <div className="variable">
      <h3>{name}</h3>
      <p>{value}</p>
    </div>
  )
}

export default Variable