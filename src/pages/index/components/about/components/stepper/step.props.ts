import {HorizontalBookingStepperProps} from "../stepper.props";
import React from "react";

export interface ControlPanelPropsInterface extends React.HTMLAttributes<HTMLDivElement>{
    activeStep: number,
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
}

export interface StepProps{
    ControlPanel: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element
}
