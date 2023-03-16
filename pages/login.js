import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';



export default function Login() {
    const siteTitle = "My WebClass.org | Login Page"

    return (
        <Layout login siteTitle={siteTitle}>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                Login
            </section>
        </Layout>
    );
}
