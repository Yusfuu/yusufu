import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,
} from '@chakra-ui/react';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';

const social = [
  {
    name: 'github',
    href: 'https://github.com/Yusfuu',
    icon: <GitHubLogoIcon />,
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/youssef-hajjari',
    icon: <LinkedInLogoIcon />,
  },
  {
    name: 'email',
    href: 'mailto:youssefhajjari01@gmail.com',
    icon: <EnvelopeClosedIcon />,
  },
];

export const Introduction = () => {
  return (
    <Stack className='justify-center items-start' spacing='144px'>
      <Stack spacing={10} className='justify-start items-start'>
        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}>
          <Box className='relative'>
            <Image
              src='https://svgsilh.com/svg/26432.svg'
              filter='invert(0.1)'
              w={{ base: '70px', md: '150px' }}
              position='absolute'
              top={{ base: '0', md: '-15' }}
              left={{ base: '-5', md: '-10' }}
              zIndex={0}
              alt=''
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
            </Box>{' '}
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
          <Stack isInline spacing={4}>
            {social.map(({ href, name, icon }) => (
              <Link key={href} href={href} isExternal>
                <Button leftIcon={icon} className='capitalize' color='white'>
                  {name}
                </Button>
              </Link>
            ))}
          </Stack>
        </SlideFade>
      </Stack>
    </Stack>
  );
};
