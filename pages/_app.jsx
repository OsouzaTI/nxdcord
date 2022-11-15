import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ChatContext from '../contexts/chatContext';
import JWTContext from '../contexts/jwtContext'
import UsersContext from '../contexts/usersContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // meu usuario
  const [user, setUser] = useState({});
  // meus amigos (no caso todos os usuarios)
  const [friends, setFriends] = useState([{}]);
  // controle global do chat
  const [chatController, setChatController] = useState({
    id: 0,
    username: 'global',
    photo: null,
    messages: []
  });

  function getFriendById(id) {
    const filter = friends.filter(v => v.id == id);
    return filter.length > 0 ? filter[0] : null;
  }

  async function getMessagesById(id) {
    const response = await fetch('http://localhost:3001/user/messages', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({usuario_id: user.id, destino_id: id})
    });
    const messages = await response.json();
    return messages;
  }

  return (
    <ChakraProvider>
      <JWTContext.Provider value={{user, setUser}}>
        <UsersContext.Provider value={{friends, setFriends, getFriendById}}>
          <ChatContext.Provider value={{chatController, setChatController, getMessagesById}}>
            <Component {...pageProps} />
          </ChatContext.Provider>
        </UsersContext.Provider>
      </JWTContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
