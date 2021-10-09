import css from './blockquotes.module.sass'
export default function BlockQuotes() {
    return (
        <blockquote data-in-view="true"  data-aos="fade-up">
            <div className={css.quote}>“Essere diversi:</div>
            <div className={css.quote}>questa è la nostra sfida ma anche la nostra forza.”</div>
            <div className={css.attribution}>Sabrina Corbo, Founder</div>
        </blockquote>
    )
}
