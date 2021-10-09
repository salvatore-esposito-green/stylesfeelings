import css from './overflow.module.sass'
export default function SectionOverflow() {
    return (
        <div className={css.overflow_hidden}>
            <div 
                className={`${css.halfsquare} ${css.image_container}`} 
                data-in-view="true" 
            >
                <img 
                    data-src="https://static1.squarespace.com/static/ta/5b97e4757c932794d952176f/18/assets/images/new-york/skyline.jpg" 
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
}
