import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';

export const siteTitle = 'Next.js Sample Website';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Try', href: '/try' },
    { name: 'Blog', href: '/blog' },

    
]

export default function Layout({ children, home }) {

    return (
        <div className={styles.container}>
            <Head>
                <Link rel="icon" href="/" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header navigation={navigation} />
            
            <main>

                {children}

            </main>
            <Footer />
        </div>
    );
}