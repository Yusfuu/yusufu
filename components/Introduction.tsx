import { Text, Stack, Heading, Box, SlideFade, Image } from '@chakra-ui/react';
import { Social } from './Social';

export const Introduction = () => {
  return (
    <Stack className='justify-center items-start' spacing='144px'>
      <Stack spacing={10} className='justify-start items-start'>
        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}>
          <Box className='relative'>
            <Image
              src='/dots.svg'
              w={{ base: '70px', md: '150px' }}
              top={{ base: '0', md: '-15' }}
              left={{ base: '-5', md: '-10' }}
              alt='dots'
              className='absolute z-0 invert-[0.1]'
            />
            <Text className='relative text-3xl z-10 font-medium'>
              Hey there! 👋, I&apos;m-
            </Text>
          </Box>
          <Heading
            fontSize='display'
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            style={{ lineHeight: 'normal' }}
            className='relative leading-normal z-10 text-white text-transparent bg-clip-text bg-gradient-to-r from-[#007CF0] to-[#00DFD8]'>
            Youssef Hajjari.
          </Heading>
        </SlideFade>

        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}>
          <Heading
            className='font-medium whitespace-pre-wrap'
            color='textSecondary'
            fontSize='display2'
            letterSpacing='-1.6px'>
            <Box color='displayColor' as='span'>
              Full Stack <span className='text-yellow-300'>javascript</span>{' '}
              developer.
              <br />
            </Box>
            A self-taught {'developer with an\ninterest in Computer Science.'}
          </Heading>
        </SlideFade>

        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}>
          <Text fontSize='display3' color='textSecondary'>
            🚀 Exploring opportunities and side projects.
          </Text>
        </SlideFade>
        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}>
          <Social />
        </SlideFade>
      </Stack>
    </Stack>
  );
};
