import { Avatar, AvatarBadge, Heading, HStack, Text, VStack } from "@chakra-ui/react";

import { RiGithubFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'

export default function UserImage({isOnline = false, badgePlacement = 'bottom-end', ...props}) {
   
    return (
        <VStack>
            <Avatar {...props}>
                <AvatarBadge right={4} placement={badgePlacement} border={'2px'} bg={isOnline ? 'green.500' : 'red.500'} boxSize={4} />
            </Avatar>
            <Text fontSize={'2xl'}>{props.name}</Text>
            <HStack justifyContent={'space-between'}>
                <RiGithubFill size={props.iconSize}/>
                <RiInstagramFill size={props.iconSize}/>
                <RiTwitterFill size={props.iconSize}/>
            </HStack>
        </VStack>
    )

}