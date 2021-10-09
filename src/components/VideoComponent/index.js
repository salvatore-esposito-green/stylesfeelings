import React, { useState, useEffect } from "react";

import OnIcon from '../icons/on'
import OffIcon from '../icons/off'
import css from './video.module.sass'
import video from '../../assets/video/logo.mp4'
import bg from '../../assets/video/bg.png'
import urlAudio from '../../assets/video/audio.mp3'
import Footer from "../../sections/Footer";

const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        setPlaying(!playing);
    }

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};


export default function VideoComponent() {
    const [playing, toggle] = useAudio(urlAudio);

    return (
        <>
            <video
                className={`${css.absolute}`}
                playsInline
                muted
                aspectRatio="16:9"
                autoPlay
                loop
                width='100%' height='100%'
                data-inline-media
                data-inline-media-basepath={video}
                data-inline-media-locale="us"
            >
                <source src={video} type="video/mp4" />
            </video>
            <div className={css.mute_control} onClick={toggle}>
                {playing ? (<div className={css.on}>
                    <OnIcon />
                </div>) : (
                    <div className={css.off}>
                        <OffIcon />
                    </div>)}
            </div>
            <div className={css.scroll_arrow}></div>
        </>
    );
}
