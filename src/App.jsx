import { useState } from 'react';
import { Container, Box, Tr, Td } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import KeywordsTable from './components/KeywordsTable';

const App = () => { 
  const [keywords, setKeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    let options = {}

    // Development mode always accesses local service and serves data from db.json
    // Start local service using following two commands in a separate terminal
    // 1. node tools/createMockDb.js # Ensures a fresh data base is provisioned
    // 2. node tools/apiServer.js    # Starts a new server
    if (import.meta.env.DEV) {
      options["method"] = 'GET';
      options["headers"] = {
          'Content-Type': 'application/json'
      };
      import.meta.env.VITE_OPL_API_URL = import.meta.env.VITE_OPL_API_GET_LISTINGS_URL
    }
    else {
      options["method"] = 'POST';
      options["headers"] = {
          'Content-Type': 'application/json'
      };
      options["body"] = JSON.stringify({
        search_string: text,
        num_of_products: 10
      });
      import.meta.env.VITE_OPL_API_URL = import.meta.env.VITE_OPL_API_POST_LISTINGS_URL
    }

    try {
      const response = await fetch(
        import.meta.env.VITE_OPL_API_URL,
        options
      );

      const jsonData = await response.json();
      // response.choices[0].text
      const tableRows = jsonData.map(item => {
        return (
          <Tr>
            <Td>{item["search_phrase"]}</Td>
            <Td>{item["keywords"]}</Td>
            <Td>{item["details"]}</Td>
            <Td>{item["title"]}</Td>
          </Tr>
        );
      });

      setKeywords(tableRows);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsTable
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
};

export default App;
