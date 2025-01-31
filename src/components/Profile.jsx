import React from 'react'
import ProfileCard from './ProfileCard';
import { useSelector } from 'react-redux';
import CardUser from './CardUser';

const Profile = () => {
  const user = useSelector(store => store.user);
  return user && (
    <div className='justify-center  flex h-full'>
      <ProfileCard user={user}/>
    </div>
  )
}

export default Profile;