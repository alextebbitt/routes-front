import { Input, Tag } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { searchByName } from '../../features/routes/routesSlice';
const { CheckableTag } = Tag;

const Search = () => {

  const kindsData = ["A pie", "Bicicleta"];
  const topicsData = ["Histórica", "Literaria", "Patrimonial", "Turística"];
  const [selectedKinds, setSelectedKinds] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searching, setSearching] = useState(false);
  const { routes, pois } = useSelector(state => state.routes);
  const dispatch = useDispatch();

  const handleSearchChange = async (ev) => {
    if (ev.target.value.length > 0) {
      await dispatch(searchByName(ev.target.value));
    }
  }

  const handleKindChange = async (kind, checked) => {
    const nextSelectedKinds = checked ?
      [...selectedKinds, kind] :
      selectedKinds.filter(i => i !== kind);
    await setSelectedKinds(nextSelectedKinds);
  }

  const handleTopicChange = async (topic, checked) => {
    const nextSelectedTopics = checked ?
      [...selectedTopics, topic] :
      selectedTopics.filter(i => i !== topic);
    setSelectedTopics(nextSelectedTopics);
  }

  const throwSearch = async () => {
    setSearching(true);
    const searchData = {
      kinds: selectedKinds,
      topics: selectedTopics,
      search: searchValue,
    }
    console.log("searchData", searchData);
    setSearching(false);
  }

  useEffect(() => {
    throwSearch();
  }, [selectedKinds, selectedTopics, searchValue]);


  return (
    <div>
      <h1>Search</h1>
      <div>
        <Input placeholder="Buscar" onChange={handleSearchChange} />
      </div>
      <div>
        HERE THE CLICKABLE CATEGORIES
        <div>
          Tipo:
          {kindsData.map(kind => (
            <CheckableTag
              style={{ border: "1px solid magenta" }}
              key={kind}
              checked={selectedKinds.indexOf(kind) > -1}
              onChange={checked => handleKindChange(kind, checked)}
            >
              {kind}
            </CheckableTag>
          ))}
        </div>
        <div>
          Materia:
          {topicsData.map(topic => (
            <CheckableTag
              style={{ border: "1px solid blue" }}
              key={topic}
              checked={selectedTopics.indexOf(topic) > -1}
              onChange={checked => handleTopicChange(topic, checked)}
            >
              {topic}
            </CheckableTag>
          ))}
        </div>
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