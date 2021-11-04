import {Box, Button, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import AboutScreenMedia from './about.media';
import clsx from "clsx";
import Stepper from "./components/stepper.component";

const useStyles = makeStyles({
    screen: {
        marginTop: "150px",
    },
    screenLast: {
        marginBottom: "150px"
    },
    screenImage: {
        // filter: 'brightness(.8)',
        width: "90%",
        display: "inherit"
    }
})

function About() {

    const {Image, Steps} = AboutScreenMedia;

    const {
        screen,
        screenImage,
        screenLast
    } = useStyles();

    return (
        <>
            <Box className={screen}>
                <Container maxWidth={"xl"}>
                    <Grid container>
                        <Grid item xs={12} lg={6}>
                            <img src={Image} className={screenImage} alt="image"/>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box marginTop={4}>
                                <Box marginBottom={5}>
                                    <Typography variant={"h5"}>О Нас</Typography>
                                    <Typography variant={"h2"} marginTop={1}>Почему именно мы?</Typography>
                                </Box>
                                <Typography marginBottom={3} width={"70%"}>
                                    Клиенты компании «Турист-pro» имеют возможность заказать организацию туристического
                                    похода по одному из предоставленных маршрутов.
                                </Typography>
                                <Typography marginBottom={5} width={"70%"}>
                                    Компания берет на себя обязанность по полному
                                    расчету похода, с учетом всех пожеланий клиентов. Компания предоставляет широкий спектр
                                    дополнительных услуг, таких как: услуги проводников, предоставление аренды туристического
                                    оборудования, информационная поддержка и т.д.
                                </Typography>
                                <Button variant={"contained"} color={"secondary"}>Подробнее</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box className={clsx(screen, screenLast)}>
                <Container maxWidth={"xl"}>
                    <Typography variant={"h2"} align={"center"} marginBottom={7}>Как это работает?</Typography>
                    <Stepper media={Steps}/>
                </Container>
            </Box>
        </>
    )
}

export default About;
