import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import JWTContext from '../contexts/jwtContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [token, setToken] = useState('');

  return (
    <ChakraProvider>
      <JWTContext.Provider value={{token, setToken}}>
        <Component {...pageProps} />
      </JWTContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
