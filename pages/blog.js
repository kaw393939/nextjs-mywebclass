import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../libs/posts';
import Summary from '../components/summary';
import Hero from '../components/hero';
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Blog({ allPostsData }) {
  const siteTitle = "My WebClass.org | Blog"
  return (
    <Layout Blog>
            
      {/* Add this <section> tag below the existing <section> tag */}
      <h1 className="text-3xl font-bold underline">Blog</h1>  
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
        <Summary allPostsData={allPostsData}/>
        </ul>
      </section>
    </Layout>
  );
}

