
import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import AddSongs from './AddSongs';
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
const ViewSongs = ({songs}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>

            <button onClick={handleOpen} className='btn btn-warning '>View Songs</button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    { songs.length>1 ? songs.map((e)=>
                    <Typography key={e.id} id="modal-modal-title" variant="h6" component="h2">
                        {e.songName}
                    </Typography>
                   
                )
                    : <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                       This Artist Not Some songs
                    </Typography>

                    }
                    
                </Box>
            </Modal>
        </>
    )
}

export default ViewSongs