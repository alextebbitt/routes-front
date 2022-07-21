import { Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { searchByName } from '../../features/routes/routesSlice';

const Search = () => {

  const [searching, setSearching] = useState(false);
  const { routes, pois } = useSelector(state => state.routes);
  const dispatch = useDispatch();

  const handleChange = async (ev) => {
    setSearching(true);
    if (ev.target.value.length > 0) {
      await dispatch(searchByName(ev.target.value));
    }
    setSearching(false);
  }

  return (
    <div>
      <h1>Search</h1>
      <div>
        <Input placeholder="Buscar" onChange={handleChange} />
      </div>
      <div>
        HERE THE CLICKABLE CATEGORIES
      </div>
      <div>
        {searching && <div>Buscando...</div>}
        {routes.length > 0 && <div>Rutas</div>}
        {routes.map(route => <div>{route.name}</div>)}
        {pois.length > 0 && <div>Puntos de Interés</div>}
        {pois.map(poi => <div>{poi.name}</div>)}
      </div>
    </div>
  )
}

export default Search