import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWishlist } from '../../features/routes/routesSlice';
import BigSpin from '../BigSpin/BigSpin';
import "./LikedRoutes.scss"

const LikedRoutes = () => {

  /*
  TODO: Aquí falta implementar el scroll infinito.
  */

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { routes } = useSelector((state) => state.routes);

  const truncateAfterWord = (str, chars) =>
    str.length < chars ?
      str
      :
      `${str.substr(0, str.substr(0, chars - 3).lastIndexOf(" "))}...`;

  const getRoutesInWishlist = async () => {
    setLoading(true);
    await dispatch(getWishlist(page));
    setLoading(false);
  }

  useEffect(() => {
    getRoutesInWishlist();
    // eslint-disable-next-line
  }, [page]);

  const route = routes.map((r) => (
    <div className="route" key={r._id}>
      <div className="routePicture">
        <Link to={`/route/${r._id}`}>
          <img
            src={r.image}
            alt={r.name} />
          <br />
          <div className="routeTitle">{r.name}</div>
        </Link>

      </div>
      <div className="routeDescription">
        <p>{truncateAfterWord(r.description, 100)}</p>
      </div>
      {/* <button><Link to={`/route/${r._id}`}>Ir a la ruta</Link></button> */}
    </div>
  ));

  return (
    <div className="likedRoutes">
      <h3>Tus rutas favoritas</h3>
      {loading ? <BigSpin /> : null}
      {route}
      {route.length === 0 && !loading && <div className="route">No tienes rutas en tu lista de deseos
      <button><Link to="/home">Explora las rutas</Link></button></div>}
    </div>
  )
}

export default LikedRoutes