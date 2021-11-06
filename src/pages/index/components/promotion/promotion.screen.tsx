import {Box, Container, Grid} from "@material-ui/core";
import PromotionCard, {PromotionCardProps} from './components/card/card.component';
import PromotionMedia from './promotion.media';
import Slider from "../../../../components/slider/slider.component";

function PromotionScreen(){
    return(
        <Box marginBottom={20}>
            <Slider>
                {
                    PromotionMedia.map((props: PromotionCardProps) => (
                        <PromotionCard {...props}/>
                    ))
                }
            </Slider>
        </Box>
    )
}

export default PromotionScreen;
