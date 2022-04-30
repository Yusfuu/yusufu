import type { NextPage } from 'next';
import Head from 'next/head';
import { Stack, Flex } from '@chakra-ui/react';

import { Introduction } from '@/components/Introduction';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';
import { About } from '@/components/About';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Youssef Hajjari - Javascript Developer </title>
        <meta name='robots' content='follow, index' />
        <meta name='keywords' content='youssef hajjari, javascript developer' />
        <meta content='full stack javascript developer' name='description' />
        <meta property='og:type' content='website' />

        <meta
          property='og:description'
          content='full stack javascript developer'
        />
        <meta
          property='og:title'
          content='Youssef Hajjari - full stack javascript developer'
        />
        <meta property='og:url' content='yusfuu.jpeg' />
        <link rel='canonical' href='yusfuu.jpeg' />
        <meta property='og:site_name' content='Youssef Hajari' />
        <meta
          property='twitter:description'
          content='full stack javascript developer'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@Yosufuu' />
        <meta property='twitter:url' content='https://twitter.com/Yosufuu' />
      </Head>
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
    </>
  );
};

// function LatestArticle({ articles }) {
//   return (
//     <Stack
//       spacing={5}
//       w='100%'
//       // display={articles.length < 2 ? 'none' : 'block'}
//     >
//       <SlideUpWhenVisible>
//         <Flex alignItems='center' justifyContent='space-between'>
//           <Heading fontSize={{ base: 'xl', md: '2xl' }} fontFamily='Ubuntu'>
//             📰 Latest Article.
//           </Heading>
//           {/* <NextLink href="/projects">
//             <Link>
//               <Text fontSize={{ base: 'sm', md: 'md' }}>
//                 View all articles &rarr;
//               </Text>
//             </Link>
//           </NextLink> */}
//         </Flex>
//       </SlideUpWhenVisible>
//       <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ base: 2, md: 4 }}>
//         {[''].map((article, index) => (
//           <SlideUpWhenVisible>
//             <Link
//               href={'/blog/'}
//               _hover={{ textDecoration: 'none' }}
//               _focus={{ outline: 'none' }}
//               w='100%'>
//               <Stack
//                 direction='column'
//                 alignItems='flex-start'
//                 bg='secondary'
//                 _hover={{ bg: '#111' }}
//                 transition='0.3s'
//                 border='1px'
//                 borderColor={{ base: '#333', md: 'borderColor' }}
//                 borderRadius='10px'
//                 p={5}
//                 justifyContent='flex-start'>
//                 <Text
//                   color='displayColor'
//                   fontSize={{ base: 'md', md: 'xl' }}
//                   fontWeight='bold'
//                   cursor='pointer'>
//                   azazazza
//                 </Text>
//                 {/* <Text color="textSecondary" fontSize="sm">
//                   {dateFormat(Date.parse(article.fields.date), 'mmmm d yyyy')}{' '}
//                   <Box as="span" fontSize="xs">
//                     &bull;
//                   </Box>{' '}
//                   2 min read
//                 </Text> */}
//               </Stack>
//             </Link>
//           </SlideUpWhenVisible>
//         ))}
//       </SimpleGrid>
//     </Stack>
//   );
// }

export default Home;
