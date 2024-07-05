import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../contexts/userContext/UserContext'
import { useParams } from 'react-router-dom';

const Profile = () => {
  const {user} = useContext(UserContext);
  const {userid} = useParams()
  const [selectedUser, setSelectedUser] = useState(null);


  
  useEffect(() => {
    setSelectedUser(user.find((u) => u.id.value === userid)); 

  }, [user])

  
  return (

    <div className='h-screen w-full  dark:bg-slate-900 flex items-center justify-center'>
      { !selectedUser ? <h1 className=' text-4xl font-bold dark:text-sky-500'>User Not Found! </h1>
      :<div className='px-72 py-20 border-2 bg-sky-200 border-sky-800 rounded-lg shadow-lg dark:bg-slate-600 flex flex-col items-center justify-center '>
      <img src={selectedUser.picture.large} alt={selectedUser.gender} className=' w-48 h-48 rounded-full shadow-lg mb-10' />
      <h1 className='dark:text-white text-3xl font-bold mb-5'>Name: {selectedUser.name.first} {selectedUser.name.last}</h1>
      <h3 className='dark:text-white text-xl font-bold mb-5'>Age: {selectedUser.dob.age}</h3>
      <h3 className='dark:text-white text-xl font-bold mb-5'>Address: {selectedUser.location.street.name}{selectedUser.location.city}{selectedUser.location.state}</h3>
      <h3 className='dark:text-white text-xl font-bold mb-5'>Email: {selectedUser.email}</h3>
      </div>}
    </div>
  )
}

export default Profile