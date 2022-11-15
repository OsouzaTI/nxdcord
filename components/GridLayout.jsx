import { Box, Flex, Grid, GridItem, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { dayMonthYear } from "../helpers/date_format";
import Chat from "./Chat";
import Chats from "./Chats";
import FriendsOnline from "./FriendsOnline";
import InputEntry from "./InputEntry";
import UserImage from "./UserImage";
import { AiOutlineBell } from 'react-icons/ai'
import SharedFiles from "./SharedFiles";
import { useContext } from "react";
import JWTContext from "../contexts/jwtContext";
import ChatContext from "../contexts/chatContext";

export default function GridLayout({children}) {

    const {user} = useContext(JWTContext);
    const {chatController} = useContext(ChatContext);

    return (
        <Grid 
            h={"100vh"}
            templateColumns={'repeat(3, 1fr)'}
            backgroundColor={'#fff'}
            overflow={'hidden'}
        >
            {/* parte lateral do site */}
            <GridItem>
                <VStack gap={10}>
                    <UserImage size={'xl'} iconsize={'30'} name={user.username} src={user.photo} />
                    <FriendsOnline />
                    <Chats />
                </VStack>
            </GridItem>
            {/* conteudo do meio */}
            <GridItem>
                <VStack gap={4} w={'full'} h={'full'}>
                    <InputEntry placeholder={'Search friends'} leftIcon={<FaSearch color={'#cccccc'} />} />
                    <Chat />
                </VStack>
            </GridItem>
            {/* terceira coluna */}
            <ChatContext.Consumer>
                {({chatController}) => {
                    const {id, username, photo} = chatController;
                    if(id != 0) {
                        return (
                            <GridItem>
                                <VStack h={'full'} justifyContent={'center'}>
                                    <Box w={'sm'} h={'full'}>
                                        <Grid h={'full'}>
                                            
                                            <GridItem>
                                                <VStack h={'xs'}>
                                                    <HStack w={'full'} justifyContent={'space-between'} p={8}>
                                                        <Text>{dayMonthYear()}</Text>
                                                        <AiOutlineBell size={24} />
                                                    </HStack>
                                                    <UserImage size={'xl'} iconsize={'30'} name={username} src={photo} />
                                                </VStack>
                                            </GridItem>
                
                                            
                                            <GridItem>
                                                <VStack h={'xs'}>
                                                    <Text p={4} textAlign={'start'} w={'full'} fontWeight={'bold'}>Shared Files</Text>
                                                    <SharedFiles overflowY={'auto'} />
                                                </VStack>
                                            </GridItem>
                
                                            <GridItem>
                                                <VStack h={'2xs'}>
                                                    <Text p={4} textAlign={'start'} w={'full'} fontWeight={'bold'}>Shared Links</Text>
                                                    <SharedFiles overflowY={'auto'} />                                
                                                </VStack>
                                            </GridItem>
                
                                        </Grid>
                                    </Box>
                                </VStack>
                            </GridItem>
                        )
                    }
                }}
            </ChatContext.Consumer>                        
        </Grid>
    );

}