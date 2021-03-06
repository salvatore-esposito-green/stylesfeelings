import VideoComponent from '../../components/VideoComponent'
import css from './hero.module.sass'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import logo from '../../assets/images/logo_w.svg'
import en from '../../assets/images/en.png'
import it from '../../assets/images/it.png'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { slidehero } from '../../assets/data'
export default function SectionHero() {
    return (
        <div className={css.hero}>
             <Switch>
                <Route exact path="/">
                    <Link to={"/en"} className={css.lang}>
                        <img src={en} alt="Eng" /><span>Eng</span>            
                    </Link>
                </Route>
                <Route exact path="/en">
                    <Link to={"/"} className={css.lang}>
                        <img src={it} alt="Ita" /><span>Ita</span>
                    </Link>
                </Route>
            </Switch>
            {/*  <VideoComponent /> */}
            <Fade
                duration={1000}
                transitionDuration={1000}
                arrows={false}
                cssClass={`${css.slideshow} ${css.halfsquare}`}
                easing="ease"
                pauseOnHover={false}
            >
                {slidehero?.map(image => {
                    return (
                        <div key={image.id} className={css.overflow_hidden}>
                            <div
                                className={css.image_container}
                                data-in-view="true"
                                style={{ backgroundImage: `url(${image.src})` }}
                            >
                                <img
                                    data-src={image.src}
                                    data-use-bg-image="true"
                                    data-load="false"
                                    data-size-format="filename"
                                    className=""
                                    data-image-dimensions="100x49"
                                    data-image-resolution="2500w"
                                />
                            </div>
                        </div>
                    )
                })}
            </Fade>
            <div className={css.container_logo}>
                <span>
                <div className={css.logo_container}>
                    <img src={logo} align="center" width="200" />
                </div>

                <a href="https://www.stylesfeelings.com/" className={css.site_web}>www.stylesfeelings.com</a>
                </span>
            </div>
        </div>
    )
}
