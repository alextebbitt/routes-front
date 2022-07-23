import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const getRoutes = async (page = 1) => {
  const res = await axios.get(`${API_URL}/routes/all?page=${page}`);
  return res.data;
};

const getRouteById = async (id) => {
  const res = await axios.get(`${API_URL}/routes/id/${id}`);
  return res.data;
}

const getRoutesByTag = async ({ tag, page = 1 }) => {
  const res = await axios.get(`${API_URL}/routes/tag/${tag}?page=${page}`);
  return res.data;
};

const searchByName = async (data) => {
  const searchKind = data.kinds.map(k => `kind=${k}&`).join("");
  const searchTopic = data.topics.map(t => `topic=${t}&`).join("");
  const res = await axios.get(
    `${API_URL}/routes/search/${data.search}?${searchKind}${searchTopic}`
  );
  return res.data;
};

const routesService = {
  getRoutes,
  getRouteById,
  getRoutesByTag,
  searchByName,
};

export default routesService;