import { Button, FormControl, getToken, Grid, HStack, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import { useRouter } from 'next/router'

export default function SignIn() {   

    const userRef = useRef();
    const passRef = useRef();
    const router = useRouter();

    async function createAccount() {

        const data = {username: userRef.current.value, password: passRef.current.value};
        
        const response = await fetch('/api/user/add', {
            method: 'POST',
            headers: { "Content-Type": "json/application"},
            body: JSON.stringify(data)
        })

        if(response.status == 200) {
            router.push('/auth/login');
        } else {
            alert('Não foi possível criar conta.');
            userRef.current.value = '';
            passRef.current.value = '';
        }
        
        
    }

    return (
        <HStack h={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <FormControl w={'md'} textAlign={'center'}>
                <VStack gap={2} alignItems={'start'}>
                    <Text fontWeight={'bold'}>Username</Text>
                    <Input colorScheme={'whiteAlpha'} ref={userRef} />
                    <Text fontWeight={'bold'}>Password</Text>
                    <Input colorScheme={'whiteAlpha'} type={'password'} ref={passRef} />
                    <HStack w={'full'} justifyContent={'center'}>
                        <Button onClick={createAccount}>Criar</Button>                    
                    </HStack>
                </VStack>
            </FormControl>
        </HStack>
    );

}