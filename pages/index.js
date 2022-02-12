import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import Layout from '@/components/layout'

export default function Index() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  const twitterSvgTagLink = `https://s2.svgbox.net/social.svg?ic=twitter&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  return (
    <>
      <Layout>
        <Head>
          <meta
            property="twitter:description"
            content="Selected Work and Writings by ysufuu"
          ></meta>
          <meta
            property="og:description"
            content="Selected Work and Writings by ysufuu"
          ></meta>
          <meta
            name="description"
            content="Selected Work and Writings by ysufuu"
          ></meta>
          <title>yusfuu</title>
          <meta property="og:title" content="yusfuu"></meta>
        </Head>
        {/* <Fade bottom> */}
        <div className="mt-6 mb-12 lg:mt-16">
          <div className="overflow-hidden w-28 h-28 duration-500 transform cursor-pointer group-hover:shadow-xl hover:scale-100 rounded-full">
            <Image
              src="https://pbs.twimg.com/profile_images/1471646681082990593/DBu9tgLk_400x400.jpg"
              alt="Cover image for playground section"
              layout="fill"
              className="object-cover"
            />
          </div>
          <p className="mt-8 text-3xl font-medium text-left text-black md:text-4xl lg:text-6xl dark:text-white">
            Howdy! I’m Addy Osmani.
          </p>{' '}
          <p className="mt-8 text-xl font-normal text-left text-black md:text-xl lg:text-xl dark:text-white">
            I am a <b>Product Designer</b> and <b>Researcher</b> with a knack
            for building things. Currently building a Home for Data Teams at
            Atlan and finishing up my Master's Thesis with the HCI Division of
            Gothenburg University and IIIT Bangalore.
          </p>
          <div className="flex mt-2">
            <Link href="/about" passHref={true}>
              <button className="p-4 mt-4 mr-4 font-medium text-white transition duration-300 transform bg-black border-2 border-black cursor-pointer dark:bg-white dark:border-white dark:text-black rounded-xl hover:opacity-80">
                Know More
              </button>
            </Link>

            <Link href="https://twitter.com/Yosufuu" passHref={true}>
              <button className="flex items-center p-4 mt-4 text-black transition duration-300 transform border-2 border-black cursor-pointer dark:border-white dark:text-white rounded-xl hover:opacity-70">
                <div className="pr-2">
                  <img
                    src={twitterSvgTagLink}
                    width="22"
                    height="22"
                    alt="twitter logo"
                  />
                </div>
                <div className="font-medium"> Find me on Twitter</div>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-24 md:mt-36 lg:mt-48">
          <div className="home-page-title">Selected Work</div>
          <div>
            <Link href="https://dribbble.com/shots/17489628-GamePlay-Logo-Design-letter-G-and-P-with-Joystick-symbol/attachments/12626702?mode=media">
              <div className="mb-12 group">
                <div className="overflow-hidden duration-500 transform cursor-pointer group-hover:shadow-xl hover:scale-100 rounded-xl">
                  <Image
                    src="https://cdn.dribbble.com/users/1333218/screenshots/17489628/media/1f57c7ce5f7ee7e954545003a27cb5b8.jpg"
                    alt="Cover image for playground section"
                    width={1600}
                    height={900}
                    layout="responsive"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="mb-2 text-lg font-semibold leading-snug text-black  lg:text-xl dark:text-white">
                    Designing a Marketplace for Notion
                  </h3>
                  <p className="mb-2 text-base font-normal leading-snug text-black cursor-pointer lg:text-lg dark:text-white">
                    A case study on how would one go about building a
                    marketplace for Notion, made in Notion! Created as part of
                    Atlan's design assignment.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <Link href="https://dribbble.com/shots/17491485-Archon-Studio-Branding/attachments/12628675?mode=media">
            <div className="group">
              <div className="overflow-hidden duration-500 transform cursor-pointer group-hover:shadow-xl hover:scale-100 rounded-xl">
                <Image
                  src="https://cdn.dribbble.com/users/4540442/screenshots/17491485/media/567149ba0849b018395b767598732830.png"
                  alt="Cover image for playground section"
                  width={1600}
                  height={900}
                  layout="responsive"
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="mb-2 text-lg font-semibold leading-snug text-black  lg:text-xl dark:text-white">
                  Archon Studio Branding
                </h3>
                <p className="mb-2 text-base font-normal leading-snug text-black cursor-pointer lg:text-lg dark:text-white">
                  A thorough UX review of Zomato's 2019 redesign, conducted as
                  part of their UX Teardown Challenge.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-12 lg:mt-24">
          <div className="home-page-title">Playground</div>
          <Link href="/playground" passHref={true}>
            <div>
              <div className="overflow-hidden duration-500 transform cursor-pointer hover:shadow-xl hover:scale-100 rounded-xl">
                <Image
                  src="https://cdn.dribbble.com/users/2886970/screenshots/17488226/media/1d229b8fd55601827d204922e442e95a.png"
                  alt="Cover image for playground section"
                  width={1600}
                  height={900}
                  layout="responsive"
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="mb-2 text-base font-normal leading-snug text-black cursor-pointer lg:text-lg dark:text-white">
                  I tinker around and create visuals on various design tools.
                  From icons, illustrations, concept UI to donuts and unfinished
                  ideas, you will find everything here!
                </p>
              </div>
            </div>
          </Link>
        </div>
      </Layout>
    </>
  )
}
