import "./Search.scss"
import { Input, Tag } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
// import { Link } from "react-router-dom";
import {
  CaretDownOutlined,DownOutlined,UpOutlined
} from "@ant-design/icons";
import { searchByName } from '../../features/routes/routesSlice';
const { CheckableTag } = Tag;

const Search = () => {

  const kindsData = ["A pie", "Bicicleta"];
  const topicsData = ["Histórica", "Literaria", "Patrimonial", "Turística"];
  const [searchActive, setSearchActive] = useState(false);
  const [selectedKinds, setSelectedKinds] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searching, setSearching] = useState(false);
  const [isfiltering,setIsFiltering] = useState(false)
  // const { routes, pois } = useSelector(state => state.routes);
  const dispatch = useDispatch();

  const handleSearchChange = async (ev) => {
    setSearchActive(true);
    setSearchValue(ev.target.value);
  }

  const handleKindChange = async (kind, checked) => {
    const nextSelectedKinds = checked ?
      [...selectedKinds, kind] :
      selectedKinds.filter(i => i !== kind);
    setSearchActive(true);
    setSelectedKinds(nextSelectedKinds);
  }

  const handleTopicChange = async (topic, checked) => {
    const nextSelectedTopics = checked ?
      [...selectedTopics, topic] :
      selectedTopics.filter(i => i !== topic);
    setSearchActive(true);
    setSelectedTopics(nextSelectedTopics);
  }

  const throwSearch = async () => {
    setSearching(true);
    const searchData = {
      kinds: selectedKinds,
      topics: selectedTopics,
      search: searchValue,
    }
    await dispatch(searchByName(searchData));
    setSearching(false);
  }

  useEffect(() => {
    if (searchActive) {
      throwSearch();
    }
    // eslint-disable-next-line
  }, [selectedKinds, selectedTopics, searchValue]);

  // const route = routes.map(route => (
  //   <div key={route.id}>
  //     <Link to={`/route/${route._id}`}>
  //       {route.name}
  //     </Link>
  //   </div>
  // ))

  // const poi = pois.map(poi => (
  //   <div key={poi.id}>
  //     {poi.name} (ruta: <Link to={`/route/${poi.routeId._id}`}>
  //       {poi.routeId.name}
  //     </Link>)
  //   </div>
  // ))

  return (
    <div className="search">
      <div>
        <Input placeholder="Buscar" onChange={handleSearchChange} />
      </div>
      <div >
        <div className="filter">

          <div className="filterBtn" onClick={() => setIsFiltering(!isfiltering)}>
            Ver filtros {!isfiltering?<DownOutlined />: <UpOutlined /> }
          </div>
          {isfiltering?< div className="filter-options"><div className="searchyByType">
          Tipo de desplazamiento: <br/>
          {kindsData.map(kind => (
            <CheckableTag
             
              key={kind}
              checked={selectedKinds.indexOf(kind) > -1}
              onChange={checked => handleKindChange(kind, checked)}
            >
              {kind}
            </CheckableTag>
          ))}
        </div>
        <div>
          Temática de la ruta:<br/>
          {topicsData.map(topic => (
            <CheckableTag
             
              key={topic}
              checked={selectedTopics.indexOf(topic) > -1}
              onChange={checked => handleTopicChange(topic, checked)}
            >
              {topic}
            </CheckableTag>
          ))}
        </div></div> :null }
        
        </div>
      </div>
    </div>
  )
}

export default Search