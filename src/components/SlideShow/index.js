import 'react-slideshow-image/dist/styles.css'
import { Fade  } from 'react-slideshow-image';
import css from './slide.module.sass'
export default function SlideShowSection({
    gallery
}) {
    return (
            <Fade 
                duration={1500}
                transitionDuration={100}
                arrows={false}
                cssClass={`${css.slideshow} ${css.halfsquare}`}
                easing="ease"
                pauseOnHover={false}
            >
            {gallery?.map(image => {
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
                        {image.caption && <div className={css.image_caption}>
                            {image.caption}
                        </div>}
                    </div>
                )
            })}
        </Fade>
    )
}
