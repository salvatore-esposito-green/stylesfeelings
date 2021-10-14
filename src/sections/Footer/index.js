import css from './footer.module.sass'
import logo from '../../assets/images/logo_w.svg'
export default function Footer() {
    return (
        <section className={css.footer}>
            <div className={css.logo_container}>
                <img src={logo} align="center" width="200"/>
            </div>

            <a href="https://www.stylesfeelings.com/" className={css.site_web}>www.stylesfeelings.com</a>
            <a className={css.copyright}>Styles & Feelings Srl Unipersonale</a>
        </section>
    )
}
