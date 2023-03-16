import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';

export const siteTitle = 'Next.js Sample Website';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Try', href: '/try' },
    { name: 'Blog', href: '/blog' },
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register'}
    
]

export default function Layout({ children, siteTitle }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Header navigation={navigation} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}