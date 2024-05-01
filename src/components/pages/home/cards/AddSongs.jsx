import { Box, Input, Modal, Typography } from '@mui/material';

import React, { useState } from 'react'
import { post } from '../../../../API/reguest';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const AddSongs = ({card}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [songName , setSongName]=useState("")

    
  return (
    <>
    <button onClick={handleOpen} className='btn btn-success ' >AddSongs</button>

    <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Input onKeyUp={(e)=>{
                            setSongName(e.target.value)
                        }} />
                        <button onClick={()=>{
                            const uptdateCard = [...card , card.songs += {"songName":songName}]
                            post("artist",uptdateCard)
                        }} className='btn btn-dark '>Submit</button>
                    </Typography>

                    
                </Box>
            </Modal>
    </>
   
  )
}

export default AddSongs