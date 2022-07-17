import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const RouteView = () => {

  const { routes } = useSelector(state => state.routes);

  const route = routes.map(route => {
    return (
      <div key={route.id}>
        <h2>{route.name}</h2>
        <Link to={"/route/" + route._id}>View Route</Link>
        <div>DIFFICULTY: {route.difficulty}</div>
        <div>DURATION: {route.duration}</div>
        <div>STARTING POINT: {route.startingPoint}</div>
        <div>ENDING POINT: {route.endingPoint}</div>
        <div>TAGS: {route.tags.join(", ")}</div>
        <div>POIS: <ul>{route.pois.map(poi => <li key={poi._id}>{poi.orderNum}. {poi.name}</li>)}</ul></div>
        <div>DESCRIPTION: {route.description}</div>
        <img src={route.image} alt={route.name} />
        <hr />
      </div>
    )
  })
  return (
    <div>{route}</div>
  )
}

export default RouteView