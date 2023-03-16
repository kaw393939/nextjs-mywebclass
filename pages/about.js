import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';



export default function About({ allPostsData }) {
    const siteTitle = "My WebClass.org | About Page"

    return (
        <Layout about siteTitle={siteTitle}>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                Whether you're a student looking to improve your grades, a teacher seeking to enhance your classroom, or an
                administrator looking to optimize your school's performance, MyWebClass.Org has the tools you need to succeed.
                Try us out today and experience the future of education.

            </section>
        </Layout>
    );
}

