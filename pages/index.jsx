import styles from '../styles/Home.module.css'
import GridLayout from '../components/GridLayout'
import { setCookie, getCookie } from 'cookies-next';

export default function Home() {
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
  
  if(response.status == 200) {
    setCookie('token', token, {sameSite: true});    
  } else {
    setCookie('token', false, {sameSite: true}); 
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}
