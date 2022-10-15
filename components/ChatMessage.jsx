import { Box, Text, VStack } from "@chakra-ui/react";

export default function ChatMessage({message, time}) {
    console.log(message, ' | ', time)
    return (
        <VStack>
            <Box>{message}</Box>
            <Text>{time}</Text>
        </VStack>
    );

}