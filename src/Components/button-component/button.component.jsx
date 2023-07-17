import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { WidgetAlign } from '../../Enums/enums';

import theme from '../../Themes/theme.jsx';

export const ButtonWidget = ({
    callback, 
    Width,
    text = "Button",
    isShowOutLine = false,
    bgcolor = isShowOutLine ? theme.vars.palette.secondary.main : theme.vars.palette.primary.main,
    textcolor = isShowOutLine ? theme.vars.palette.primary.main : theme.vars.palette.secondary.main,
    disabled = false,
    alignment = WidgetAlign.center
}) => (
    <Grid container justifyContent={alignment}>
        <Button
            id='btn-1'
            style={{
                fontSize: theme.typography.p.fontSize,
                fontWeight: theme.typography.p.fontWeight,
                width: Width,
                backgroundColor: bgcolor,
                color: textcolor,
                marginBottom: '8px',
                padding: '12px 18px 12x 18px'
            }}
            variant={isShowOutLine ? 'outlined' : 'contained'}
            disabled={disabled}
            // onClick={callback}
            type='submit'
        >
            {text}
        </Button>
    </Grid>
)