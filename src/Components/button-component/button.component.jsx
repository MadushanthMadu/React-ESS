import './button.styles.css';

import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { WidgetAlign } from '../../Enums/alignment';

export const ButtonWidget = ({
    text, 
    callback,
    width = "250px",
    isShowOutLine = true,
    bgcolor = isShowOutLine ? '#66b2ff' : '#ffffff',
    textcolor = isShowOutLine ? '#ffffff' : '#66b2ff',
    disabled = false,
    alignment = WidgetAlign.center
}) => (

    <Grid container justifyContent={alignment}>
        <Button
            id='btn-1'
            style={{width: width,
                backgroundColor: bgcolor,
                color: textcolor
                }}
            variant={isShowOutLine ? 'contained' : 'outlined'}
            disabled={disabled}
            onClick={callback}
        >
            {text}
        </Button>
    </Grid>
)