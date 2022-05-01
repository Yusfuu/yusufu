import {
  Text,
  Stack,
  Heading,
  Box,
  Image,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { SlideInView } from './SlideInView';

export const About = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      <SlideInView>
        <Stack spacing={4}>
          <Heading fontSize='2xl'>About Me 🚀</Heading>
          <Text
            color='textSecondary'
            fontSize={{ base: '14px', md: '16px' }}
            whiteSpace='pre-line'>
            With IT Domaine, I am highly motivated and have a strong passion for
            web development.
            <br />
            <br />
            I&apos;ve gained a lot of experience from youcode school internships
            and projects, and I&apos;m also a quick learner who isn&apos;t
            hesitant to try out new technologies as well as problem-solving
            abilities that are intuitive.
            <br />
            I&apos;ve worked with a lot of frameworks, Especially express in
            node js, React in JavaScript, and Laravel in PHP, for the versioning
            part I used Git, GitHub and for the testing part used jest.
            <br /> Youcode Projects Helped me a lot to strengthen my skills in
            Those Technologies, Team working, and team management as I was
            almost the lead in all of my groups.
          </Text>
        </Stack>
      </SlideInView>
      <SlideInView>
        <Flex alignItems='center' justifyContent='center' position='relative'>
          <Box
            maxW={{ base: '300px', lg: '350px' }}
            maxH={{ base: '300px', lg: '350px' }}>
            <Image
              src='/dots.svg'
              className='absolute top-0 right-0 z-30 invert-[0.1] w-40'
              alt='js'
            />
            <Image
              src='yusfuu.jpeg'
              w={{ base: '300px', lg: '350px' }}
              h={{ base: '300px', lg: '350px' }}
              alt='Youssef Hajjari'
              className='object-cover rounded-full'
            />
          </Box>
        </Flex>
      </SlideInView>
    </SimpleGrid>
  );
};
