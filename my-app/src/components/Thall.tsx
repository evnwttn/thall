import axios from 'axios';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Box, IconButton } from '@mui/material';

export const Thall = () => {
    const onClick = () => {
        axios.post('http://localhost:4000/', 'yo')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <Box>
            <IconButton onClick={onClick}>
                <AcUnitIcon />
            </IconButton>
        </Box>
    )
}
