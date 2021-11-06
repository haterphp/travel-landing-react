import {makeStyles} from "@material-ui/styles";

export const useStepperStyles = makeStyles({
    stepImage: {
        height: 400,
        float: "right",
        userSelect: "none"
    },
    stepContent: {
        display: "flex",
        flexDirection: "column",
        height: '100%',
        paddingRight: 100
    },
    stepControlPanel: {
        marginTop: "auto"
    },
    stepper: {
        margin: "0 auto"
    }
});
