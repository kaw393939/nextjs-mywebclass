import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Register() {
    const siteTitle = "My WebClass.org | Register"
    return (
        <Layout register>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                Try
            </section>
        </Layout>
    );
}
