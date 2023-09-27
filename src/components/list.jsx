import React from 'react'
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const ak = ({name,email,index}) => {
  return (
    <div className="list">

    <h3>{name}</h3>
    <h3>{email}</h3>
    <Button variant="contained" color='error'>
          <DeleteIcon/>
        </Button>

  </div>
  )
}

export default ak