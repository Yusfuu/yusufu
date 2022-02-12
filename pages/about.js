import Link from 'next/link'
import Layout from '@/components/layout'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Index() {
  const { theme } = useTheme()
  const rightArrowLink = `https://s.svgbox.net/hero-solid.svg?ic=arrow-right&fill=${
    theme === 'dark' ? '000' : 'fff'
  }`
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
          <meta rel="og:description" content="About Me | Yusfuu" />
          <meta name="description" content="About Me | Yusfuu" />
        </Head>
        <h1 className="page-title-design">About</h1>
        <div className="overflow-hidden w-28 h-28 duration-500 transform cursor-pointer group-hover:shadow-xl hover:scale-100 rounded-full">
          <Image
            src="https://pbs.twimg.com/profile_images/1471646681082990593/DBu9tgLk_400x400.jpg"
            alt="Cover image for playground section"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="mt-6 text-lg font-normal text-black lg:mt-16">
          <p>
            Engineering Manager working on @GoogleChrome • Husband & Dad • Great
            user experiences ⚡• Developer tooling, Frameworks & CMS, Core Web
            Vitals
          </p>
        </div>
        <div className="mt-6">
          <Link href="/yh_resume.pdf" passHref={true}>
            <button className="flex items-center p-4 mt-4 font-medium text-white transition duration-300 bg-black border-2 border-black cursor-pointer dark:bg-white dark:text-black rounded-xl hover:opacity-80">
              <div className="pr-2">My Resume</div>
              <div>
                <img
                  src={rightArrowLink}
                  width="20"
                  height="20"
                  alt="right arrow icon"
                />
              </div>
            </button>
          </Link>
        </div>
      </Layout>
    </>
  )
}
