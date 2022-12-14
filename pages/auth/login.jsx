import { Button, FormControl, getToken, Grid, HStack, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useRef } from "react";

export default function Login() {   

    const userRef = useRef();
    const passRef = useRef();

    async function loginJWT() {

        const _data = {username: userRef.current.value, password: passRef.current.value};
        console.log(_data);

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { "Content-Type": "json/application"},
            body: JSON.stringify(_data)
        })

        const token = await response.json();
    
        // redireciona para a home
        window.location.href = `/?token=${token['token']}`;
    }

    return (
        <HStack h={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <FormControl w={'md'} p={10}>
                <VStack gap={2} alignItems={'start'}>
                    <Text fontWeight={'bold'}>Username</Text>
                    <Input colorScheme={'whiteAlpha'} ref={userRef} />
                    <Text fontWeight={'bold'}>Password</Text>
                    <Input colorScheme={'whiteAlpha'} type={'password'} ref={passRef} />
                    <HStack w={'full'} justifyContent={'center'}>
                        <Button onClick={loginJWT}>Entrar</Button>                    
                    </HStack>
                </VStack>
            </FormControl>
        </HStack>
    );

}  