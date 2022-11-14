import { Text, VStack } from "@chakra-ui/react";
import FileDescription from "./FileDescription";

export default function SharedFiles(props) {

    const sharedFiles = Array(2).fill().map((_, i) => {
        return {
            name: `file${i}`,
            url: 'https://preview.redd.it/fj7zd82uh7z01.jpg?auto=webp&s=75081151739e771a8c2a4076b1bc0ff904608800',
            date: new Date(),
            size: (i + 2) * 32,
        };
    });

    return (
        <VStack {...props}>
            {sharedFiles.map((file, i)=><FileDescription key={i} {...file} />)}
        </VStack>
    );

}