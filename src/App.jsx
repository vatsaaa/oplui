import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import { Container, Box, Tr, Td } from '@chakra-ui/react';
import { CSVLink, CSVDownload } from "react-csv";

import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import KeywordsTable from './components/KeywordsTable';

const headers = [
  { label: "Search Phrase/s", key: "search_phrase" },
  { label: "Title", key: "title" },
  { label: "Description", key: "details" },
  { label: "Keywords", key: "keywords" }
];

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
      console.log("Running in DEV mode");
      options["method"] = 'GET';
      options["headers"] = {
          'Content-Type': 'application/json'
      };
      import.meta.env.VITE_OPL_API_URL = import.meta.env.VITE_OPL_API_GET_LISTINGS_URL
    }
    else {
      console.log("Running in PROD mode");
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

    console.log("URL:" + import.meta.env.VITE_OPL_API_URL);

    if(import.meta.env.VITE_DEV) {
      axios.get(import.meta.env.VITE_OPL_API_URL, options).then(
        response => {
          const csvReport = {
            data: response.data,
            headers: headers,
            filename: 'output/opfile.csv'
          };

          let tableRows = response.data.map(tr => {
            const dispTitle = tr["title"];
            const dispDetails = tr["details"];
            
            let dispKeywords = "";
            let i = 0;
            do {
              dispKeywords = dispKeywords + tr["keywords"][i] + ", ";
              i++;
            } while (i < 5); // We only need to show 5 of these in UI

            // TODO: Keywords column can be clicked to download 
            // the file, change it to show only one link instead
            return(
              <Tr>
                <Td>{tr["search_phrase"]}</Td>
                <Td>{dispTitle.split(' ').slice(0, 5).join(' ')}...</Td>
                <Td>{dispDetails.split(' ').slice(0, 5).join(' ')}...</Td>
                <Td><CSVLink {...csvReport}>{dispKeywords}...</CSVLink></Td>
              </Tr>
            );
          });
          setKeywords(tableRows);
          setLoading(false);
        }
      );
    } else {
      axios.get(import.meta.env.VITE_OPL_API_URL, options).then(
        response => {
          let tableRows = response.data.map(tr => {
            return(
              <Tr>
                <Td>{tr["search_phrase"]}</Td>
                <Td>{tr["title"]}</Td>
                <Td>{tr["details"]}</Td>
                <Td>{tr["keywords"]}</Td>
              </Tr>
            );
          });
          setKeywords(tableRows);
          setLoading(false);
        }
      );
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box bg='blue.600' color='white' height='120vh' paddingTop={130}>
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
