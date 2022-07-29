import React from 'react';
import RegistrationPage from '../Component/RegistrationPage';
import {getSession} from 'next-auth/react';


const registrationPage = () => {
  return (
    <div>
        <RegistrationPage/>
  
    </div>
  )
}

export default registrationPage;

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      }
    }
  }
  return {
    props:{
      session
    }
  }
}