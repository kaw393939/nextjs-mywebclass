import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Try() {
    const siteTitle = "My WebClass.org | Try MyWebClass.Org"
    return (
        <Layout about>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                Try
            </section>
        </Layout>
    );
}

