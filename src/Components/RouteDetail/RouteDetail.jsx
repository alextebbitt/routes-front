import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getRouteById } from "../../features/routes/routesSlice";
import axios from "axios";
import PoiDetail from "./PoiDetail/PoiDetail";
import Comments from "../RoutesView/RouteView/Comments/Comments";
import "./RouteDetail.scss"
import { Tabs } from 'antd';
import { LeftOutlined,StarOutlined,ClockCircleOutlined,HomeOutlined,FlagOutlined  } from "@ant-design/icons";


const { TabPane } = Tabs;
const API_URL = process.env.REACT_APP_API_URL;

const RouteDetail = () => {
  const { route } = useSelector((state) => state.routes);
  console.log(route)
  const { id } = useParams();
  const [loadingData, setLoadingData] = useState(false);
  const [map, setMap] = useState("/loadingmap.gif");
  const dispatch = useDispatch();

  const getDetail = async () => {
    setLoadingData(true);
    await dispatch(getRouteById(id));
    setLoadingData(false);
  };

  const getMap = async () => {
    const response = await axios(`${API_URL}/routes/map/id/${id}`, {
      responseType: "blob",
    });
    const image = URL.createObjectURL(response.data);
    setMap(image);
  };

  useEffect(() => {
    getDetail();
    getMap();
    // eslint-disable-next-line
  }, [id]);

  const poi = route.pois?.map((poi) => <PoiDetail key={poi._id} poi={poi} />);

  const tag = route.tags?.map((tag, i) => (
    <>
      <Link key={tag + i} to={`/tag/${tag}`}>
        {tag}
      </Link>
      &nbsp;&nbsp;
    </>
  ));

  return (<div className="routeDetail">
    <div className="header">
      <div className="btn"><Link to="/home"><LeftOutlined className="icon"/></Link></div>
      <div className="picture">
        {/* <img src={map} alt="map" /> */}
        <img src={route.image} alt={route.name} />
      </div>
      </div>
      {loadingData || !route._id ? (
        <h1>LoadingData...</h1>
      ) : (
        <div>
          
          {/* <div className="routePicture">
            <img src={route.image} alt={route.name} /></div> */}
          <div className="routeDetails">
          <div className="name">
          {route.name}</div>
          <div className="rating">
          <StarOutlined className="icon" /> <span className="value">4.5</span>
            <div className="reviews"> 124 valoraciones</div>
          </div>
          </div>
          <div className="routeInfo">
            <div className="typeAndTime">
<div className="routeTopic">{route.topic}</div>
<div className="routeTime">
<ClockCircleOutlined className="icon"/>
                <span className="value">{route.duration}'</span></div>
            </div>
            <div className="startAndFinish">
            <div className="start"> <HomeOutlined className="icon" />Inicio<div className="location">{route.startingPoint} </div></div>
          <div className="finish"><FlagOutlined className="icon" />Final <div className="location">{route.endingPoint}</div></div>
            </div>
          
          </div>
          
         
          <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Descripción" key="1">
    <div className="routeDescription"> {route.description}</div>
    </TabPane>
    <TabPane tab="Lugares que visitar" key="2">
    <div className="routePois">{poi}</div>
    </TabPane>
    <TabPane tab="Valoraciones" key="3">
    <div>
            <Comments routeId={id} />
          </div>
    </TabPane>
  
  </Tabs>

         
          
         
        </div>
      )}
   
    </div>
  );
};

export default RouteDetail;
