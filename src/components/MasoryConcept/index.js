import React, {useState} from 'react'; 
import css from './masory.module.sass'
import Masonry from 'react-masonry-css'
import ImageComponent from '../ImageComponent';
import { 
    conceptTextArray
 } from '../../assets/data'

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2
  };

export default function MasoryConcept() {

    const [panel, setPanel] = useState({
        secret: false,
        notting: false,
        apollo: false,
        jungle: false,
        cool: false,
        igloo: false
    })

    const onClickHandler = (item) => {
        return setPanel({
            secret: false,
            notting: false,
            apollo: false,
            jungle: false,
            cool: false,
            igloo: false, 
            [item]: true
        })
    }

    return (
        conceptTextArray.map(concept => {
            return (
            <div 
                key={concept.id}
                className={`${css.containerConceptBox} ${panel[concept.id] && css.collapse}`} 
                aria-labelledby={concept.title}
                onClick={() => onClickHandler(concept.id)}
            >
                <div className={css.left}>
                    <h3>{concept.title}</h3>
                    <p>{concept.p()}</p>
                </div>
                <div className={css.right}>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className={css.masonry_grid}
                        columnClassName={css.masonry_grid_column}
                    >        
                        {concept.gallery.map(function(item) {
                            return <ImageComponent key={item.src} id={item.src} src={item.src} showHover />
                        })}
                    </Masonry>
                </div>
            </div>
            )
        })
        
    )
}
