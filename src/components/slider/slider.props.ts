import React from "react";

export interface SliderSettings extends React.HTMLAttributes<HTMLDivElement>{
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToScroll?: number;
    slidesToShow?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    swipeToSlide?: boolean;
    className?: string;
    rtl?: boolean;
}
