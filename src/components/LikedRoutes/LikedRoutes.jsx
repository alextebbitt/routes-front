import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWishlist } from '../../features/routes/routesSlice';

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
    <div key={r._id}>
      <h3>
        <Link to={`/route/${r._id}`}>
          {r.name}
        </Link>
      </h3>
      <p>{truncateAfterWord(r.description, 100)}</p>
    </div>
  ));

  return (
    <div>
      <h1>LikedRoutes</h1>
      {loading && <div>Loading...</div>}
      {route}
    </div>
  )
}

export default LikedRoutes