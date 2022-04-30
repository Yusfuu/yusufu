import { Text, Stack, chakra } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Stack className='items-center mt-24 mb-10'>
      <Text className='text-center text-sm'>
        Designed and Developed by Youssef Hajjari.
        <br />
        Built with{' '}
        <chakra.span fontWeight='semibold' color='button1'>
          Next.js
        </chakra.span>{' '}
        &{' '}
        <chakra.span fontWeight='semibold' color='button1'>
          Chakra UI
        </chakra.span>
        . Hosted on{' '}
        <chakra.span fontWeight='semibold' color='button1'>
          Vercel
        </chakra.span>
        .
      </Text>
    </Stack>
  );
};
