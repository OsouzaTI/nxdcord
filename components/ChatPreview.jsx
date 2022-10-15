import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";

export default function ChatPreview() {

    return (
        <HStack>
            <Avatar size={'md'} src={"https://bit.ly/sage-adebayo"} />
            <VStack textAlign={'left'}>
                <Text fontWeight={'bold'} w={'full'}>Jubileu</Text>
                <Text>last message ... ?</Text>
            </VStack>
            <Text>8:10AM</Text>
        </HStack>
    );

}