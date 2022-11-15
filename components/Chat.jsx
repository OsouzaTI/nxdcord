import { Box, Flex, Grid, GridItem, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ChatMessage from "./ChatMessage";
import InputEntry from "./InputEntry";
import { FiSend } from "react-icons/fi"
import ChatContext from "../contexts/chatContext";
import { useContext, useEffect, useState } from "react";
import JWTContext from "../contexts/jwtContext";
import md5 from 'object-hash';
import io from 'socket.io-client';

let socket = null;

export default function Chat() {

    const [message, setMessage] = useState('');
    const {user} = useContext(JWTContext);
    const {chatController, getMessagesById, setChatController} = useContext(ChatContext);
    const [hash, setHash] = useState('');

    useEffect(()=>{
        // inicializando socket
        socketInitializer();
    }, [chatController.username])

    async function socketInitializer() {
        console.log('conectando ao socket');
        socket = io('http://localhost:3002');            
        
        if(chatController.username != 'global') {

            // criando a sala entre os dois usuarios
            let usernames = [user.username, chatController.username].sort();
            const hash = md5(usernames);
            setHash(hash);

            socket.emit('CONNECT_ROOM', hash);

            socket.on('REFRESH_MESSAGES', async () => {
                console.log('novas mensagens estão disponiveis...');
                const messages = await getMessagesById(chatController.id);
                setChatController({...chatController, messages: messages});
            });

        }

    }

    function sendMessage(destinationId) {
        socket.emit('SEND_MESSAGE', {
            hash: hash,
            usuario_id: user.id, 
            destino_id: destinationId,
            mensagem: message
        });
        setMessage('');
    }

    return (
        <ChatContext.Consumer>
            {({chatController}) => {
                const {id, username, photo, messages} = chatController;
                return (
                    <VStack w={'full'} h={'full'} alignItems={'start'}>
                        <Text>Chat with</Text>
                        <Text fontSize={'lg'} fontWeight={'bold'}>{username ?? 'global'}</Text>
                        <Grid 
                            w={'full'} h={'full'}
                            templateRows={'1.8fr 0.2fr'}>
                            <GridItem maxH={'77vh'} overflowY={'auto'}>
                                <VStack gap={4} p={4}>
                                    {messages.map((message, i)=><ChatMessage key={i} isMe={user.id==message.usuario_id} {...message} />)}
                                </VStack>
                            </GridItem>
                            <GridItem>
                                <HStack alignItems={'center'} justifyContent={'center'} h={'full'}>
                                    <InputEntry onClick={()=>sendMessage(id)}
                                        onChange={(({target})=>setMessage(target.value))}
                                        value={message} placeholder={'Digite sua mensagem'}
                                        leftIcon={<FiSend color={'#cccccc'} />} />
                                </HStack>                    
                            </GridItem>                
                        </Grid>
                    </VStack>
                )
            }}
        </ChatContext.Consumer>
    );
}