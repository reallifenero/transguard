import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Login() {
  const [show, setShow] = useState(false);

  const [input, setInput] = useState('');

  const handleInputChange = (e: any) => setInput(e.target.value);

  const handleClick = () => setShow(!show);

  return (
    <Flex>
      <Image src="/LoginImg.png" boxSize="100vh" w="50vw" objectFit="cover" />
      <Flex py="83px" w="50vw" align="center" direction="column">
        <Image
          src="Transguard1.png"
          boxSize="197px"
          w="335px"
          objectFit="cover"
        />

        <Center mt="45px" flexDir="column" w="full" px="5vw">
          <Text color="#002A46" fontSize="7xl" fontWeight="600">
            Login
          </Text>

          <FormControl mt="50px">
            <FormLabel>Email address</FormLabel>
            <Input type="email" rounded="full" size="lg" mb="35px" />

            <FormLabel>Password</FormLabel>
            <InputGroup size="lg">
              <Input
                pr="4.5rem"
                rounded="full"
                type={show ? 'text' : 'password'}
              />

              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Center>
      </Flex>
    </Flex>
  );
}
