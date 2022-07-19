import axios from "axios"
const API_URL = process.env.REACT_APP_API_URL;

const register = async (userData) => {
  const res = await axios.post(API_URL + "/users", userData);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + '/users/login', userData)
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data
}

const logout = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(
    API_URL + "/users/logout",
    { headers: { authorization: user?.token, }, }
  );
  if (res.data) {
    localStorage.removeItem("user");
  }
  return res.data;
};

const updateUser = async (userData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(
    API_URL + "/users/update",
    userData,
    { headers: { authorization: user?.token, }, }
  );
  return res.data;
}

const authService = {
  register,
  login,
  logout,
  updateUser,
};

export default authService;