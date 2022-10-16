import { Text, VStack } from "@chakra-ui/react";

import { FaSearch } from 'react-icons/fa'
import ChatPreview from "./ChatPreview";
import InputEntry from "./InputEntry";

export default function Chats() {

    return (
        <VStack gap={4}>
            <Text fontWeight={'bold'}>Chats</Text>
            <InputEntry placeholder={'Search chats'} leftIcon={<FaSearch color={'#cccccc'} />} />
            <VStack gap={4}>
                {Array(5).fill().map((_, i)=><ChatPreview />)}
            </VStack>
        </VStack>
    )

}