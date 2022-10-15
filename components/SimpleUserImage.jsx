import { Avatar, AvatarBadge, Heading, HStack, Text, VStack } from "@chakra-ui/react";

import { RiGithubFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'

export default function SimpleUserImage({isOnline = false, badgeSize = '6', badgePlacement = 'bottom-end', ...props}) {
   
    return (
        <VStack>
            <Avatar {...props}>
                <AvatarBadge placement={badgePlacement} border={'2px'} bg={isOnline ? 'green.500' : 'red.500'} boxSize={badgeSize} />
            </Avatar>
        </VStack>
    )

}