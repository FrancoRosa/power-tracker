const Variable = ({name, value, unit}) => {
  return (
    <div className="variable">
      <p>{name}:</p>
      <p className="value">{value}</p>
      <p>{unit}</p>
    </div>
  )
}

export default Variable
