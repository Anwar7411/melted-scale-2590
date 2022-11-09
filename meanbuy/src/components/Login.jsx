import React, { useState } from 'react'
import { Stack, HStack, VStack,Box ,Input,Container} from '@chakra-ui/react'
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  return (
    <Container>
    <VStack spacing={15}>
        <Box>Login or Create Account</Box>
        
        <Box>
            <Input type="email" placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Box>
        <Box>
            <Input type="password" focusBorderColor='lime' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Box>
    </VStack>
    </Container>
  )
}

export default Login