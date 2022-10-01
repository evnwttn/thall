import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Box, IconButton } from '@mui/material';

export const Thall = () => {
    const onClick = () => {
        console.log('yo')
    }

    return (
        <Box>
            <IconButton onClick={onClick}>
                <AcUnitIcon />
            </IconButton>
        </Box>
    )
}
