import { Box, Flex, Grid, GridItem, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ChatMessage from "./ChatMessage";
import InputEntry from "./InputEntry";
import { FiSend } from "react-icons/fi"

export default function Chat() {

    const messages = Array(7).fill().map((_, i)=>{
        let d = new Date();
        d.setMinutes(i);
        return {isMe: i % 2 == 0, message: `message ${i}`, date: d};
    });
    
    return (
        <VStack w={'full'} h={'full'} alignItems={'start'}>
            <Text>Chat with</Text>
            <Text fontSize={'lg'} fontWeight={'bold'}>Dina Harrison</Text>
            <Grid 
                w={'full'} h={'full'}
                templateRows={'1.8fr 0.2fr'}>
                <GridItem maxH={'77vh'} overflowY={'auto'}>
                    <VStack gap={4} p={4}>
                        {messages.map((message, i)=><ChatMessage key={i} {...message} />)}
                    </VStack>
                </GridItem>
                <GridItem>
                    <HStack alignItems={'center'} justifyContent={'center'} h={'full'}>
                        <InputEntry placeholder={'Digite sua mensagem'} leftIcon={<FiSend color={'#cccccc'} />} />
                    </HStack>                    
                </GridItem>                
            </Grid>
        </VStack>
    );
}