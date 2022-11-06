import { Button, FormControl, Grid, HStack, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react";
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
        
        //
        
        // redireciona para a home
        window.location.href = '/';
    }

    return (
        <HStack h={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <FormControl w={'md'} textAlign={'center'}>
                <VStack gap={2}>
                    <Text fontWeight={'bold'}>Username</Text>
                    <Input shadow={'md'} variant={'outline'} ref={userRef} />
                    <Text fontWeight={'bold'}>Password</Text>
                    <Input type={'password'} shadow={'md'} variant={'outline'} ref={passRef} />
                    <Button onClick={loginJWT}>Sexo</Button>
                </VStack>
            </FormControl>
        </HStack>
    );

}