import { Tag } from "antd";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import "./Poi.scss"

const Poi = () => {

  const { pois } = useSelector(state => state.routes)

  const poi = pois.map(poi => {

    const truncateAfterWord = (str, chars, placeholder = '...') => str.length < chars ? str : `${str.substr(0, str.substr(0, chars - placeholder.length).lastIndexOf(" "))}${placeholder}`;

    const picture = poi.image;

    return (
      <div className="poi" key={poi.id}>
        <div className="poiPicture"> <img src={picture ? picture : "https://i.imgur.com/KHbcjKa.jpg"} alt={poi.name} /></div>
        <div className="poiInfo">
          <div className="poiTitle">
            {truncateAfterWord(poi.name, 40)}
          </div>
          <div className="poiDescription">
            {truncateAfterWord(poi.description, 135)}
          </div>
          <Link to={`/route/${poi.routeId._id}`}>
            <Tag color="geekblue">{poi.routeId.name}</Tag>
          </Link>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="container">
        {poi}
      </div>
    </div>
  );

}

export default Poi