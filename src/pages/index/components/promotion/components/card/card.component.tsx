import {Button, Card, CardContent, CardMedia, Typography, useTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core/styles";

export interface PromotionCardProps {
    title: string;
    description: string;
    publishDate: string;
    image: any;
}

const useStyles = (theme: Theme) => makeStyles({
    card: {
        position: "relative",
        "&:hover > $cardContent": {
            visibility: "visible",
            opacity: 1,
        }
    },
    cardContent: {
        transition: "opacity .25s ease, visibility .25s ease",
        visibility: "hidden",
        opacity: 0,
        position: "absolute",
        zIndex: 2,
        background: "rgba(0,0,0,0.38)",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column"
    },
    cardMedia: {
        zIndex: 1,
    }
})();

function PromotionCard({title, description, image, publishDate}: PromotionCardProps) {

    const {
        card,
        cardContent,
        cardMedia
    } = useStyles(useTheme());

    return (
        <Card className={card}>
            <CardContent className={cardContent}>
                <Typography color={'common.white'} width={"75%"} marginBottom={2}>{publishDate}</Typography>
                <Typography variant={"h3"} color={"common.white"} marginBottom={1}>{title}</Typography>
                <Typography color={'common.white'} width={"75%"} marginBottom={4}>{description}</Typography>
                <Button color={"light"} variant={"outlined"}>Подробнее</Button>
            </CardContent>
            <CardMedia
                component={"img"}
                height={"400"}
                image={image}
                alt={title}
                className={cardMedia}
            />
        </Card>
    )
}

export default PromotionCard;
