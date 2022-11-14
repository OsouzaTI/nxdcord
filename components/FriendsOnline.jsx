import { HStack, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import UsersContext from "../contexts/usersContext";
import SimpleUserImage from "./SimpleUserImage";

export default function FriendsOnline() {

    const {friends} = useContext(UsersContext);

    return (
        <VStack>
            <HStack justifyContent={'space-between'} w={'full'} fontWeight={'bold'}>
                <Text>Friends Online</Text>
                <Text>23</Text>
            </HStack>
            <HStack justifyContent={'space-between'} gap={2} w={'full'}>
                {friends.map((friend, i)=>(
                    <SimpleUserImage key={i} id={friend.id} badgeSize={"4"} badgePlacement={'top-end'} src={friend.photo} />
                ))}            
            </HStack>
        </VStack>
    );
}