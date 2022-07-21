import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import "./Poi.scss"
const Poi = () => {
    const { routes } = useSelector(state => state.routes)
    const poi = routes[0]?.pois.map( poi => {
        const description = poi.description.substring(0,120)

        return (
            <div className="poi" key={poi.id}>
                <div className="poiPicture"> <img src={poi.image} alt={poi.name} /></div>
                <div className="poiInfo">
                <div className="poiTitle">
                {poi.name}
                </div>
                <div className="poiDescription">{description} </div>
               
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