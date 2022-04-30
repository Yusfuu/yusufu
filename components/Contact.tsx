import { Link, Text, Stack, Heading, Button, chakra } from '@chakra-ui/react';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';

import { SlideInView } from './SlideInView';

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
            I'm currently specializing in.
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
          <Stack isInline spacing={4}>
            {social.map(({ href, name, icon }) => (
              <Link key={href} href={href} isExternal>
                <Button leftIcon={icon} className='capitalize' color='white'>
                  {name}
                </Button>
              </Link>
            ))}
          </Stack>
        </SlideInView>
      </Stack>
    </>
  );
};
