import {makeStyles} from "@material-ui/styles";
import {LayoutProps} from "./layout.props";
import {Box} from "@material-ui/core";
import Header from "./components/header/header.component";

const useStyles = makeStyles((theme) => {
    return {
        layout: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            position: "relative",
        }
    }

})

function Layout({ children }: LayoutProps){

    const { layout } = useStyles();

    return (
        <Box className={layout}>
            <Header/>
            {children}
        </Box>
    )
}

export default Layout;
