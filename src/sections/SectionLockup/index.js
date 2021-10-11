import css from './lockup.module.sass'
export default function SectionMission({
    h1,
    h2,
    p,
    p2,
    white
}) {
    return (
        <div className={`${css.lockup} ${white && css.white}`} data-in-view="true">
            {h1 && <h1 data-aos="fade-up">{h1}</h1>}
            {h2 && <h2 data-aos="fade-up">{h2}</h2>}
            {p && <p data-aos="fade-up">{p}</p>}
            {p2 && <p data-aos="fade-up">{p2}</p>}
        </div>
    )
}
