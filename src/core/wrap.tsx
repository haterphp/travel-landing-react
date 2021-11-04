import Router from "./router";
import {theme} from "./theme";
import {ThemeProvider} from "@material-ui/core";

function Wrap() {
    return (
        <ThemeProvider theme={theme}>
            <Router/>
        </ThemeProvider>
    )
}

export default Wrap;
