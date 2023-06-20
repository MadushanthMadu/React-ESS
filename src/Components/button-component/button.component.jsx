import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { WidgetAlign } from '../../Enums/enums';

import theme from '../../Themes/theme.jsx';

export const ButtonWidget = ({
    callback, 
    width,
    text = "Button",
    isShowOutLine = false,
    bgcolor = isShowOutLine ? theme.palette.secondary.main : theme.palette.primary.main,
    textcolor = isShowOutLine ? theme.palette.primary.main : theme.palette.secondary.main,
    disabled = false,
    alignment = WidgetAlign.center
}) => (
        <Grid container justifyContent={alignment}>
            <Button
                id='btn-1'
                style={{
                    width: width,
                    backgroundColor: bgcolor,
                    color: textcolor,
                    margin: '8px',
                    padding: '12px 18px 12x 18px'
                    }}
                variant={isShowOutLine ? 'outlined' : 'contained'}
                disabled={disabled}
                onClick={callback}
            >
                {text}
            </Button>
        </Grid>
)