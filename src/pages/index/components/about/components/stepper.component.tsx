import {Box, Button, Grid, Step, StepButton, StepLabel, Stepper, Typography, useTheme} from "@material-ui/core";
import SelectDateStep from './stepper/select-date.step';
import SelectParticipantsStep from './stepper/select-participants.step';
import SelectRegionStep from './stepper/select-region.step';
import React, {useState} from "react";
import {HorizontalBookingStepperProps} from "./stepper.props";
import {ControlPanelPropsInterface, StepProps} from "./stepper/step.props";
import {
    ArrowBack,
    ArrowForward, Done,
} from "@material-ui/icons";

type StepType = {
    label: string;
    component: (props: StepProps) => JSX.Element;
}
type HandleSetStep = (index: number) => () => void;
type HandleControlStep = () => void;

const steps: StepType[] = [
    SelectDateStep,
    SelectParticipantsStep,
    SelectRegionStep,
];

function ControlPanel({ className, setActiveStep, activeStep }: ControlPanelPropsInterface){

    const handleNextStep: HandleControlStep = () => setActiveStep(prevStep => prevStep + 1)
    const handleBackStep: HandleControlStep = () => setActiveStep(prevStep => prevStep - 1)

    return (
        <Box paddingTop={3} className={className}>
            <Button
                startIcon={<ArrowBack/>}
                disabled={activeStep === 0}
                onClick={handleBackStep}
            >Назад</Button>
            {
                activeStep === steps.length - 1
                ? (<Button
                        endIcon={<Done/>}
                    >К бронированию</Button>)
                : (<Button
                        disabled={activeStep === steps.length - 1}
                        onClick={handleNextStep}
                        endIcon={<ArrowForward/>}
                    >Вперед</Button>)
            }

        </Box>
    )
}

function HorizontalBookingStepper({ media }: HorizontalBookingStepperProps) {

    const [activeStep, setActiveStep] = useState(0);

    const handleStep: HandleSetStep = index => () => setActiveStep(index);

    return (
        <Box>
            <Box marginTop={7}>
                <Grid container paddingTop={7}>
                    <Grid item xs={12} lg={6}>
                        <Box>
                            <Stepper nonLinear activeStep={activeStep} orientation="vertical">
                                {
                                    steps.map(({ label }: StepType, index) => (
                                        <Step key={index}>
                                            <StepButton onClick={handleStep(index)}>
                                                <StepLabel>
                                                    {label}
                                                </StepLabel>
                                            </StepButton>
                                        </Step>
                                    ))
                                }
                            </Stepper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        {
                            steps[activeStep].component({
                                ControlPanel: ({ className }) => <ControlPanel className={className} setActiveStep={setActiveStep} activeStep={activeStep}/>
                            })
                        }
                    </Grid>
                </Grid>

            </Box>
        </Box>
    )
}

export default HorizontalBookingStepper;
