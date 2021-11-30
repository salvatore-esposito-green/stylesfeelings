import css from './blockquotes.module.sass'
import {
    Route
  } from "react-router-dom";
export default function BlockQuotes() {
    return (
        <blockquote data-in-view="true"  data-aos="fade-up">
            <Route exact path="/">
                <div className={css.quote}>“Essere diversi:</div>
                <div className={css.quote}>questa è la nostra sfida ma anche la nostra forza.”</div>
                <div className={css.attribution}>Sabrina Corbo, Founder</div>
            </Route>
            <Route exact path="/en">
                <div className={css.quote}>“Be always different:</div>
                <div className={css.quote}>this is our challenge but our strength too.”</div>
                <div className={css.attribution}>Sabrina Corbo, founder S&F</div>
            </Route>
        </blockquote>
    )
}
