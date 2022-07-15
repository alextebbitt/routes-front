import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Profile</h1>
      <div>Name: {user.user.name}</div>
      <div>Email: {user.user.email}</div>
      <div>Role: {user.user.role}</div>
    </div>
  )
}

export default Profile