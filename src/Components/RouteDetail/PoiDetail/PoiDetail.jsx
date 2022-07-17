const PoiDetail = ({ poi }) => {
  return (
    <div>
      <h2>{poi.name}</h2>
      <div>DESCRIPTION: {poi.description}</div>
      <img src={poi.image} alt={poi.name} />
    </div>
  )
}

export default PoiDetail