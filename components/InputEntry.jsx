import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function InputEntry({leftIcon, onClick, ...props}) {

    return (
        <InputGroup>
            <InputLeftElement cursor={'pointer'} onClick={onClick} children={leftIcon} />
            <Input variant={'outline'} {...props} />
        </InputGroup>
    );

}