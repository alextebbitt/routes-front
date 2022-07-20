import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const getComments = async (page = 1) => {
    const res = await axios.get(`${API_URL}/comments/?page=${page}`);
    return res.data;
};

const commentsService = {
    getComments
};

export default commentsService; 