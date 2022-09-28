import { useState } from "react";
import Button from '@mui/material/Button';

function Buton({ name }) {
    return ( <Button variant="outlined"> {name} </Button>)
}

export default Buton