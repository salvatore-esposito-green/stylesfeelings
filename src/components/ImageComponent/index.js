import css from './image.module.sass'
import { Link } from "react-router-dom";

export default function ImageComponent({
    id,
    src,
    caption,
    href
}) {

    const ImageBox = () => {
        return (
            <div
                className={`${css.square} ${css.image_container}`}
                data-in-view="true"
                style={{ backgroundImage: `url(${src})` }}
                data-aos="fade-up" data-aos-delay={`${id*100}`}
            >
                <img
                    data-src={src}
                    data-use-bg-image="true"
                    data-load="false"
                    data-size-format="filename"
                    className=""
                    data-image-dimensions="100x100"
                    data-image-resolution="500w"
                />
                {caption && <div className={css.caption}><span>{caption}</span></div>}
            </div>
        )
    }

    if(href) return (
        <Link key={id} className={css.overflow_hidden} to={href}>
            {ImageBox()}
        </Link>
    )

    return (
        <div key={id} className={`${css.overflow_hidden} ${css.padding_bottom}`} to={href}>
            {ImageBox()}
        </div>
    )
}
