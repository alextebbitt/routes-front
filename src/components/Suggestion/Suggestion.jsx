import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { getRecommendation } from "../../features/routes/routesSlice";
import BigSpin from "../BigSpin/BigSpin";
import "./Suggestion.scss"

const Suggestion = () => {

  const { route, needQuestionnaire } = useSelector((state) => state.routes);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const launchGetRecommendation = async () => {
    setLoading(true);
    await dispatch(getRecommendation());
    setLoading(false);
  }

  const truncateAfterWord = (str, chars, placeholder = '...') => str.length < chars ? str : `${str.substr(0, str.substr(0, chars - placeholder.length).lastIndexOf(" "))}${placeholder}`;



  useEffect(() => {
    launchGetRecommendation();
    // eslint-disable-next-line
  }, [])

  return (<>
    <div className="recommendedRoutes">
      <h1>Descubrir</h1>
      {loading && <BigSpin />}
      {needQuestionnaire && !route._id &&
        <div className="route">
        <p>Para poder recomendarte una ruta, debes rellenar el cuestionario
          opcional "Preferencias de rutas" en tu perfil.</p>
        <Link to="/profile">Ir al perfil</Link>
      </div>}
      {route._id && !loading &&
        <>
          <p>Pensamos que te puede interesar esta ruta.</p>
          <div className="route">
            <div className="routePicture">
              <Link to={`/route/${route._id}`}>
                <img
                  src={route.image}
                  alt={route.name} />
                <br />
                {route.name}
              </Link>
            </div>
            <div className="routeTitle">
              <p> {truncateAfterWord(route.description, 420)}</p>
            </div>
            <button><Link to={`/route/${route._id}`}>Ir a la ruta</Link></button>
          </div>

        </>
      }
    </div>
  </>)
}

export default Suggestion