import { Link, Stack, Button } from '@chakra-ui/react';
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

export const Social = () => {
  return (
    <Stack isInline spacing={4}>
      {social.map(({ href, name, icon }) => (
        <Link key={href} href={href} isExternal>
          <Button leftIcon={icon} className='capitalize border' color='white'>
            {name}
          </Button>
        </Link>
      ))}
    </Stack>
  );
};
