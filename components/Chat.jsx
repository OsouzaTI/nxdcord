import { Box, Flex, Grid, GridItem, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ChatMessage from "./ChatMessage";
import InputEntry from "./InputEntry";
import { FiSend } from "react-icons/fi"
import ChatContext from "../contexts/chatContext";
import { useContext, useState } from "react";
import JWTContext from "../contexts/jwtContext";

import { socketConnection } from "../helpers/database/messages";

export default function Chat() {

    const [message, setMessage] = useState('');
    const {user} = useContext(JWTContext);

    return (
        <ChatContext.Consumer>
            {({id, username, messages}) => {
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
                                    <InputEntry onClick={()=>{
                                        const sock = socketConnection();
                                        sock.emit('teste', 'ola mundo');
                                    }}
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