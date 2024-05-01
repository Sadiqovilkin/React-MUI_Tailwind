import React from 'react'
import Swal from 'sweetalert2';
import { deleteOne } from '../../../../API/reguest';

const Delete = ({id,getData}) => {
  return (
    <button onClick={() => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteOne("artist", id)
                getData()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has to Refresh (Fixed)) ).",
                    icon: "success"
                });
            }
        });

    }}  className='btn btn-danger '>Delete</button>
  )
}

export default Delete