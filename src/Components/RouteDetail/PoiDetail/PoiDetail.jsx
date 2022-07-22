import "./PoiDetail.scss"
const PoiDetail = ({ poi }) => {
  const picture = poi.image
  return (
    <div className="poi">
      <div className="poiPicture"> <img src={picture?picture:"https://i.imgur.com/KHbcjKa.jpg"} alt={poi.name} /></div>
                <div className="poiInfo">
                <div className="poiTitle">
                {poi.name}
                </div>
                <div className="poiDescription">{poi.description} </div>
    </div>
    </div>
  )
}

export default PoiDetail