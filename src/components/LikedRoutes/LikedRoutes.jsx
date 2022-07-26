import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWishlist } from '../../features/routes/routesSlice';
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
            <br/>
          {r.name}
        </Link>

      </div>
      <div className="routeTitle">
        <p>{truncateAfterWord(r.description, 100)}</p>
      </div>
    </div>
  ));

  return (
    <div className="likedRoutes">
      <h1>Tus rutas favoritas</h1>
      {loading ? <div>Cargando...</div> : null}
      {route}
      {route.length === 0 && !loading && <div>No tienes rutas en tu lista de deseos</div>}
    </div>
  )
}

export default LikedRoutes