import { Avatar, AvatarBadge, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { setCookie, getCookie } from 'cookies-next';
import Link from 'next/link'
import { useContext } from "react";
import ChatContext from "../contexts/chatContext";
import UsersContext from "../contexts/usersContext";

export default function SimpleUserImage({isOnline = false, badgeSize = '6', badgePlacement = 'bottom-end', id, ...props}) {
    
    const {getFriendById} = useContext(UsersContext);
    const {setChatController, getMessagesById} = useContext(ChatContext);

    async function changeChatController() {
        const friend = getFriendById(id);
        const messages = await getMessagesById(id);
        setChatController({...friend, messages: messages});
    }

    return (        
        <VStack onClick={changeChatController} cursor={'pointer'}>
            <Avatar {...props}>
                <AvatarBadge placement={badgePlacement} border={'2px'} bg={isOnline ? 'green.500' : 'red.500'} boxSize={badgeSize} />
            </Avatar>
        </VStack>        
    )

}