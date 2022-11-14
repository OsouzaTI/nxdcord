import styles from '../styles/Home.module.css'
import GridLayout from '../components/GridLayout'
import { setCookie, getCookie } from 'cookies-next';
import { useContext } from 'react';
import JWTContext from '../contexts/jwtContext';
import { useEffect } from 'react';
import UsersContext from '../contexts/usersContext';
import { getAllFriends } from '../helpers/database/friends';

export default function Home({userPayload, friends, token}) {

  const {setUser} = useContext(JWTContext);
  const {setFriends} = useContext(UsersContext);

  useEffect(()=>{
    // salvando o payload do usuario no contexto
    setUser(userPayload);
    // salvando lista de amigos
    setFriends(friends);
  }, [])
  

  return (
    <GridLayout></GridLayout>    
  )
}



export async function getServerSideProps(context) {

  const token = context.query.token ?? '';
  
  // validacao
  const response = await fetch('http://localhost:3001/validation', {
    method:'POST',
    headers: {
      'authorization': `token ${token}`
    }
  });
  
  let userPayload = {};  
  let friends = {};

  if(response.status == 200) {

    setCookie('token', token, {sameSite: true});    
    // payload do login JWT
    userPayload = await response.json();
    // todos os amigos
    friends = await getAllFriends(userPayload.id);

  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/auth/login',
      },
      props: {}
    }
  }

  return {
    props: {userPayload, friends, token}, // will be passed to the page component as props
  }
}
