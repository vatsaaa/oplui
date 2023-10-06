import { Heading, Image, Text } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import logo from '../assets/light-bulb.svg';

const Header = () => {
  const [ isNotSmallScreen ] = useMediaQuery("(mid-width:600px)");

  return (
    <>
      <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
      <Heading color='white' marginBottom='1rem'>
        Online Product Listing
      </Heading>
      <Text fontSize={18} textAlign='center'>
        Provide semi-colon ';' separated search phrases for your products
      </Text>
    </>
  );
};

export default Header;
