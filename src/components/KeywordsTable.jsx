import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,

  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';


const KeywordsTable = ({ keywords, loading, isOpen, closeModal }) => {
  // const obj = JSON.parse(keywords);
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Keywords</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' alignItems='center' justifyContent='center'>
            {loading ? (
              <CircularProgress isIndeterminate color='blue.300' />
            ) : (
              <TableContainer>
                <Table variant='striped' colorScheme='blue'>
                  <TableCaption>Listings</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Search Phrase</Th>
                      <Th>Keywords</Th>
                      <Th>Description</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                  <Tr>
                    {/* <Td>{obj["search_phrase"]}</Td>
                    <Td>{obj["keywords"]}</Td>
                    <Td>{obj["details"]}</Td> */}
                  </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default KeywordsTable;
