import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button, Input } from 'antd';
import { updateUser } from '../../features/auth/authSlice';
import Questionnaire from './Questionnaire/Questionnaire';
const { Paragraph } = Typography;

const Profile = () => {

  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user.user.name);
  const [password, setPassword] = useState();
  const [bio, setBio] = useState(user.user.bio);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  }

  const handleEdit = async () => {
    setIsLoading(true);
    dispatch(updateUser({ name, bio, password }));
    setIsLoading(false);
  }

  return (
    <div>
      <h1>Perfil</h1>
      <div>
        <h3>Nombre</h3>
        <Paragraph editable={{ onChange: setName }}>
          {name}
        </Paragraph>
      </div>
      <div>Email: {user.user.email}</div>
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