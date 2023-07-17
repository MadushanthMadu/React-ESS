import { Typography } from '@mui/material';

export const Heading = ({type, color, title, description}) => (
    <>
        <Typography 
            variant={type}
            color={color}
            style={{ 
                paddingBottom : '16px'
            }}
        >
            {title}
        </Typography>

        <Typography variant='p' color='tertiary.main' style={{display: 'grid'}}> {description} </Typography>
    </>
)