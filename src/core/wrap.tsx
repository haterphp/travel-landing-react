import Router from "./router";
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from "./theme";

function Wrap(){
    return (
        <ThemeProvider theme={theme}>
            <Router/>
        </ThemeProvider>
    )
}

export default Wrap;
