import { Navigate } from "react-router-dom";
const LandingZone = ({ children }) => {
    const user = localStorage.getItem("user");

    return user ? <Navigate to="/home" /> : children;
}

export default LandingZone


