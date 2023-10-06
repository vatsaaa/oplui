import { useLoaderData } from 'react-router-dom';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Heading, SimpleGrid, Text } from '@chakra-ui/react';

export default function Dashboard() {
    const listings = useLoaderData()

    return (
        <SimpleGrid spacing={10} minChildWidth="300px">
            {/* This part of code works only if listings has some data
            also, listings has to be an array */}
            {listings && listings.map(listing => (
                <Card key={listing.id} borderTop="8px" borderColor="blue.200" bg="white">
                    <CardHeader>
                        <Flex gap={5}>
                            <Box>
                                <Heading as="h3" size="sm">{listing.title}</Heading>
                                <Text>by {listing.brand}</Text>
                            </Box>
                        </Flex>
                    </CardHeader>
                    <CardBody color="gray.500">
                        <Text>{listing.description}</Text>
                    </CardBody>
                    <Divider borderColor="gray.200"></Divider>
                    <CardFooter>
                        <HStack>
                            <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                            <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
                        </HStack>
                    </CardFooter>
                </Card>
            ))}
        </SimpleGrid>
    )
}

export const productsLoader = async() => {
    // TODO: Below is only a test function, need to implement production function
    // Call test or production function based on environment type set at start-up
    const res = await fetch('http://localhost:3001/listings')

    return res.json()
}