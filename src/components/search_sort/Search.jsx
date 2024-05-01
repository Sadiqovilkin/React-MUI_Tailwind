import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const Search = () => {
    const [searchval, setSearchval]=React.useState("")
  return (
    <div className="row">
        <div className="col-lg-4">
        <TextField id="outlined-basic" label="Search" variant="outlined" onKeyUp={(e)=>{
            setSearchval(e.target.value)
            console.log(searchval);
        }}/>
        </div>
        <div className="col-lg-4"></div>
    </div>
  )
}

export default Search