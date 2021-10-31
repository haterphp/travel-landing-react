import {Box, Button, Container, Grid, Typography} from "@material-ui/core";
import MainScreenMedia from './main.media';
import {makeStyles} from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
    screen: {
        minHeight: '100vh',
        position: "relative",
        display: "flex",
        alignItems: "center"
    },
    screenContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    bgImage: {
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        position: "absolute",
        zIndex: -1,
        objectPosition: "center center",
        filter: "brightness(.75)"
    },
    headline: {
        textTransform: "uppercase",
        marginBottom: "25px !important"
    },
    screenInfo: {
        marginTop: "150px",
        marginBottom: "350px"
    },
    screenBookVariant: {
        padding: "30px 50px",
        width: "100%"
    },
    btnBookNow: {
        float: 'right'
    }
}));

interface BookVariantGridItemProps {
    col?: string;
    value?: string;
    children?: React.ReactNode;
}

const BookVariantGridItem = (props: BookVariantGridItemProps) => (
    <Grid item xs>
        <Box padding={"0 30px"} display={"flex"} alignItems={"center"} height={"100%"}>
            { !props.children
                ? <Box>
                    <Typography variant={"body2"}>{props.col}</Typography>
                    <Typography variant={"caption"}>{props.value}</Typography>
                </Box>
                : props.children
            }
        </Box>
    </Grid>
)

function MainScreen(): JSX.Element {

    const {
        screen,
        screenContainer,
        bgImage,
        headline,
        screenInfo,
        screenBookVariant,
        btnBookNow
    } = useStyles();

    const { MainBg } = MainScreenMedia;

    return (
        <Box className={screen}>
            <video src={MainBg} className={bgImage} autoPlay={true} muted={true} loop={true}/>
            <Container maxWidth={"xl"}>
                <Box className={screenContainer}>
                    <Box className={screenInfo}>
                        <Typography variant={"h1"} color={"white"} className={headline} align={"center"}>«Турист-pro»<br/> Исполнить мечты просто!</Typography>
                        <Typography color={"white"} align={"center"}>Главная цель компании – сделать любой поход удобным, комфортным и безопасным.</Typography>
                    </Box>
                    <Box className={screenBookVariant} bgcolor={"common.white"}>
                        <Grid container>
                            <BookVariantGridItem col={'Регион'} value={"Какой-то регион"}/>
                            <BookVariantGridItem col={'Даты похода'} value={"20.11.2021 - 25.11.2021"}/>
                            <BookVariantGridItem col={'Уровень сложности'} value={"Средний"}/>
                            <BookVariantGridItem col={'Стоимость'} value={"5000₽ за человека"}/>
                            <BookVariantGridItem>
                                <Button variant={"contained"} className={btnBookNow}>Забронировать</Button>
                            </BookVariantGridItem>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default MainScreen;
