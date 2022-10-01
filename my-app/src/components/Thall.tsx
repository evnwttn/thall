import axios from 'axios';
import { Box, Button } from '@mui/material';

const buttonSx = {
  position: "absolute",
  top: "10vw",
  left: "25vw",
  width: "50vw",
  height: "25vw",
  border: "0.5vw solid #ACD90B",
  color: "#ACD90B",
  fontSize: "10vw",
  transform: "skew(-15deg)"
}

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
            <Button variant="text" sx={buttonSx} onClick={onClick}>thall</Button>
        </Box>
    )
}
