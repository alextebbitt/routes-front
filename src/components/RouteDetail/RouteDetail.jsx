import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getRouteById, resetRoutesMessage } from "../../features/routes/routesSlice";
// import axios from "axios";
import PoiDetail from "./PoiDetail/PoiDetail";
import Comments from "../RoutesView/RouteView/Comments/Comments";
import "./RouteDetail.scss";
import { Tabs, Button, Modal, notification } from "antd";
import {
  LeftOutlined,
  StarOutlined,
  ClockCircleOutlined,
  HomeOutlined,
  FlagOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined
} from "@ant-design/icons";
import RouteMap from "./RouteMap/RouteMap";

const { TabPane } = Tabs;
// const API_URL = process.env.REACT_APP_API_URL;

const RouteDetail = () => {

  const { route, message, messageType } = useSelector((state) => state.routes);
  const { id } = useParams();
  const [loadingData, setLoadingData] = useState(false);
  // const [staticMap, setStaticMap] = useState("/loadingmap.gif");
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const getDetail = async () => {
    setLoadingData(true);
    await dispatch(getRouteById(id));
    setLoadingData(false);
  };

  // const getStaticMap = async () => {
  //   const response = await axios(`${API_URL}/routes/map/id/${id}`, {
  //     responseType: "blob",
  //   });
  //   const image = URL.createObjectURL(response.data);
  //   setStaticMap(image);
  // };

  useEffect(() => {
    getDetail();
    // getStaticMap();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (messageType) {
      if (messageType === "error") {
        notification.error({ message });
        navigate("/home");
      }
      dispatch(resetRoutesMessage());
    }
  }, [messageType])

  const poi = route.pois?.map((poi) => <PoiDetail key={poi._id} poi={poi} />);

  // const tag = route.tags?.map((tag, i) => (
  //   <>
  //     <Link key={tag + i} to={`/tag/${tag}`}>
  //       {tag}
  //     </Link>
  //     &nbsp;&nbsp;
  //   </>
  // ));

  return (
    <div className="routeDetail">
      <div className="header">
        <div className="picture">
          <div className="gradient overMap">
            <div className="btn">
              <Link to="/home">
                <LeftOutlined className="icon" />
              </Link>
            </div>
            <div className="btn2">
              <FullscreenOutlined
                className="icon"
                onClick={() => setVisible(true)}
              />
            </div>
          </div>
          {/* <img src={map} alt="map" /> */}
          {route.pois && (
            <RouteMap route={route} height="320px" zoomControl={false} />
          )}

          {/* <img src={route.image} alt={route.name} /> */}
        </div>
        {/* <img src={staticMap} alt="staticMap" /> */}
        {/* {route.pois && <RouteMap route={route} height="320px" zoomControl={false} />} */}

        {/* <img src={route.image} alt={route.name} /> */}
      </div>
      {loadingData || !route._id ? (
        <h1>LoadingData...</h1>
      ) : (
        <div>
          {/* <div className="routePicture">
            <img src={route.image} alt={route.name} /></div> */}
          <div className="routeDetails">
            <div className="name">{route.name}</div>
            <div className="rating">
              <StarOutlined className="icon" />{" "}
              <span className="value">4.5</span>
              <div className="reviews"> 12 reviews</div>
            </div>
          </div>
          <div className="routeInfo">
            <div className="typeAndTime">
              <div className="routeTopic">{route.topic}</div>
              <div className="routeTime">
                <ClockCircleOutlined className="icon" />
                <span className="value">{route.duration}'</span>
              </div>
            </div>
            <div className="startAndFinish">
              <div className="left">
                <img src={route.image} alt={route.name} />
              </div>

              <div className="right">
                <div className="start">
                  {" "}
                  <HomeOutlined className="icon" />
                  Inicio<div className="location">{route.startingPoint} </div>
                </div>
                <div className="finish">
                  <FlagOutlined className="icon" />
                  Final <div className="location">{route.endingPoint}</div>
                </div>
              </div>
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
            {/* <TabPane tab="Mapa" key="4">
            <div>
              <RouteMap route={route} />
            </div>
          </TabPane> */}
          </Tabs>
          <Modal className="fullscreenMap"
            // title="Lugares de Interés"
            // centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer={[]}
            bodyStyle={{ height: 500 }}
          >

              <div className="btn">
                <FullscreenExitOutlined
                  className="icon"
                  onClick={() => setVisible(false)}
                />
              </div>
              <RouteMap route={route} />

          </Modal>
        </div>
      )}
    </div>
  );
};

export default RouteDetail;
