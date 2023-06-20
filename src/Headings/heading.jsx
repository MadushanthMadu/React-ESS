import { Typography } from '@mui/material';

export const Heading = ({type, color, title, description}) => (
    <>
        <Typography 
            variant={type}
            color={color}
        >
            {title}
        </Typography>

        <Typography variant='p' color='tertiary.main'> {description} </Typography>
    </>
)