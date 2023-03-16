import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero';
import Head from 'next/head';
export default function Index() {
  const siteTitle = "My WebClass.org | Home Page"
  return (

    <Layout index siteTitle={siteTitle}>
      <Hero />
    </Layout>
  );
}

