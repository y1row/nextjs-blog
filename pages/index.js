import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Link from "next/link";
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <div className="container">
                    <h1 className="title">
                        Read{' '}
                        <Link href="/posts/first-post">
                            <a>this page!</a>
                        </Link>
                    </h1>
                </div>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
        </Layout>
    )
}