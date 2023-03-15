import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero';

export default function Home() {
  const siteTitle = "My WebClass.org | Home Page"
  return (
    <Layout home>
      <Hero />      
    </Layout>
  );
}

