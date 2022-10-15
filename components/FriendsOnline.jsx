import { HStack, Text, VStack } from "@chakra-ui/react";
import SimpleUserImage from "./SimpleUserImage";
import UserImage from "./UserImage";

export default function FriendsOnline() {
    return (
        <VStack>
            <HStack justifyContent={'space-between'} w={'full'} fontWeight={'bold'}>
                <Text>Friends Online</Text>
                <Text>23</Text>
            </HStack>
            <HStack justifyContent={'space-between'} gap={2} w={'full'}>
                <SimpleUserImage badgeSize={"4"} badgePlacement={'top-end'} src={'https://bit.ly/dan-abramov'} />
                <SimpleUserImage badgeSize={"4"} badgePlacement={'top-end'} src={'https://bit.ly/dan-abramov'} />
                <SimpleUserImage badgeSize={"4"} badgePlacement={'top-end'} src={'https://bit.ly/dan-abramov'} />
                <SimpleUserImage badgeSize={"4"} badgePlacement={'top-end'} src={'https://bit.ly/dan-abramov'} />                
            </HStack>
        </VStack>
    );
}