import { Box, Text, VStack } from "@chakra-ui/react";
import ChatMessage from "./ChatMessage";

export default function Chat() {

    const messages = [
        Array(10).fill().map((_, i)=>{
            return {message: `message ${i}`, time: `18:${i}`};
        })
    ];
    
    return (
        <VStack w={'full'} alignItems={'start'}>
            <Text>Chat with</Text>
            <Text fontSize={'lg'} fontWeight={'bold'}>Dina Harrison</Text>
            <VStack h={'full'}>
                {messages.map((message, i)=><ChatMessage key={i} {...message} />)}
            </VStack>
        </VStack>
    );

}