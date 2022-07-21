import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Poi = () => {
    const { routes } = useSelector(state => state.routes)
    const poi = routes[0]?.pois.map( poi => {
        const description = poi.description.substring(0,120)

        return (
            <div className="poi" key={poi.id}>
                <h2>{poi.name}</h2>
                <div>DESCRIPTION: {description}</div>
                <img src={poi.image} alt={poi.name} />
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