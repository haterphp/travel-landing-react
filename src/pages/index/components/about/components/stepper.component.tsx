import {Box, Step, StepButton, StepLabel, Stepper} from "@material-ui/core";
import SelectDateStep from './stepper/select-date.step';
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";

type StepType = {
    label: string;
    component: () => JSX.Element;
}

type HandleSetStep = (index: number) => () => void

const steps: StepType[] = [
    SelectDateStep,
    SelectDateStep,
    SelectDateStep,
];

const useStyles = makeStyles(theme => ({
    icon: {
        color: ""
    }
}))

function HorizontalBookingStepper() {

    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);

    const handleStep: HandleSetStep = index => () => setActiveStep(index);

    useEffect(() => {
        console.log(activeStep)
    }, [activeStep])

    return (
        <Box>
            <Stepper nonLinear activeStep={activeStep}>
                {
                    steps.map(({ label }: StepType, index) => (
                        <Step key={label}>
                            <StepButton onClick={handleStep(index)}>
                                <StepLabel StepIconProps={{ classes: { root: classes.icon} }}>
                                    {label}
                                </StepLabel>
                            </StepButton>
                        </Step>
                    ))
                }
            </Stepper>
        </Box>
    )
}

export default HorizontalBookingStepper;
