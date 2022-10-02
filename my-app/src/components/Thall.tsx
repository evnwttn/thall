import axios from 'axios';
import { Box, Button } from '@mui/material';

const buttonSx = {
  position: "absolute",
  top: "10vw",
  left: "25vw",
  width: "50vw",
  height: "25vw",
  border: "0.5vw solid #F29B03",
  color: "#ED8806",
  fontSize: "10vw",
  fontWeight: "800",
  transform: "skew(-15deg)",
}

const date = Date.now();
const date_ob = new Date(date);

const thePresent = {
  year: date_ob.getFullYear(),
  month: date_ob.getMonth() + 1,
  day: date_ob.getDate(),
  hour: date_ob.getHours(),
  minute: date_ob.getMinutes(),
  second: date_ob.getSeconds(),
}


export const Thall = () => {
    const onClick = () => {
        axios.post('http://localhost:4000/', thePresent)
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
