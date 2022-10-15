import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function InputSearch({leftIcon, ...props}) {

    return (
        <InputGroup>
            <InputLeftElement pointerEvents={'none'} children={leftIcon} />
            <Input variant={'outline'} {...props} />
        </InputGroup>
    );

}