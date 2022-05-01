import type { NextPage } from 'next';
import { Stack, Flex } from '@chakra-ui/react';
import { Introduction } from '@/components/Introduction';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';
import { About } from '@/components/About';

const Home: NextPage = () => {
  return (
    <Flex className='justify-center flex-col'>
      <Stack
        className='items-start justify-center'
        spacing='114px'
        px={{ base: '5vw', md: '10vw' }}
        mt={{ base: '15vh', md: '22.5vh' }}>
        <Introduction />
        <About />
        <Contact />
      </Stack>
      <Footer />
    </Flex>
  );
};

export default Home;
