import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

import { useState } from 'react';
import { CSVLink } from "react-csv";

import { Box, Container, Td, Tr } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';
import TextInput from './TextInput';
import KeywordsTable from './KeywordsTable';

const headers = [
  { label: "Search Phrase/s", key: "search_phrase" },
  { label: "Title", key: "title" },
  { label: "Description", key: "details" },
  { label: "Keywords", key: "keywords" }
];

export default function Homepage() { 
  const [keywords, setKeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    let options = {} // declared here to ensure this remains in scope later
    let reqUuid = uuidv4();

    if (import.meta.env.VITE_DEV) { // Default mode i.e. .env.example has this set to true
      options["method"] = 'GET';
      options["headers"] = {
          'Content-Type': 'application/json'
      };
      import.meta.env.VITE_OPL_API_URL = import.meta.env.VITE_OPL_API_GET_LISTINGS_URL
    } else {
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

    if(import.meta.env.VITE_DEV) {
      axios.get(import.meta.env.VITE_OPL_API_URL, options).then(
        response => {
          const csvReport = {
            data: response.data,
            headers: headers,
            filename: import.meta.env.VITE_OPL_OP_FILE_NAME
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
      axios.post(import.meta.env.VITE_OPL_API_URL, options["body"]).then(
        response => {
          console.log(response.data);
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
