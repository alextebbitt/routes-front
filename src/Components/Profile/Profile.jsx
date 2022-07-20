import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, notification, Input, Upload, Space, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { updateUser } from '../../features/auth/authSlice';
import Questionnaire from './Questionnaire/Questionnaire';
const { Paragraph } = Typography;

const Profile = () => {

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    notification.success({ message: "logged out successfully" });
    navigate("/login");
  };
  const [name, setName] = useState(user.user.name);
  const [password, setPassword] = useState();
  const [bio, setBio] = useState(user.user.bio);
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [userAvatar, setUserAvatar] = useState(user?.user.avatar);
  const [readyToSend, setReadyToSend] = useState(false);

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  }

  const handleEdit = async () => {
    setIsLoading(true);
    dispatch(updateUser({ name, bio, password }));
    setIsLoading(false);
  }

  const handleAvatarChange = (info) => {
    const file = info.file;
    // Validations: Type and size
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      notification.error({ message: "Please, select a jpg or png file" });
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      notification.error({ message: "Image too large" });
    }
    if (isJpgOrPng && isLt2M) {
      setFileList([file])
      const url = URL.createObjectURL(file);
      setUserAvatar(url)
      setReadyToSend(true);
    }
  }

  const clearImage = () => {
    setUserAvatar(user?.user.avatar)
    setReadyToSend(false);
  }

  const handleRemoveImage = () => {
    setFileList([]);
  }

  const sendNewAvatar = async () => {
    setIsSending(true);
    if (fileList.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(fileList[0]);
      reader.onload = async (e) => {
        const base64 = e.target.result;
        await dispatch(updateUser({ avatar: base64 }));
        setFileList([]);
        setReadyToSend(false);
      }
    }
    setIsSending(false);
  }

  return (
    <div>
      <h1>Perfil</h1>
      <div>
        <img src={userAvatar} alt="" />
        <Space>
          <Upload
            name="avatar"
            showUploadList={false}
            beforeUpload={() => false}
            onRemove={handleRemoveImage}
            onChange={handleAvatarChange}
            customRequest={(a) => console.log(a)}
            fileList={fileList}>
            <Button className="action-button" icon={<UploadOutlined />} loading={isSending}>
              Change
            </Button>
          </Upload>
          <Button
            hidden={!readyToSend}
            type="primary"
            onClick={sendNewAvatar}
            loading={isSending}>
            Click to send image
          </Button>
          <Button
            hidden={!readyToSend}
            onClick={clearImage}>
            Clear image
          </Button>
        </Space>
      </div>
      <div>
        <h3>Nombre</h3>
        <Paragraph editable={{ onChange: setName }}>
          {name}
        </Paragraph>
      </div>
      <div>Email: {user.user.email}</div>
      <div>
        <Link to="/" onClick={onLogout}>
          Cerrar Sesión
        </Link>
      </div>
      {user.user.role === "admin" ? (
        <div>
          <Link to="/admin">Admin</Link>
        </div>
      ) : (
        ""
      )}


      {/* WE ARE NOT USING ROLES
      <div>Role: {user.user.role}</div> */}
      <div>
        <h3>Bio</h3>
        <Paragraph
          editable={{
            onChange: setBio,
            maxLength: 300,
            autoSize: { maxRows: 5, minRows: 3, },
          }}>
          {bio}
        </Paragraph>
      </div>
      <div>
        <Input id="password" type="password" placeholder="New password" onChange={handlePassword} />
      </div>
      <Button type="primary" onClick={handleEdit} loading={isLoading}>
        Editar
      </Button>
      <Questionnaire quest={user.user?.questionnaire} />
    </div>
  )
}

export default Profile