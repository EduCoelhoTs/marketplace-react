import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

interface Step {
    name: string;
    component: React.ReactNode,
}

export interface StepperProps {
    steps: Step[];
}

export default function HorizontalLinearStepper({ steps }: StepperProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  // const isStepOptional = (step: unknown) => {
  //   return step === 1;
  // };

  const isStepSkipped = (step: unknown) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <Box sx={{ width: '80%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{width: '100%'}}>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => {
            const stepProps = {};
            const labelProps = {};
          //   if (isStepOptional(index)) {
          //     labelProps.optional = (
          //       <Typography variant="caption">Optional</Typography>
          //     );
          //   }
          //   if (isStepSkipped(index)) {
          //     stepProps.completed = false;
          //   }
            return (
              <Step key={step.name} {...stepProps}>
                <StepLabel {...labelProps}>{step.name}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
          <React.Fragment>
              <Box>
                {
                    steps[activeStep].component
                }
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Voltar
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Concluir' : 'Avançar'}
                </Button>
              </Box>
          </React.Fragment>
        </Box>
    </Box>
  );
}
