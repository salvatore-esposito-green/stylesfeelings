import React, { useState, useEffect } from 'react';
import css from './image.module.sass'
import { Link } from "react-router-dom";

export default function ImageComponent({
    id,
    src,
    caption,
    href,
    showHover
}) {

    const [isShown, setIsShown] = useState(false);

    const ImageBox = () => {
        return (
            <>
                <div
                    className={`${css.square} ${css.image_container}`}
                    data-in-view="true"
                    style={{ backgroundImage: `url(${src})` }}
                    data-aos={!showHover && "fade-up"} 
                    data-aos-delay={`${id*100}`}
                >{isShown}
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
                <div className={`${css.imageBig} ${isShown && showHover && css.display}`}>
                    <div
                        className={`${css.square} ${css.image_container}`}
                        data-in-view="true"
                        style={{ backgroundImage: `url(${src})` }}
                        data-aos="fade-up" 
                        data-aos-delay={`${id*100}`}
                    >
                        <img
                            data-src={src}
                            data-use-bg-image="true"
                            data-load="false"
                            data-size-format="filename"
                            className=""
                            data-image-dimensions="800x800"
                            data-image-resolution="800w"
                        />
                    </div>
                </div>               
            </>
        )
    }

    if(href) return (
        <Link 
            key={id} 
            className={css.overflow_hidden} 
            to={href}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            {ImageBox()}
        </Link>
    )

    return (
        <div            
            key={id}             
            className={`${css.overflow_hidden} ${css.padding_bottom}`} 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            to={href}
        >
            {ImageBox()}
        </div>
    )
}
