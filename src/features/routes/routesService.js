import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const getRoutes = async (page = 1) => {
  const res = await axios.get(`${API_URL}/routes/all?page=${page}`);
  return res.data;
};

const routesService = {
  getRoutes,
};

export default routesService;