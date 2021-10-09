import css from './masory.module.sass'
import Masonry from 'react-masonry-css'
import ImageComponent from '../ImageComponent';

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

export default function MasoryProject({
    data
}) {

    const items = data.map(function(item) {
        return <ImageComponent key={item.id} id={item.id} src={item.src} caption={item.caption} href={item.href} />
    });

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={css.masonry_grid}
            columnClassName={css.masonry_grid_column}
        >        
            {items}
        </Masonry>
    )
}
