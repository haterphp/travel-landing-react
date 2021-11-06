import {SliderSettings} from "./slider.props";
// @ts-ignore
import SlickSlider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const baseSettings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
};

function mergeSliderSetting(newSettings: SliderSettings): SliderSettings{
    return { ...baseSettings, ...newSettings};
}

function Slider({ children, ...props }: SliderSettings){
    return (
        <SlickSlider {...mergeSliderSetting(props)}>
            { children }
        </SlickSlider>
    )
}

export default Slider;
