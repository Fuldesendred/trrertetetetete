import Swiper from "swiper";
import { Navigation, Pagination} from "swiper/modules";

const initSlider = () => { 
    const swiper = new Swiper ('.swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 4,

        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
        pagination: {
            el: '.slider__pagination',
            type: 'bullets',
            clickable: true
        }
})};





export default initSlider

