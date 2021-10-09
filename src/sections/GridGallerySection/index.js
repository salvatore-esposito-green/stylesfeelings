import css from './gridgallery.module.sass'
import ImageComponent from '../../components/ImageComponent';

export default function index({
    gallery
}) {
    return (
        <div className={`${css.grid} ${css.gc3} ${css.gg4} ${css.ph2}`}>            
            {gallery.map(item => <ImageComponent key={item.id} id={item.id} src={item.src} />)}
        </div>
    )
}

