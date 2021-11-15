import {Box, Typography} from "@material-ui/core";
import {useStepperStyles} from "./styles";
import {StepProps} from "./step.props";


function EnterAdditionalOptionsStep({ControlPanel}: StepProps) {

    const {
        stepContent,
        stepControlPanel
    } = useStepperStyles();

    return (
        <Box className={stepContent}>
            <Typography variant={"h3"} marginBottom={3}>Выбирете дополнительные услуги</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi explicabo maxime
                rem, repellat repudiandae. Accusantium ad alias, aliquid architecto asperiores blanditiis consequuntur
                corporis deleniti dignissimos dolorum eaque eos esse et excepturi exercitationem fugiat illum labore
                laborum modi odio omnis perspiciatis quam ratione repudiandae rerum soluta tempora totam? Modi,
                voluptatibus?</Typography>
            <ControlPanel className={stepControlPanel}/>
        </Box>
    )
}

export default {
    label: "Выбирете дополнительные услуги",
    component: EnterAdditionalOptionsStep
};
