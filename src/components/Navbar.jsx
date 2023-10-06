import { Box, Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex as="nav" p="5px" alignItems="center">
        <Heading />
        <Spacer></Spacer>
        <HStack spacing="20px">
            {/* TODO: Box or Button? */}
            <Button borderRadius="8px" colorScheme="blue" bg="blue.500" p="10px"><Text color="white">AV</Text></Button>
            <Text colorScheme="blue" color="blue.600">ankur.vatsa@gmail.com</Text>
            <Button bg="blue.500" colorScheme="blue"><Text color="white">Logout</Text></Button>
        </HStack>
    </Flex>
  )
}
