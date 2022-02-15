import React, { FunctionComponent } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@mui/material/MobileStepper';
import Styled from './ArticleImage.styled';

interface Props {
  images: string[];
}

const ArticleImage: FunctionComponent<Props> = ({ images }) => {
  const MAX_STEPS = images.length;
  const theme = useTheme();
  const classes = Styled.useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 350, flexGrow: 1 }}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 350,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step}
                alt="feed image"
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <Styled.Stepper>
        <MobileStepper
          classes={{
            dot: classes.dot,
            dotActive: classes.dotActive,
          }}
          steps={MAX_STEPS}
          position="static"
          activeStep={activeStep}
          backButton=""
          nextButton=""
        />
      </Styled.Stepper>
    </Box>
  );
};

export default ArticleImage;
