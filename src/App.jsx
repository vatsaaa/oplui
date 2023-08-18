import {v4 as uuidv4} from 'uuid';
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
    let reqUuid = uuidv4();

    // Development mode is default, with local service it serves data from db.json
    // Start local service using following commands
    // 1. Add "VITE_DEV=TRUE" in environment file
    // Then, in a separate terminal run following
    // 2. node tools/createMockDb.js # Ensures a fresh data base is provisioned
    // 3. node tools/apiServer.js    # Starts a new server
    if (import.meta.env.VITE_DEV) {
      alert("Running in development mode...")
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
        num_of_products: 2,
        uuid: reqUuid
      });
      import.meta.env.VITE_OPL_API_URL = import.meta.env.VITE_OPL_API_POST_LISTINGS_URL
    }

    try {
      const response = await fetch(
        import.meta.env.VITE_OPL_API_URL,
        options
      );

      const jsonData = await response.json();

      let search_phrases = text
      let sp_array = search_phrases.split(";");

      let tableRows = sp_array.map(sp => {
        const trimmed_sp = sp.trim();
        const kw = jsonData[trimmed_sp]["keywords"].toString();
        const dtls = jsonData[trimmed_sp]["details"];
        const ttl = jsonData[trimmed_sp]["title"];

        return(
            <Tr>
                <Td>{trimmed_sp}</Td>
                <Td>{ttl}</Td>
                <Td>{dtls}</Td>
                <Td>{kw}</Td>
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
