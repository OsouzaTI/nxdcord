import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { hoursFormat } from "../helpers/date_format";

export default function ChatMessage({isMe, mensagem, created_at}) {

    return (
        <Flex w={'full'} justifyContent={isMe ? 'end' : 'start'}>
            <VStack alignItems={isMe ? 'start' : 'end'} backgroundColor={isMe ? 'blue.100' : 'gray.300'} rounded={'lg'} minW={'md'} p={5}>
                <Box textAlign={isMe ? 'end' : 'start'} w={'full'}>{mensagem}</Box>
                <Text>{hoursFormat(new Date(created_at))}</Text>
            </VStack>
        </Flex>
    );
}