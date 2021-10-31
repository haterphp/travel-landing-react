import {Box, Button, Container, Link, Menu, MenuItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import HeaderMedia from './header.media';
import clsx from "clsx";

const useStyles = makeStyles({
    header: {
        width: "100%",
        padding: "30px 0"
    },
    headerAbsolute: {
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
    },
    logo: {
        width: "100px"
    },
    headerContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    btnLinkWhite: {
        color: "#FFF !important",
        margin: "0px 7px !important"
    }
})

function Header(){
    const {
        header,
        headerAbsolute,
        logo,
        headerContainer,
        btnLinkWhite
    } = useStyles();

    const { LogoWhite } = HeaderMedia;

    return (
        <Box className={clsx(header, headerAbsolute)}>
            <Container maxWidth={"xl"}>
                <Box className={headerContainer}>
                    <img src={LogoWhite} className={logo} alt="logo"/>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Button className={btnLinkWhite}>Акции</Button>
                        <Button className={btnLinkWhite}>Поиск</Button>
                        <Button className={btnLinkWhite}>Управление бронированием</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header;
