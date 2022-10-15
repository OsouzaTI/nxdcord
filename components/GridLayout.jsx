import { Box, Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Chat from "./Chat";
import Chats from "./Chats";
import FriendsOnline from "./FriendsOnline";
import InputSearch from "./InputSearch";
import UserImage from "./UserImage";

export default function GridLayout({children}) {

    return (
        <Grid 
            h={"100vh"}
            templateColumns={'repeat(3, 1fr)'}
            backgroundColor={'#fff'}
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
                <VStack mt={4} gap={4} w={'full'}>
                    <InputSearch placeholder={'Search friends'} leftIcon={<FaSearch color={'#cccccc'} />} />
                    <Chat />
                </VStack>
            </GridItem>
            <GridItem></GridItem>            
        </Grid>
    );

}