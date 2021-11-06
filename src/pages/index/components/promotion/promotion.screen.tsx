import {Box, Container, Grid} from "@material-ui/core";
import PromotionCard, {PromotionCardProps} from './components/card/card.component';
import PromotionMedia from './promotion.media';

function PromotionScreen(){
    return(
        <Box marginBottom={20}>
            <Container maxWidth={"xl"}>
                <Grid container>
                    {
                        PromotionMedia.map((props: PromotionCardProps) => (
                            <Grid item xs>
                                <PromotionCard {...props}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default PromotionScreen;
