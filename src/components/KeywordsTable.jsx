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
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';


const KeywordsTable = ({ keywords, loading, isOpen, closeModal }) => {
  return (
    <>
      <Modal size="6xl" isOpen={isOpen} onClose={closeModal} isCentered={true}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Listings</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' alignItems='center' justifyContent='center'>
            {loading ? (
              <CircularProgress isIndeterminate color='blue.300' />
            ) : (
              <TableContainer>
                <Table variant='striped' colorScheme='linkedin' sx={{ borderCollapse: 'collapse' }}>
                  <TableCaption>Listings</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Search Phrase</Th>
                      <Th>Keywords</Th>
                      <Th>Description</Th>
                      <Th>Title</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {keywords}
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>Search Phrase</Th>
                      <Th>Keywords</Th>
                      <Th>Description</Th>
                      <Th>Title</Th>
                    </Tr>
                  </Tfoot>
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
