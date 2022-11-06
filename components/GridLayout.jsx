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

export default function GridLayout({children}) {

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
                    <UserImage size={'xl'} iconSize={'30'} name={'Dan Abrahmov'} src={'https://bit.ly/dan-abramov'} />
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
                                    <UserImage size={'xl'} iconSize={'30'} name={'Dan Abrahmov'} src={'https://bit.ly/dan-abramov'} />
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
        </Grid>
    );

}