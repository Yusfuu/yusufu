import { Text, Stack, Heading, chakra } from '@chakra-ui/react';
import { SlideInView } from './SlideInView';
import { Social } from './Social';

export const Contact = () => {
  return (
    <>
      <Stack className='justify-center items-center w-full' spacing={10}>
        <SlideInView>
          <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign='center'>
            Keep In Touch.
          </Heading>
        </SlideInView>

        <SlideInView>
          <Text fontSize='md' color='textSecondary' textAlign='center'>
            I&apos;m currently specializing in.
            <chakra.span
              color='button1'
              display={{ base: 'block', md: 'inline' }}>
              {' '}
              Javascript Development
            </chakra.span>
            <br />
            Feel free to get in touch and talk more about your projects.
          </Text>
        </SlideInView>

        <SlideInView>
          <Social />
        </SlideInView>
      </Stack>
    </>
  );
};
