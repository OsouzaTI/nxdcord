import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { fullDate } from "../helpers/date_format";

export default function FileDescription({name, url, size, date}) {
    return (
        <HStack w={'xs'} justifyContent={'space-around'}>
            <Image w={16} h={16} src={url}></Image>
            <VStack>
                <Text w={'full'} textAlign={'start'}>{name}</Text>
                <Text>{fullDate(date)}</Text>
            </VStack>
            <Text>{size}kb</Text>
        </HStack>
    )
}