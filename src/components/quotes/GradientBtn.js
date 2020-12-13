
import React from 'react';
import Button from '@material-ui/core/Button';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const GradientBtn = (props) => {
  const styles = useGradientBtnStyles();
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });
  return (
    <div className={gutterStyles.parent}>
     
      <div>
        <Button onClick={props.handleQuotesBtn} classes={chubbyStyles}>Get Quotes</Button>
      </div>
    </div>
  );
};


export default GradientBtn;